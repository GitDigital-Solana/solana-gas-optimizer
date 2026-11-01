import { AnchorPatterns } from "./patterns/anchor-patterns";
import { RustPatterns } from "./patterns/rust-patterns";
import { ComputePatterns } from "./patterns/cu-patterns";

export interface Finding {
  severity: 'low' | 'medium' | 'high';
  message: string;
  cu_savings?: string;
}

export class Analyzer {
  constructor(private diff: string) {}

  analyze(): Finding[] {
    return [
      ...AnchorPatterns.detect(this.diff),
      ...RustPatterns.detect(this.diff),
      ...ComputePatterns.detect(this.diff),
    ];
  }
}