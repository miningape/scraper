import { LaunchOptions, BrowserLaunchArgumentOptions, BrowserConnectOptions, Product } from "puppeteer";

export type FullLaunchOptions = LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {
  product?: Product;
  extraPrefsFirefox?: Record<string, unknown>;
}