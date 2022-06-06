import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  input: "./src/index.js",
  output: [
    {
      file: './dist/C_tools-umd.js',
      format: 'umd',
      name: 'C_tools'   
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    },
    {
      file: './dist/C_tools-es.js',
      format: 'es'
    },
    {
      file: './dist/C_tools-cjs.js',
      format: 'cjs'
    }
  ],
  plugins:[
    json(),
    commonjs()
  ]
}