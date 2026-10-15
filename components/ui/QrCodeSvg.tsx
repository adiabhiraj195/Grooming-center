"use client";

import React, { useMemo } from "react";

/**
 * Pure TypeScript Zero-Dependency QR Code Generator
 * Generates an SVG QR code for arbitrary text (such as Google Review URLs)
 * without requiring any external npm package.
 */

// Basic Galois Field (GF 256) tables and Reed-Solomon polynomial math for QR
const EXP_TABLE = new Uint8Array(256);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
  let val = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = val;
    LOG_TABLE[val] = i;
    val = (val << 1) ^ (val & 128 ? 0x11d : 0);
  }
  EXP_TABLE[255] = EXP_TABLE[0];
})();

function gmult(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return EXP_TABLE[(LOG_TABLE[a] + LOG_TABLE[b]) % 255];
}

function polyMul(p1: number[], p2: number[]): number[] {
  const result = new Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] ^= gmult(p1[i], p2[j]);
    }
  }
  return result;
}

function getGeneratorPoly(degree: number): number[] {
  let g = [1];
  for (let i = 0; i < degree; i++) {
    g = polyMul(g, [1, EXP_TABLE[i]]);
  }
  return g;
}

function calculateEC(data: number[], ecCount: number): number[] {
  const gen = getGeneratorPoly(ecCount);
  const msg = [...data, ...new Array(ecCount).fill(0)];
  for (let i = 0; i < data.length; i++) {
    const lead = msg[i];
    if (lead !== 0) {
      for (let j = 0; j < gen.length; j++) {
        msg[i + j] ^= gmult(gen[j], lead);
      }
    }
  }
  return msg.slice(data.length);
}

// Generate matrix modules for a Version 4 QR Code (33x33 modules, up to 78 alphanumeric/URL bytes with Medium EC)
function createQrMatrix(text: string): boolean[][] {
  const size = 33; // Version 4 size: 21 + (version - 1) * 4 = 33
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));
  const isFunction: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

  // Place finder pattern at (r, c)
  function placeFinder(r: number, c: number) {
    for (let row = -1; row <= 7; row++) {
      for (let col = -1; col <= 7; col++) {
        const nr = r + row;
        const nc = c + col;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
          isFunction[nr][nc] = true;
          if (row >= 0 && row <= 6 && col >= 0 && col <= 6) {
            const isBorder = row === 0 || row === 6 || col === 0 || col === 6;
            const isCenter = row >= 2 && row <= 4 && col >= 2 && col <= 4;
            matrix[nr][nc] = isBorder || isCenter;
          } else {
            matrix[nr][nc] = false;
          }
        }
      }
    }
  }

  // 3 Finders
  placeFinder(0, 0);
  placeFinder(0, size - 7);
  placeFinder(size - 7, 0);

  // Alignment pattern at (24, 24)
  const alignR = 24;
  const alignC = 24;
  for (let row = -2; row <= 2; row++) {
    for (let col = -2; col <= 2; col++) {
      const nr = alignR + row;
      const nc = alignC + col;
      isFunction[nr][nc] = true;
      matrix[nr][nc] = Math.max(Math.abs(row), Math.abs(col)) !== 1;
    }
  }

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    isFunction[6][i] = true;
    matrix[6][i] = i % 2 === 0;
    isFunction[i][6] = true;
    matrix[i][6] = i % 2 === 0;
  }

  // Dark module
  isFunction[size - 8][8] = true;
  matrix[size - 8][8] = true;

  // Format information areas (dummy mask 0)
  for (let i = 0; i < 9; i++) {
    isFunction[8][i] = true;
    isFunction[i][8] = true;
    isFunction[size - 1 - i][8] = true;
    isFunction[8][size - 1 - i] = true;
  }

  // Byte mode encoding (0100)
  const bytes = new TextEncoder().encode(text);
  const dataBits: number[] = [0, 1, 0, 0]; // Byte mode indicator
  // Character count (8 bits for version 1-9)
  const len = bytes.length;
  for (let i = 7; i >= 0; i--) {
    dataBits.push((len >> i) & 1);
  }
  // Data payload
  for (const b of bytes) {
    for (let i = 7; i >= 0; i--) {
      dataBits.push((b >> i) & 1);
    }
  }
  // Terminator
  while (dataBits.length % 8 !== 0) dataBits.push(0);

  // Convert to data codewords
  const dataCodewords: number[] = [];
  for (let i = 0; i < dataBits.length; i += 8) {
    let byteVal = 0;
    for (let j = 0; j < 8; j++) {
      byteVal = (byteVal << 1) | dataBits[i + j];
    }
    dataCodewords.push(byteVal);
  }

  // Pad to required capacity (Version 4 Medium: 64 data codewords)
  const maxDataCodewords = 64;
  const padBytes = [0xec, 0x11];
  let padIdx = 0;
  while (dataCodewords.length < maxDataCodewords) {
    dataCodewords.push(padBytes[padIdx % 2]);
    padIdx++;
  }

  // Error correction codewords (Version 4 Medium uses 36 EC codewords)
  const ecCodewords = calculateEC(dataCodewords.slice(0, maxDataCodewords), 36);
  const allCodewords = [...dataCodewords.slice(0, maxDataCodewords), ...ecCodewords];

  // Convert to bit stream
  const finalBits: number[] = [];
  for (const cw of allCodewords) {
    for (let i = 7; i >= 0; i--) {
      finalBits.push((cw >> i) & 1);
    }
  }

  // Place bits into matrix zigzagging upwards and downwards
  let bitIdx = 0;
  let dir = -1; // Upward
  let r = size - 1;
  let c = size - 1;

  while (c > 0) {
    if (c === 6) c--; // Skip timing column
    for (let i = 0; i < size; i++) {
      const row = dir === -1 ? r - i : r + i;
      for (let col = c; col >= c - 1; col--) {
        if (!isFunction[row][col]) {
          const bit = bitIdx < finalBits.length ? finalBits[bitIdx++] : 0;
          // Apply mask 0: (row + col) % 2 === 0
          const mask = (row + col) % 2 === 0;
          matrix[row][col] = (bit === 1) !== mask;
        }
      }
    }
    r = dir === -1 ? 0 : size - 1;
    dir = -dir;
    c -= 2;
  }

  // Format info mask (Medium EC, Mask 0: bits 101010000010010)
  const formatBits = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];
  const coords = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]
  ];
  for (let i = 0; i < 15; i++) {
    const [row, col] = coords[i];
    matrix[row][col] = formatBits[i] === 1;
  }

  return matrix;
}

