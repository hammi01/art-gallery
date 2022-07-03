
import Image from 'next/image'

import styles from '../styles/page/contact.module.scss'

import pageData from '../public/data'


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
            <h1>Contact Us:</h1>
            <section className={styles.sec}> 
                <div className={styles.first}>
                </div>
                
                <div className={styles.last}>
                </div>

            </section>


        </div>
    )
}
