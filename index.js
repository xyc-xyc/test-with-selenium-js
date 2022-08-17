const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const homedir = require('os').homedir();

const service = new chrome.ServiceBuilder(homedir + '/chromedrivers/chromedriver');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

(async function test() {
    let options = new chrome.Options();
    let driver =  await new Builder()
                .setChromeService(service)
                .setChromeOptions(options)
                .forBrowser('chrome')
                .build();
    try{
        let q = ["test", "ice cream", "selenium"];
        for(var i=0;i<q.length;i++) {
            await driver.get('https://www.google.com');
            await sleep(1000)
            await driver.findElement(By.name('q')).sendKeys(q[i], Key.ENTER);
            await sleep(3000)
        }                
    }finally {
        await driver.quit();
    }
})();
  

