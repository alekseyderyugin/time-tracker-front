// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        'usebootstrap',
        'nuxt-svgo',
        '@hypernym/nuxt-gsap',
        '@pinia/nuxt'
    ],
    imports: {
        autoImport: false
    },
    svgo: {
        autoImportPath: './assets/icons/',
        global: false,
    },
    /*components: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],*/

    gsap: {
        composables: true
    },
   /* axios: {
        baseUrl: 'http://localhost:5175'
    }*/
    experimental: {
        defaults: {
            nuxtLink: {
                // default values
                /*componentName: 'NuxtLink',
                externalRelAttribute: 'noopener noreferrer',*/
                activeClass: 'active'
                /*exactActiveClass: 'router-link-exact-active',
                prefetchedClass: undefined, // can be any valid string class name
                trailingSlash: undefined, // can be 'append' or 'remove'
                prefetch: true,
                prefetchOn: { visibility: true }*/
            }
        }
    }
})