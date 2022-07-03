
import Bkg from '../components/bkg.jsx'
import Nav from '../components/nav.jsx'

import '../styles/reset.css'
import '../styles/app.scss'
import '../styles/anim.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Bkg/>
            <Nav/>
            <Component {...pageProps} />

        </>
    ) 
}

