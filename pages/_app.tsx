import { NextUIProvider } from '@nextui-org/react'
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>);
}