/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import styles from '../styles/page/home.module.scss'

import Modal from '../components/modal'
import Scroll from '../components/scroll'

import pageData from '../public/data'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Scrollbar, Autoplay, FreeMode, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import Logo from '../public/icon/logo.svg'
import ZoomSVG from '../public/icon/zoom.svg'
import ArrowSVG from '../public/icon/arrow.svg'
import UserSVG from '../public/icon/user.svg'
import SwipeSVG from '../public/icon/swipe.svg'
import PlaySVG from '../public/icon/play.svg'
import PinSVG from '../public/icon/pin.svg'
import CopySVG from '../public/icon/copy.svg'
import CheckSVG from '../public/icon/check.svg'

export async function getStaticProps(context) {
    return {
        props: {
            data: pageData,
        }
    }

}


export default function Home({data,}) {
    
    const [trailerVisible, setTrailerVisible] = useState(false);
    // const [detailVisible, setDetailVisible] = useState([false, 0]);

    const [heroIndex, setHeroIndex] = useState(0);
    const [thumbsHero, setThumbsHero] = useState(null);
    const herothumbprev = useRef(null);
    const herothumbnext = useRef(null);
    const heroprev = useRef(null);
    const heronext = useRef(null);


    return (
        <>
            {/* might use for pages
            <CSSTransition in={detailVisible[0]} timeout={500} classNames={"modalanim"} unmountOnExit >
                <Modal datail={true} setVisible={setDetailVisible} >
                    <h4>{data.details[detailVisible[1]].title}</h4>
                    <h5>{data.details[detailVisible[1]].discription}</h5>
                    <p>{data.details[detailVisible[1]].details}</p>
                </Modal>
            </CSSTransition> */}
            
            <main className={styles.home}>
                
                <SwitchTransition mode={'out-in'}>
                    <CSSTransition
                        key={heroIndex}
                        addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                        }}
                        classNames="text" //????????????????????????????
                        timeout={500}
                        unmountOnExit
                    >
                        <div className={styles.hero_bkg}>
                            <Image src={data.main[heroIndex].image} layout="fill" objectFit="cover" alt={'hero background'}/>
                        </div>
                    </CSSTransition>
                </SwitchTransition>


                {/* 01-SEC  */}
                <section className={`${styles.sec} ${styles.hero}`}> 

                    <div className={styles.first}>
                        {/* Nav has to go before swiper in mark up or some shit idk tbh */}
                        <div className={styles.navigation}>
                            <div className={styles.num}>{'0'+ (heroIndex+1) }</div>
                            <div className={styles.bar}>
                                <div className={styles.prog} style={{
                                    width: 100 / data.main.length * (heroIndex+1) +"%",
                                }}></div>
                            </div>
                            <div className={styles.num}>{'0'+ data.main.length}</div>
                            <biv className={styles.nav} ref={heronext}><span>next</span><ArrowSVG/></biv>
                        </div>

                        <Swiper // only useful to make the hero-thumbs work
                            className={styles.ghostslider}
                            modules={[Navigation, Thumbs,]}
                            thumbs={{ swiper: thumbsHero }}
                            loop={true}

                            onSlideChange={(swiper) => setHeroIndex(()=> swiper.realIndex)}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = heroprev.current;
                                swiper.params.navigation.nextEl = heronext.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}

                        >
                            {data.main.map( (D,i) => <SwiperSlide key={"card0"+i+D.text.slice(0,5)}></SwiperSlide>)}
                        </Swiper>
                        
                               
                        <SwitchTransition mode={'out-in'}>
                            <CSSTransition
                                key={heroIndex}
                                addEndListener={(node, done) => {
                                node.addEventListener("transitionend", done, false);
                                }}
                                classNames="text"
                            >
                                <div className={styles.text}>
                                    <h1>{data.main[heroIndex].title}</h1>
                                    <p>{data.main[heroIndex].text}</p>
                                </div>
                            </CSSTransition>
                        </SwitchTransition>

                        <div className={styles.btns}>
                            <button> <span>Book A Tour</span> </button>
                            <button> <span><PlaySVG/></span> </button>
                        </div>
                                    
                    </div>

                    <div className={styles.last}>

                        <div className={styles.heroThumbs}>
                            <div  className={styles.nav}>
                                <div className={styles.arrow} ref={herothumbprev}><ArrowSVG/></div>
                                <div className={styles.arrow} ref={herothumbnext}><ArrowSVG/></div>
                            </div>
                            
                            <Swiper
                                className={styles.slider}
                                modules={[Navigation, Thumbs,]}
                                spaceBetween={16}
                                slidesPerView={2.4}
                                onSwiper={setThumbsHero}
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = herothumbprev.current;
                                    swiper.params.navigation.nextEl = herothumbnext.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                            >
                                {data.main.map( (D,i) => <SwiperSlide key={"card0"+i+D.title.slice(0,5)}> <div className={styles.card} >
                                    <div className={styles.body}>
                                        <div className={styles.img}>
                                            <Image src={D.image} layout="fill" objectFit="cover" alt={D.title+'background'}/>
                                        </div>
                            
                                        <div className={styles.wrap}>
                                            <div className={styles.text}>
                                                <div className={styles.subtitle}><span>{'0'+ ++i}</span> {D.subtitle}</div>
                                                <div className={styles.title}> {D.title} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> </SwiperSlide>)}
                            </Swiper>
                        </div>

                    </div>
                    
                </section>



                {/* 02-SEC */}
                <div className={styles.details}>
                    {data.copy.map( (D,i) => <div key={"article0"+i+D.title.slice(0,5)}>
                        <section className={`${styles.sec} ${styles.detail}`}>
                                <div className={styles.first}>
                                    <div className={styles.img}>
                                        <Image src={D.image} layout="fill" objectFit="cover" alt={D.title+'background'}/>
                                    </div>
                                </div>
                                <div className={styles.last}>
                                    <h1>{D.title}</h1>
                                    <p>{D.text}</p>
                                </div>
                        </section>

                    </div>)}
                </div>



                {/* 03-SEC  */}
                <section className={`${styles.sec} ${styles.sec3}`}>

                    <div className={styles.first}>

                    </div>

                    <div className={styles.last}>        

                    </div>

                </section>



                {/* 04-SEC  */}
                <section className={`${styles.sec} ${styles.sec4}`}>

                    <div className={styles.first}>

                    </div>

                    <div className={styles.last}>
                        
                    </div>

                </section>



                {/* 05-SEC  */}
                <section className={`${styles.sec} ${styles.footer}`}>

                    <div className={styles.first}>

                    </div>

                    <div className={styles.last}>
                        
                    </div>

                </section>

            </main>

        </>
    )
}
