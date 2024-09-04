// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    theme: {
        breakpoints: {
            xxs: '0px',
            xs: '320px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1600px',
        },
    },
})