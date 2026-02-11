type Bucket = { count: number; expiresAt: number };

const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.expiresAt < now) {
    buckets.set(key, { count: 1, expiresAt: now + windowMs });
    return true;
  }

  if (existing.count >= limit) {
    return false;
  }

  existing.count += 1;
  return true;
}
