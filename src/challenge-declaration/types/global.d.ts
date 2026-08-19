declare global {
  type ID = string | number;

  type Timestamp = string;

  interface AppConfig {
    appName: string;
    version: string;
    maxPeserta: number;
  }
}

export {};