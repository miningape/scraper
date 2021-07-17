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
}