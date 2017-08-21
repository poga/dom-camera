const puppeteer = require('puppeteer')

async function camera (url, selector, out) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
// Wait for the results to show up
  await page.waitForSelector(selector)

// Extract the results from the page
  const e = await page.evaluate((selector) => {
    const doms = Array.from(document.querySelectorAll(selector))
    var {top, right, bottom, left, height, width} = doms[0].getBoundingClientRect()
    return {top, right, bottom, left, height, width}
  }, selector)
  await page.screenshot({path: out, clip: {x: e.left, y: e.top, width: e.width, height: e.height}})
  browser.close()
}

module.exports = camera
