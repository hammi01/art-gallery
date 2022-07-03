
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/page/blog.module.scss'

import pageData from '../public/data'

import ArrowSVG from '../public/icon/arrow.svg'


export async function getStaticProps(context) {

    return {
        props: {
            data: pageData,
        }
    }
}


export default function Contact({data, }) {

    return (
        <div className={styles.page}>
            <h1>Our Blog:</h1>
            <section className={styles.sec}> 
                <div className={styles.first}>
                </div>
                
                <div className={styles.last}>
                </div>

            </section>


        </div>
    )
}
