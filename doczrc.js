import path from 'path'
import merge from 'webpack-merge'

export default {
  lang: 'en',
  dest: '/docs',
  base: '/atomic-layout-docs/',
  title: 'Atomic layout',
  description: 'Documentation on Atomic layout library',
  favicon: 'assets/favicon.png',
  // menu: [
  //   {
  //     name: 'Introduction',
  //   },
  //   {
  //     name: 'Getting started',
  //     menu: [
  //       {
  //         name: 'Getting started',
  //       },
  //       { name: 'Installation' },
  //       { name: 'Workflow' },
  //     ],
  //   },
  //   {
  //     name: 'General',
  //     menu: [
  //       'Motivation',
  //       {
  //         name: 'Recepies',
  //         menu: [
  //           {
  //             name: 'Dynamic areas',
  //           },
  //           { name: 'Responsive layout' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Components',
  //     menu: [
  //       {
  //         name: 'Box',
  //       },
  //       { name: 'Composition' },
  //     ],
  //   },
  //   {
  //     name: 'Fundamentals',
  //     menu: [
  //       { name: 'Breakpoints' },
  //       { name: 'Prop aliases' },
  //       { name: 'Responsive props' },
  //     ],
  //   },
  // ],
  themeConfig: {
    logo: {
      src: './logo.svg',
    },
    styles: {
      body: {
        fontFamily: 'Roboto, Helvetica, sans-serif',
        fontSize: 16,
        lineHeight: 1.6,
      },
      h1: {
        fontFamily: 'inherit',
      },
      h2: {
        fontFamily: 'inherit',
      },
      h3: {
        fontFamily: 'inherit',
      },
    },
  },
  modifyBundlerConfig: (defaultConfig) => {
    return merge(defaultConfig, {
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, './components'),
        },
      },
    })
  },
}
