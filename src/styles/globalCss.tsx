import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body': {
    background: '$gray900',
    fontFamily: '$system'
  },
  'input, button, select': {
    fontFamily: '$system',
  }
})