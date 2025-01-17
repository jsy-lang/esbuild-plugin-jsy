import jsy_plugin from 'esbuild-plugin-jsy'
import * as esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['./app.jsy'],
  bundle: true,
  outfile: './dist/out.js',
  plugins: [jsy_plugin],
}).catch(() => process.exit(1))

