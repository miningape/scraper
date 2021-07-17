import { webProcess } from "../types/webProcess"
import { WorkerTemplate } from "../worker.template";
import * as puppeteer from 'puppeteer';

export const nikeProcess: webProcess = {
  name: 'Nike Scraper',
  startUrl: 'Jeff',
  jobs: () => {
    console.log("Hello From Nike");
  },
}

export class worker extends WorkerTemplate {
  async jobs(): Promise<any> {
    this.log('Nike Job!');

      const browser = await puppeteer.launch({
        headless: false,
      });
      const page = await browser.newPage();
      await page.goto('https://www.nike.com/dk/t/kd14-basketballsko-0lnLWh/CW3935-100');
    
      //page.waitForNavigation({ waitUntil: 'networkidle0'} );
    
      await page.waitForSelector('[data-var=acceptBtn1]')
      await page.click('[data-var=acceptBtn1]');
    
      await page.waitForTimeout(3000)
    
      await browser.close();
  }
  stop(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  name: string    = 'Nike';
  baseURL: string = 'https://nike.com';

  async init(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
