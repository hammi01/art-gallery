
import Image from 'next/image'

import styles from '../styles/page/design.module.scss'

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

                <div>
                    <span>typography</span> <hr /> <br />
                    <h1>design system</h1>
                    <h2>organic scenester aliquip</h2>
                    <h3>voluptas saepe perspiciatis temporibus</h3>
                    <p>Dolor esse fugit, Eveniet a vel animi dignissimos sint architecto quae inventore aliquid. Dolorem provident autem dicta! Hic quo beatae ipsum sapiente amet natus, molestiae rem similique, reiciendis, ratione suscipit eligendi qui aperiam eveniet et? Neque veritatis cupiditate autem incidunt, aut similique accusantium dolorem consequuntur ipsam minima enim hic quidem nisi sapiente molestiae, modi omnis debitis excepturi. Ad ullam inventore quis, fuga molestiae debitis quas recusandae earum omnis mollitia corporis? Cupiditate dolor provident voluptas saepe perspiciatis temporibus. Deserunt molestias, unde eveniet odio hic enim corporis vel odit a laborum quasi facilis tenetur, excepturi esse ea eligendi sed possimus temporibus eum ullam iste doloribus accusantium! Illo quos commodi aspernatur, cum numquam ratione eaque? Tempore, sapiente reprehenderit aut iste eveniet eum expedita similique voluptate nulla vitae excepturi ipsa aperiam, voluptatem, fugit dolores saepe aliquam officiis! Recusandae debitis corporis ab quibusdam, mollitia quod ex doloremque quae quos inventore molestias, ullam eaque sit doloribus officia tenetur aliquam illum pariatur non perspiciatis a ipsum tempore.</p>
                    
                    <br /> <span>colors</span> <hr /> <br />
                    <div className={styles.colors}><span></span><span></span><span></span><span></span></div>
                </div>
                    
                
            </div>
        </>
    )
}
