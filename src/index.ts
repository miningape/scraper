import { manifest, ManifestEntry } from "./manifest";
import { Worker, isMainThread } from 'worker_threads';
import { WorkerTemplate } from "./worker.template.js";

console.log("Main Thread Started")

// Spawn a bunch of workers
manifest.forEach( (job: ManifestEntry) => {
  console.log(`Spawning: ${job.name} - ${job.details}`);
  new Worker('./build/worker.js', { argv: [JSON.stringify(job)] })
} );
