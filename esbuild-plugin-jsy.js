import {readFile} from 'fs/promises'
import {relative as relative_path} from 'path'
import { jsy_transpile_srcmap } from '@jsy-lang/jsy'

export const esbuild_plugin_jsy = {
  name: 'jsy',

  setup(build) {
    build.onLoad({ filter: /\.jsy$/ }, async args => {
      let jsy_src = await readFile(args.path, 'utf8')
      let filename = relative_path(process.cwd(), args.path)

      let jsy_opt = {}
      let jsy_result = jsy_transpile_srcmap(jsy_src, filename,
        { ... jsy_opt, as_rec: true })

      return { contents: jsy_result.code }
    })
  }
}

export { esbuild_plugin_jsy as default }
