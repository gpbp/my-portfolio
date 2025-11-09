// Centralized runtime/build-time configuration helpers
// Exposes API_URL and helpers to build API paths.

const runtimeConfig = typeof window !== 'undefined' ? (window as any).__RUNTIME_CONFIG__ : undefined;

export const API_URL: string =
  (process.env.NEXT_PUBLIC_API_URL as string) ||
  (process.env.NEXT_PUBLIC_BACKEND_API_URL as string) ||
  (process.env.NEXT_PUBLIC_MY_PORTFOLIO_BACKEND_API as string) ||
  runtimeConfig?.NEXT_PUBLIC_API_URL ||
  '';

/**
 * Build a fully-qualified API URL for a given path. If API_URL is empty,
 * this returns the original path (assumed to be relative).
 */
export function buildApiPath(path: string) {
  if (!path) return path;
  if (!API_URL) return path;
  const base = API_URL.replace(/\/+$/, '');
  const p = path.replace(/^\/+/, '');
  return `${base}/${p}`;
}

export default { API_URL, buildApiPath };
