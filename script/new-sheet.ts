#!/usr/bin/env -S bun run

import { mkdir, writeFile, access } from 'node:fs/promises'
import path from 'node:path'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import * as TOML from 'smol-toml'

const main = async () => {
  const url = new URL(import.meta.url)
  const scriptPath = url.pathname
  const root = path.resolve(scriptPath, '../../')

  const name = process.argv[2]

  if (!name) {
    console.error('Usage: create.ts <POST>')
    return
  }

  const folder = path.join(root, 'src', name)

  const exists = (path: string) =>
    access(path)
      .then(() => true)
      .catch(() => false)

  if (await exists(folder)) {
    console.error(`Post already exists: ${folder}`)
    return
  }

  await mkdir(folder, { recursive: true })

  const now = new TOML.TomlDate(new Date().toISOString())

  const frontmatter = {
    created: now,
  }

  const toml = TOML.stringify(frontmatter).trim()

  await writeFile(path.join(folder, 'index.md'), `+++\n${toml}\n+++\n`, 'utf-8')

  console.info(`Created ${folder}/index.md`)

  try {
    await promisify(exec)(`xdg-open "${folder}"`)
  } catch (_) {
    console.warn('Failed to open folder with `xdg-open`')
  }
}

await main()
