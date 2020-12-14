import '../styles/globals.css';
import 'antd/dist/antd.css';
import Cookies from 'js-cookie';
import { AppProvider } from "../components/Counter";
import AdminLayout from '../components/Layout/Admin'

function MyApp({ Component, pageProps }) {
  const jwt = Cookies.get('jwt')
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
