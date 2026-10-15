import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const outDir = path.resolve('docs/screenshots');
fs.mkdirSync(outDir, { recursive: true });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9222/json/list');
      if (res.ok) {
        const data = await res.json();
        const page = data.find((item) => item.type === 'page');
        if (page && page.webSocketDebuggerUrl) {
          return page.webSocketDebuggerUrl;
        }
      }
    } catch {
      // wait
    }
    await sleep(200);
  }
  throw new Error('Chrome page target not available');
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.events = new Map();

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) {
          reject(new Error(msg.error.message));
        } else {
          resolve(msg.result);
        }
      }
    };
  }

  ready() {
    return new Promise((resolve, reject) => {
      if (this.ws.readyState === WebSocket.OPEN) return resolve();
      this.ws.onopen = () => resolve();
      this.ws.onerror = (e) => reject(e);
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result?.value;
  }

  async screenshot(filePath, clip = null) {
    const params = { format: 'png' };
    if (clip) params.clip = clip;
    const res = await this.send('Page.captureScreenshot', params);
    const buf = Buffer.from(res.data, 'base64');
    fs.writeFileSync(filePath, buf);
    console.log(`Saved screenshot to ${filePath}`);
  }

  close() {
    this.ws.close();
  }
}

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1280,900',
    'about:blank',
  ], {
    stdio: 'ignore'
  });

  try {
    const wsUrl = await getWsUrl();
    const cdp = new CDPClient(wsUrl);
    await cdp.ready();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');

    console.log('Navigating to http://localhost:3000...');
    await cdp.send('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(3500); // Wait for hydration

    // Set viewport
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 850,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sleep(500);

    // 1. Hero & Navbar
    await cdp.eval('window.scrollTo(0, 0)');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '01_hero_navbar.png'));

    // 2. Trust Strip & Services Showcase
    await cdp.eval('document.querySelector("#services")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '02_services_showcase.png'));

    // 3. Pricing Calculator & Plans
    await cdp.eval('document.querySelector("#pricing")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '03_pricing_plans.png'));

    // 4. Google Reviews & Wall of Love
    await cdp.eval('document.querySelector("#reviews")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '04_google_reviews.png'));

    // 5. Write Review Stepper
    await cdp.eval('document.querySelector("#write-review")?.scrollIntoView({behavior: "instant", block: "center"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '05_write_review_stepper.png'));

    // 6. Products Shelf
    await cdp.eval('document.querySelector("#products")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '06_products_shelf.png'));

    // Open Basket Drawer to showcase cart UX!
    await cdp.eval(`
      const addBtn = document.querySelector("#products button");
      if (addBtn) addBtn.click();
    `);
    await sleep(600);
    await cdp.screenshot(path.join(outDir, '07_basket_drawer.png'));

    // Close basket drawer if open
    await cdp.eval(`
      const closeBtn = document.querySelector('[aria-label="Close cart"], button.close');
      if (closeBtn) closeBtn.click();
      window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Escape'}));
    `);
    await sleep(400);

    // 8. Transformations Gallery
    await cdp.eval('document.querySelector("#gallery")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '08_transformations_gallery.png'));

    // 9. How It Works & Groomers
    await cdp.eval('document.querySelector("#how-it-works")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '09_how_it_works.png'));

    await cdp.eval('document.querySelector("#groomers")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '10_groomers_team.png'));

    // 10. FAQ Section
    await cdp.eval('document.querySelector("#faq")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '11_faq_section.png'));

    // 11. Booking Form Section
    await cdp.eval('document.querySelector("#book")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '12_booking_form.png'));

    // 12. Location & Hours
    await cdp.eval('document.querySelector("#contact")?.scrollIntoView({behavior: "instant", block: "start"})');
    await sleep(800);
    await cdp.screenshot(path.join(outDir, '13_location_directions.png'));

    // 13. Standalone Review QR Desk Standee Page
    console.log('Navigating to http://localhost:3000/review-qr...');
    await cdp.send('Page.navigate', { url: 'http://localhost:3000/review-qr' });
    await sleep(2000);
    await cdp.screenshot(path.join(outDir, '14_counter_qr_standee.png'));

    // 14. Mobile Viewport (iPhone 14 style)
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await cdp.send('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(2500);
    await cdp.eval('window.scrollTo(0, 0)');
    await sleep(600);
    await cdp.screenshot(path.join(outDir, '15_mobile_hero.png'));

    cdp.close();
    console.log('All screenshots captured successfully!');
  } finally {
    chrome.kill();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
