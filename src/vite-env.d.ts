interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_KEY: string;
  readonly VITE_REACT_APP_USE_MOCK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}