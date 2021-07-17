import * as puppeteer from "puppeteer";
import { FullLaunchOptions } from "./helper/launchOptions";
import { ManifestEntry } from "./manifest";
import { WorkerTemplate } from "./worker.template";

interface Constructable<T> {
  new(...args: any) : T;
}

const arg = process.argv[2];
  
const workerInfo: ManifestEntry = JSON.parse(arg);
const Worker: Constructable<WorkerTemplate> = require(workerInfo.file).worker;
const worker = new Worker();

(async () =>{
  const launchParams: FullLaunchOptions = { headless: false };
  await worker.jobs( launchParams );
})()