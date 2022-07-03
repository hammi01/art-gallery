
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import Modal from './modal'

import LogoSVG from '../public/icon/logo.svg'

import styles from './nav.module.scss'

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter()
    const currentDir = router.pathname;
    
    const changeIcon1 = menuOpen ? {
        top: "50%",
        width: "100%",
        transform: "rotate(40deg)",
    }: null;
    const changeIcon2 = menuOpen ? {
        top: "50%",
        width: "100%",
        transform: "rotate(-40deg)",
    }: null;

    
    return (
        
        <>
            <CSSTransition in={menuOpen} timeout={500} classNames={"fade_modal"} unmountOnExit>
                <Modal menu={true} setVisible={setMenuOpen} ></Modal>
            </CSSTransition>

            <div className={styles.navbar} >
                <div className={styles.wrap}>

                    <div className={styles.logo}> <LogoSVG/> xyz gallery</div>
                        
                    <nav>
                        <div className={styles.links} style={ menuOpen ? {opacity:'0'}: null }>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                            <Link href="/contact">
                                <a >Contact</a>
                            </Link>
                        </div>

                        <div className={styles.menu} onClick={()=>setMenuOpen(()=>!menuOpen)}>
                            <div className={styles.menubtn}>
                                <div className={styles.line} style={changeIcon1}></div>
                                <div className={styles.line} style={changeIcon2}></div>
                            </div>
                        </div>
                        
                    </nav>
                </div>

            </div>

            <style jsx global>{`
                nav a[href="${currentDir}"] {
                    opacity: 1 !important;
                }
                nav a[href="${currentDir}"]::after {
                    content: "";
                    position: absolute;
                    bottom: -70%;
                    left: 0;
                    height: .2rem;
                    width: 1rem;
                    border-radius: 99px;
                    background-color: #fed18d;
                    opacity: .8;
                }
            `}</style>

        </>
    )
}
