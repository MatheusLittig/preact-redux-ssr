import { ExplorerApi } from "atomicassets";

const api = new ExplorerApi(
  process.env.NEXT_PUBLIC_ATOMIC_URL as string,
  "atomicassets",
  { fetch, rateLimit: 4 } as any
);

export { api }