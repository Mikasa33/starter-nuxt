import { addComponent, addImports, defineNuxtModule } from '@nuxt/kit'
import naive from 'naive-ui'

export default defineNuxtModule({
  meta: {
    name: 'naive-ui-auto-import',
    configKey: 'naive-ui-auto-import',
  },

  // Add types for volar
  hooks: {
    'prepare:types': ({ references }) => {
      references.push({
        types: 'naive-ui/volar',
      })
    },
  },

  setup() {
    // Add imports for naive-ui components
    const naiveComponents = Object.keys(naive).filter(name =>
      /^N[A-Z]|n-[a-z]/.test(name),
    )

    const naiveClientOnlyComponents = [
      'NDrawer',
      'NDrawerContent',
      'NModal',
    ]

    naiveComponents.forEach((name) => {
      addComponent({
        export: name,
        name,
        filePath: 'naive-ui',
        mode: naiveClientOnlyComponents.includes(name) ? 'client' : 'all',
      })
    })

    // Add imports for naive-ui composables
    const naiveComposables = [
      'useDialog',
      'useDialogReactiveList',
      'useLoadingBar',
      'useMessage',
      'useModal',
      'useNotification',
      'useThemeVars',
    ]

    naiveComposables.forEach((name) => {
      addImports({
        name,
        as: name,
        from: 'naive-ui',
      })
    })
  },
})
