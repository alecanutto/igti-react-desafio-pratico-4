import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../app/themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
