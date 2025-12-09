import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'

export function writeJson(path: string, data: any, spaces = 0) {
  return writeFile(path, JSON.stringify(data, undefined, spaces), 'utf-8')
}

export async function ensureDir(path: string) {
  if (!existsSync(path))
    await mkdir(path, { recursive: true })
}
