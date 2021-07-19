import { Page } from "puppeteer";
import { FullLaunchOptions } from "./helper/launchOptions";

export abstract class WorkerTemplate {
  abstract readonly name: string;
  abstract readonly baseURL: string;

  constructor() {}

  abstract init(): Promise<any>;
  abstract jobs(launchParams?: FullLaunchOptions): Promise<any>;
  abstract stop(): Promise<any>;
  
  log(message?: any): void {
    console.log(`Worker Process (${process.pid})-${this.name}: ${message}`);
  }

  async click(selector: string, page: Page) {
    await page.waitForSelector(selector, {visible: true});
    return page.click(selector);
  }

  async type(selector: string, input: string, page: Page, focus?: boolean) {
    await page.waitForSelector(selector);
    
    if (focus) {
      await page.focus(selector);
      await page.keyboard.type(input);
    } else {
      await page.evaluate( (data) => {
        return (<HTMLInputElement>document.querySelector(data.selector)).value = data.input;
      }, {selector: selector, input: input} );
    }
  }
}