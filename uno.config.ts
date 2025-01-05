import { defineConfig, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno,
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'wh-full': 'w-full h-full',
    'transition-300': 'ease-in-out duration-300',
  },
  transformers: [
    transformerVariantGroup(),
  ],
})
