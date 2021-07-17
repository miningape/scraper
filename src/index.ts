import { manifest, ManifestEntry } from "./manifest";
import { Worker, isMainThread } from 'worker_threads';
import { WorkerTemplate } from "./worker.template.js";

interface Constructable<T> {
  new(...args: any) : T;
}

if ( isMainThread ) {
  console.log("Main Thread")
  
  manifest.forEach( (job: ManifestEntry) => {
    new Worker('./build/index.js', { argv: [JSON.stringify(job)] })
  } );
} else {
  const arg = process.argv[2];
  
  const workerInfo: ManifestEntry = JSON.parse(arg);
  const Worker: Constructable<WorkerTemplate> = require(workerInfo.file).worker;
  const worker = new Worker();
  
  worker.jobs();
}
