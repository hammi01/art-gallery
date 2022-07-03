
import Link from 'next/link'

import styles from './modal.module.scss'

import CloseSVG from '../public/icon/close.svg';

import data from '../public/data';

export default function Modal({setVisible, children, trailer, samples, datail, menu}) {

    function closeModal(e) {
        if( e.target.className.baseVal === '' ){ 
            setVisible( () => false ) 
            return;
        } // continue if not svg, svg errors with .includes() but has className that has baseVal
        if( e.target.className.includes("wrapper") || e.currentTarget.className.includes("close") ) setVisible( () => false );
    }

    function closeDetail(e) {
        if( e.target.className.baseVal === '' ){ 
            setVisible( () => [false, 0] ) 
            return;
        } // continue if not svg, svg errors with .includes() but has className that has baseVal
        if( e.target.className.includes("wrapper") || e.currentTarget.className.includes("close") ) setVisible( () => [false, 0] );
    } 
    
    function setMenuOpen(e) {
        if(!e.currentTarget.className.includes("menu")) return;
        setVisible( () => false )
    }
    

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.wrapper} onClick={closeModal}>
                    
                    {trailer && <div className={styles.vid}>
                        <div className={styles.close} onClick={closeModal}> <CloseSVG/> </div>
                        <div className={styles.vidwrapper}>
                            <video src={data.page.promo.trailer} controls autoPlay playsInline ></video>
                        </div>
                    </div>}
                    {samples && <div className={styles.vid}>
                        <div className={styles.close} onClick={closeModal}> <CloseSVG/> </div>
                        <div className={styles.vidwrapper}>
                            <video src={data.page.promo.samples} controls autoPlay playsInline ></video>
                        </div>
                    </div>}

                    {datail && <div className={styles.detail}>
                        <div className={styles.close} onClick={closeDetail}> <CloseSVG/> </div>
                        {children}
                    </div>}

                    {menu && <div className={styles.menu} onClick={setMenuOpen}>
                        <Link href={'/'}><a>
                            <div className={styles.entry}>
                                    <div className={styles.menutitle}>Login</div>
                                    <p className={styles.menupara}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a></Link>
                        
                        
                        <Link href={'/about'}><a>
                            <div className={styles.entry}>
                                    <div className={styles.menutitle}>About</div>
                                    <p className={styles.menupara}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a></Link>
                        
                        
                        <Link href={'/blog'}><a>
                            <div className={styles.entry}>
                                    <div className={styles.menutitle}>Blog</div>
                                    <p className={styles.menupara}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a></Link>
                        
                        
                        <Link href={'/contact'}><a>
                            <div className={styles.entry}>
                                    <div className={styles.menutitle}>contact</div>
                                    <p className={styles.menupara}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a></Link>
                        
                        
                        <Link href={'/tos'}><a>
                            <div className={styles.entry}>
                                    <div className={styles.menutitle}>Terms of use</div>
                                    <p className={styles.menupara}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a></Link>
                        
                        
                        <Link href={'/tos'}><a>
                            <div className={styles.entry}>
                                    <div className={styles.menutitle}>Privacy policy</div>
                                    <p className={styles.menupara}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a></Link>
                    </div>}
                
                </div>
            </div>
        </>
    )
}
