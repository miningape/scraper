import * as puppeteer from "puppeteer";
import { FullLaunchOptions } from "../helper/launchOptions";
import { WorkerTemplate } from "../worker.template";

export class worker extends WorkerTemplate {
  name: string;
  baseURL: string;

  init(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async jobs( launchParams?: FullLaunchOptions ): Promise<any> {
    const browser = await puppeteer.launch(launchParams);

    const page = await browser.newPage();
    await page.goto('https://www.streetwearofficial.com/collections/supreme');
    
    //await page.waitForNavigation({ waitUntil: 'networkidle2'} );
    
    await page.waitForTimeout(3000)
    
    await browser.close();

  }
  stop(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  
}