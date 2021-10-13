import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { editHeader } from '../../store/header/header-actions'
import { editDescription } from '../../store/description/description-actions'
import { getEditHeader } from '../../store/header/header-selector'
import { getEditDescription } from '../../store/description/description-selector'

import DragAndDrop from '../DragAndDrop'
import API from '../../api'
import styles from './UploadPhoto.module.scss'

const UploadPhoto = () => {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const headerText = useSelector(getEditHeader)
    const descriptionText = useSelector(getEditDescription)

    const handleDeleteAllPhotos = async () => {
        try {
            const result = await API.deleteAllPhotos()
        } catch (error) {
            enqueueSnackbar('Files are not deleted. try again', {variant: 'error'})
        }
    }

    const handleChangeHeaderValue = (e) => {
        const value = e.target.value
        dispatch(editHeader(value))
    }

    const handleChangeDescriptionValue = (e) => {
        const value = e.target.value
        dispatch(editDescription(value))
    }

    return (
        <section className={styles.root}>
            <input
                className={styles.textBlock}
                value={headerText}
                onChange={handleChangeHeaderValue}
            />
            <textarea
                className={styles.textarea}
                rows="4"
                value={descriptionText}
                onChange={handleChangeDescriptionValue}
            />
            <DragAndDrop />
            <button
                onClick={handleDeleteAllPhotos}
                className={styles.button}
            >
                Delete ALL photos
            </button>
        </section>
    )
}

export default UploadPhoto;
