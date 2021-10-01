import { AuthProvider } from "../contexts/AuthContext"
import { GlobalStyle } from "../styles/createGlobalStyle"


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
