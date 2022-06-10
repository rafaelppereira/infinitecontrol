import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'Poppins',
    },
    colors: {
      white: '#ffffff',

      green500: '#18C55E',
      green600: '#066A2F',

      gray300: '#5C5C5C',
      gray600: '#383838',
      gray700: '#2D2D2D',
      gray900: '#1E1E20',
    },
    fontWeights: {
      thin: '100',
      extralight: 200,
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '500',
      bold: '700'
    }
  },
});