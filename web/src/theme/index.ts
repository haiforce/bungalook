import { extendTheme } from '@chakra-ui/react'

import foundations from './foundations'

const direction = 'ltr'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

const fonts: ReturnType<typeof extendTheme>['fonts'] = {
  heading: 'Noto, Open Sans, sans-serif',
  body: 'Multiple Fonts',
}

const styles = {
  global: {
    body: {
      marginRight: 0,
    },
  },
}
export const theme = {
  direction,
  fonts,
  global,
  styles,
  ...foundations,
  config,
}

export default extendTheme(theme)
