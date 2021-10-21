const pi_jsy = require('esbuild-plugin-jsy')

require('esbuild').build({
  entryPoints: ['./app.jsy'],
  bundle: true,
  outfile: 'test/dist/out.js',
  plugins: [pi_jsy],
}).catch(() => process.exit(1))

