import { WorkerTemplate } from "../worker.template";
import * as puppeteer from 'puppeteer';
import { FullLaunchOptions } from "../helper/launchOptions";

export class worker extends WorkerTemplate {
  name: string    = 'Nike';
  baseURL: string = 'https://nike.com';

  async jobs( launchParams?: FullLaunchOptions ): Promise<any> {
    //this.log('Nike Job!');
    const browser = await puppeteer.launch(launchParams);

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

  async init(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
