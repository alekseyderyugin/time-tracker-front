import * as bootstrap from 'bootstrap'

import {defineNuxtPlugin} from "#app";
export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            bootstrap: bootstrap
        }
    }
})