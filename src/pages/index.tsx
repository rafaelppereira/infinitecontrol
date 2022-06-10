import { styled } from '@stitches/react';

const Text = styled('p', {
  fontSize: '2rem'
});

export default function Home() {
  return (
    <Text>
      Hello, from Stitches
    </Text>
  )
}
