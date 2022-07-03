
import styles from './scroll.module.scss'

// import Star from '../public/icon/star.svg'

export default function Scroll() {

    return (
        <div className={styles.scroll}>
            <span>scroll down</span>
            <span className={styles.track}> <span className={styles.button}></span> </span>

        </div>      
    )
}