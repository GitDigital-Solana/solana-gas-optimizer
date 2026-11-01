export interface OptimizerConfig {
  rules: {
    anchor_patterns: boolean;
    rust_patterns: boolean;
    cu_patterns: boolean;
  };
  comments: {
    enabled: boolean;
    severity_threshold: 'low' | 'medium' | 'high';
  };
  reporting: {
    generate_summary: boolean;
  };
}

export function loadConfig(): OptimizerConfig {
  return {
    rules: {
      anchor_patterns: true,
      rust_patterns: true,
      cu_patterns: true,
    },
    comments: {
      enabled: true,
      severity_threshold: 'medium',
    },
    reporting: {
      generate_summary: true,
    },
  };
}