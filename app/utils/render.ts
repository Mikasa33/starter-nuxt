import { Icon } from '#components'

export function renderIcon(props: string | { name: string, mode?: 'svg' | 'css', size?: number | string }) {
  return () => h(Icon, isString(props) ? { name: props } : props)
}
