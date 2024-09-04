import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import monacoEditorPluginModule from "vite-plugin-monaco-editor";

const isObjectWithDefaultFunction = (module: unknown): module is { default: typeof monacoEditorPluginModule } => (
    module != null &&
    typeof module === 'object' &&
    'default' in module &&
    typeof module.default === 'function'
)

const monacoEditorPlugin = isObjectWithDefaultFunction(monacoEditorPluginModule)
    ? monacoEditorPluginModule.default
    : monacoEditorPluginModule

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), UnoCSS(), monacoEditorPlugin({}),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ]
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    server: {
        port: 2025,
    }
})
