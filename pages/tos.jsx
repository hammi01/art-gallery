
import styles from '../styles/page/tos.module.scss'

import pageData from '../public/data-legal'


export async function getStaticProps(context) {

    return {
        props: {
            data: pageData,
        }
    }
}

export default function Tos({data, }) {
    return (
        <>
            <div className={styles.tos}>
                <h1>Terms of use:</h1>
                {data.tos.map((D,i)=> <article key={"article"+i+D.head.slice(0,5)}>
                    <h2> {D.head} </h2>
                    <p> {D.body} </p>
                </article> )}


                <h1>Privacy policy:</h1>
                {data.privacy.map((D,i)=> <article key={"article"+i+D.head.slice(0,5)}>
                    <h2> {D.head} </h2>
                    <p> {D.body} </p>
                </article> )}


                <h1>DMCA:</h1>
                {data.dmca.map((D,i)=> <article key={"article"+i+D.head.slice(0,5)}>
                    <h2> {D.head} </h2>
                    <p> {D.body} </p>
                </article> )}
            </div>

        </>
    )
}