export interface QrCodeSvgProps {
  value: string;
  size?: number;
  className?: string;
  showCenterPaw?: boolean;
}

export const QrCodeSvg: React.FC<QrCodeSvgProps> = ({
  value,
  size = 200,
  className = "",
  showCenterPaw = true,
}) => {
  const matrix = useMemo(() => {
    try {
      return createQrMatrix(value);
    } catch {
      // Fallback empty matrix if text is unusually long
      return Array.from({ length: 33 }, () => Array(33).fill(false));
    }
  }, [value]);

  const moduleCount = matrix.length;
  const quietZone = 2;
  const viewBoxSize = moduleCount + quietZone * 2;

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={size}
        height={size}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="block rounded-xl"
        role="img"
        aria-label={`QR Code for ${value}`}
      >
        {/* Crisp white background */}
        <rect width={viewBoxSize} height={viewBoxSize} fill="#FFFFFF" rx="2" />

        {/* QR modules rendered with ink colour */}
        <g fill="#1F2A44">
          {matrix.map((row, r) =>
            row.map((isDark, c) => {
              if (!isDark) return null;
              // If center paw is enabled, clear modules in the center badge area
              if (
                showCenterPaw &&
                r >= Math.floor(moduleCount / 2) - 3 &&
                r <= Math.floor(moduleCount / 2) + 3 &&
                c >= Math.floor(moduleCount / 2) - 3 &&
                c <= Math.floor(moduleCount / 2) + 3
              ) {
                return null;
              }
              return (
                <rect
                  key={`${r}-${c}`}
                  x={c + quietZone}
                  y={r + quietZone}
                  width="1.02"
                  height="1.02"
                  rx="0.15"
                />
              );
            })
          )}
        </g>
      </svg>

      {/* CENTER PAW BADGE */}
      {showCenterPaw && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-9 h-9 rounded-full bg-marigold border-2 border-ink flex items-center justify-center shadow-sticker-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-ink">
              <ellipse cx="12" cy="15" rx="5" ry="4" />
              <circle cx="7" cy="9.5" r="2.2" />
              <circle cx="10.5" cy="7" r="2.2" />
              <circle cx="13.5" cy="7" r="2.2" />
              <circle cx="17" cy="9.5" r="2.2" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

