
import Image from 'next/image'

import styles from '../styles/page/about.module.scss'

import pageData from '../public/data'


export async function getStaticProps(context) {

    return {
        props: {
            data: pageData,
        }
    }
}

export default function About({data, }) {


    return (
        <>
            <div className={styles.page}>
                <h1>About Us:</h1>
                    <div className={styles.first}>
                    </div>
                    
                    <div className={styles.last}>
                    </div>
                    
                
            </div>
        </>
    )
}
