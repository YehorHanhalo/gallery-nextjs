import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTitle, getTitleLoading } from '../../store/title/title-selector'
import { getDescription, getDescriptionLoading } from '../../store/description/description-selector'
import { fetchPaginatedPhotos } from '../../store/photo/photo-operations'
import { getAllPhoto } from '../../store/photo/photo-selector'
import IconButton from '../IconButton';
import styles from './Gallery.module.scss'

const Gallery = ({ setPageAmount, pageAmount }) => {
    const dispatch = useDispatch()
    const title = useSelector(getTitle)
    const titleLoading = useSelector(getTitleLoading)
    const description = useSelector(getDescription)
    const descriptionLoading = useSelector(getDescriptionLoading)
    const photos = useSelector(getAllPhoto)

    const [page, setPage] = useState(0)

    const handleClickHomeButton = () => setPage(0);
    const handleClickIncrementPageButton = () => setPage(prev => prev < pageAmount - 1 ? prev + 1 : prev);
    const handleClickDecrementPageButton = () => setPage(prev => prev > 0 ? prev - 1 : prev);

    const isIncrementButtonDisabled = page >= pageAmount - 1
    const isDecrementButtonDisabled = page <= 0

    useEffect(() => {
        if (page < pageAmount) {
            dispatch(fetchPaginatedPhotos({ page, setPageAmount }))
        }
    }, [page, pageAmount])

    return (
        <section className={styles.root}>
            <h1 className={styles.header}>{`${title}${titleLoading ? '...' : ''}`}</h1>
            <p className={styles.description}>{`${description}${descriptionLoading ? '...' : ''}`}</p>
            <ul className={styles.galleryList}>
                {photos.map(photo => (
                    <li
                        key={photo}
                        className={styles.photoItem}
                    >
                        <img
                            loading="lazy"
                            src={`${process.env.API_URL}/${photo}`}
                            className={styles.photo}
                            width="200px"
                        />
                    </li>
                ))}
            </ul>
            <ul className={styles.galleryList}>
                <li className={styles.galleryItem}>
                    <IconButton
                      onClick={handleClickDecrementPageButton}
                      aria-label="previous page"
                      disabled={isDecrementButtonDisabled}
                    >
                      <i className="ri-arrow-left-line ri-xl" />
                    </IconButton>
                </li>
                <li className={styles.galleryItem}>
                    <IconButton
                      onClick={handleClickHomeButton}
                      aria-label="first page"
                    >
                      <i className="ri-home-line ri-xl" />
                    </IconButton>
                </li>
                <li className={styles.galleryItem}>
                    <IconButton
                      onClick={handleClickIncrementPageButton}
                      aria-label="next page"
                      disabled={isIncrementButtonDisabled}
                    >
                      <i className="ri-arrow-right-line ri-xl" />
                    </IconButton>
                </li>
            </ul>
        </section>
    )
}

export default Gallery