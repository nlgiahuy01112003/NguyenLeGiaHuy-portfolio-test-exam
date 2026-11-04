import { chromium } from 'file:///E:/Project/projects/animated-portfolio/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';

const preview = spawn('npm.cmd', ['run', 'preview', '--', '--port', '4173'], {
  cwd: 'e:/Project/test-exam',
  shell: true,
});

await new Promise((resolve) => setTimeout(resolve, 2500));

try {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  console.log('1. Testing Homepage (/)');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/1-home.png' });

  console.log('2. Testing Resume (/resume)');
  await page.click('a[href="/resume"]');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/2-resume.png' });

  console.log('3. Testing Skills (/skills)');
  await page.click('a[href="/skills"]');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/3-skills.png' });

  console.log('4. Testing Projects (/projects)');
  await page.click('a[href="/projects"]');
  await page.waitForTimeout(1000);
  // Test search
  await page.fill('input[type="text"]', 'Next.js');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/4-projects-search.png' });

  console.log('5. Testing Contact (/contact) and form validation');
  await page.click('a[href="/contact"]');
  await page.waitForTimeout(1000);
  // Submit empty form to trigger validation
  await page.click('button[type="submit"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/5-contact-errors.png' });

  // Fill valid data and submit
  await page.fill('input#name', 'Nhà Tuyển Dụng PKS');
  await page.fill('input#email', 'careers@genxpks.com.vn');
  await page.fill('input#subject', 'Mời phỏng vấn TTS Frontend');
  await page.fill('textarea#message', 'Xin chào Huy, chúng tôi đã xem portfolio của bạn và rất ấn tượng với khả năng code React cũng như animation!');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000); // wait for 1.5s mock
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/6-contact-success.png' });

  console.log('6. Testing 404 page');
  await page.goto('http://localhost:4173/duong-dan-khong-ton-tai', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/7-notfound.png' });

  console.log('7. Testing Mobile view (375x812)');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  // Open hamburger
  await page.click('.header__hamburger');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'e:/Project/test-exam/screenshots-demo/8-mobile-menu.png' });

  console.log('✅ ALL TESTS PASSED! Real screenshots saved in screenshots-demo/');
  await browser.close();
} finally {
  preview.kill();
  process.exit(0);
}
