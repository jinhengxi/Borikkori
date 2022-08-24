import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import Nav from '../components/Navbar';
import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Nav/>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
