export default {
    title: 'Family Tree',
    description: 'Family Tree Documentation',
    src:'./src/',
    files: '**/*.{md,markdown,mdx}',
    htmlContext: {
      body: {
        scripts: [{
          // support syntax highlighting
          // src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.40.0/mode/go/go.min.js'
          src:'https://storage.fredliang.cn/web/prism.js'
        },{
          src:'https://storage.fredliang.cn/web/prism.css'
        }]
      }
    }
  }