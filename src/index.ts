import { manifest, ManifestEntry } from "./manifest";
import { fork } from 'child_process';

console.log("Main Thread Started")

// Spawn a bunch of workers
manifest.forEach( (job: ManifestEntry) => {
  console.log(`Spawning: ${job.name} - ${job.details}`);
  fork('build/worker', [JSON.stringify(job)], {detached:true, silent:false})
  //new Worker('./build/worker.js', { argv: [JSON.stringify(job)] })
} );
