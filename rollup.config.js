import {builtinModules} from 'module'
import pkg from './package.json'
import rpi_resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'code/esbuild-plugin-jsy.mjs',
	output: [
		{file: pkg.module, format: 'es'},
		{file: pkg.main, format: 'cjs', exports: 'auto'}],
  plugins: [ rpi_resolve() ],
  external: id => /^\w+:/.test(id) || builtinModules.includes(id),
}

