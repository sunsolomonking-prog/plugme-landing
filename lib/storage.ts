import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function appendJsonRecord<T>(fileName: string, payload: T) {
  await mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, fileName);

  let current: T[] = [];

  try {
    const existing = await readFile(filePath, 'utf-8');
    current = JSON.parse(existing) as T[];
    if (!Array.isArray(current)) {
      current = [];
    }
  } catch {
    current = [];
  }

  current.push(payload);
  await writeFile(filePath, JSON.stringify(current, null, 2), 'utf-8');
}
