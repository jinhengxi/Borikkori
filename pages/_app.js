import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
