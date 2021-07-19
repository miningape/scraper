import * as Puppeteer from "puppeteer";
import { FullLaunchOptions } from "../helper/launchOptions";
import { WorkerTemplate } from "../worker.template";

export class worker extends WorkerTemplate {
  name: string    = 'Rick Roll' ;
  baseURL: string = 'https://youtube.com/';
  init(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async jobs(launchParams?: FullLaunchOptions): Promise<any> {
    const browser = await Puppeteer.launch({...launchParams});

    const page = await browser.newPage();
    await page.goto(this.baseURL);
    
      //page.waitForNavigation({ waitUntil: 'networkidle0'} );
    await this.click('[aria-label="Agree to the use of cookies and other data for the purposes described"]', page);

    await this.type('#search[name="search_query"]', 'Never Gonna Give You Up', page);

    // await this.click('#search-icon-legacy', page);

    // await page.waitForSelector('ytd-thumbnail.ytd-video-renderer');

    await Promise.all([this.click('#search-icon-legacy', page),page.waitForNavigation()])

    await this.click('a#thumbnail', page);

    await page.waitForTimeout(10000)
    
    await browser.close();
  }

  stop(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}