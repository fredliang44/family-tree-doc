export default {
    title: 'Family Tree',
    description: 'Family Tree Documentation',
    src:'./',
    files: '**/*.{md,markdown,mdx}',
    menu: [
      'Introduction',
      { name: 'PRD', menu: ['Login & Register', 'Home', 'User', 'Project', 'Company', 'Admin'] },
      'Changelog',
    ],
    htmlContext: {
      body: {
        scripts: []
      }
    },
    themeConfig: {
      styles: {
      },
    },
  }