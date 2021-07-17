export interface ManifestEntry {
  file: string;
  name: string;
  details?: string;
}

export const manifest: Array<ManifestEntry> = [
  { file: "./workers/nike", name: "Nike", details: "Nike Shoes Buyer" },
  { file: "./workers/supreme", name: "Supreme", details: "Buying other shits" },
];
