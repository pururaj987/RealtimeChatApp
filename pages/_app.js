import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js"; 
import login from './login';
import Loading from '../components/Loading';


function MyApp({ Component, pageProps }) {

  const [user , loading] = useAuthState(auth);

  if(loading) return <Loading />

  if(!user) return <login />


  return <Component {...pageProps} />
}

export default MyApp
