declare namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string | undefined;
    readonly BASE_URL: string | undefined;
    readonly NEXT_PUBLIC_BASE_URL: string | undefined;
    readonly NEXT_PUBLIC_APP_URL: string | undefined;
    readonly JWT_SECRET: string | undefined;
  }
}