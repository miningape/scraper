export interface webProcess {
  name: string;
  startUrl: string;
  jobs: () => void;
}