export interface ManifestEntry {
  file: string;
  message: string;
}

export const manifest: Array<ManifestEntry> = [
  { file: "./workers/nike", message: "nikeProcess" },
  //{ file: "./integrations/supreme", name: "nikeProcess" },
];
