import {readFile} from 'fs/promises'
import {relative as relative_path} from 'path'
import jsy_transpile_srcmap from 'jsy-transpile/esm/with_srcmap.mjs'

export default {
  name: 'jsy',
  setup(build) {
    let opt = {}
    build.onLoad({ filter: /\.jsy$/ }, async args => {
      let jsy_src = await readFile(args.path, 'utf8')
      let filename = relative_path(process.cwd(), args.path)

      let contents = jsy_transpile_srcmap(jsy_src, filename, opt)
      return { contents }
    })
  }
}
