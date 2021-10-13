import { useSelector } from 'react-redux'
import { getEditHeader } from '../../store/header/header-selector'
import { getEditDescription } from '../../store/description/description-selector'
import styles from './Gallery.module.scss'

const Gallery = () => {
    const headerText = useSelector(getEditHeader)
    const descriptionText = useSelector(getEditDescription)

    return (
        <section className={styles.root}>
            <h1 className={styles.header}>{headerText}</h1>
            <p className={styles.description}>{descriptionText}</p>
            <ul>
                <li>
                    <img />
                </li>
            </ul>
            <ul>
                <li>
                    <button></button>
                </li>
                <li>
                    <button></button>
                </li>
                <li>
                    <button></button>
                </li>
            </ul>
        </section>
    )
}

export default Gallery