import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { DebounceInput } from 'react-debounce-input';
import { useDispatch, useSelector } from 'react-redux'
import { postTitle, fetchTitle } from '../../store/title/title-operations'
import { postDescription, fetchDescription } from '../../store/description/description-operations'
import { deleteAllPhotos } from '../../store/photo/photo-operations'
import { getTitle, getTitleError } from '../../store/title/title-selector'
import { getDescription, getDescriptionError } from '../../store/description/description-selector'

import DragAndDrop from '../DragAndDrop'
import styles from './UploadPhoto.module.scss'

const UploadPhoto = ({ setPageAmount }) => {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const title = useSelector(getTitle)
    const titleError = useSelector(getTitleError)
    const description = useSelector(getDescription)
    const descriptionError = useSelector(getDescriptionError)

    useEffect(() => {
        dispatch(fetchTitle())
        dispatch(fetchDescription())
    }, [])

    useEffect(() => {
        const error = titleError || descriptionError
        if (error) {
            enqueueSnackbar(`Something wrong. ${error}`, { variant: "error"})
        }
    }, [titleError, descriptionError])

    const successNotification = () => enqueueSnackbar('All files are deleted', {variant: 'success'})

    const handleDeleteAllPhotos = async () => {
        try {
            dispatch(deleteAllPhotos({ successNotification }))
        } catch (error) {
            console.log(error)
            enqueueSnackbar('Files are not deleted. try again', {variant: 'error'})
        }
    }

    const handleChangeHeaderValue = (e) => {
        const value = e.target.value
        dispatch(postTitle(value))
    }

    const handleChangeDescriptionValue = (e) => {
        const value = e.target.value
        dispatch(postDescription(value))
    }

    return (
        <section className={styles.root}>
            <DebounceInput
                value={title}
                className={styles.textBlock}
                debounceTimeout={300}
                onChange={handleChangeHeaderValue}
            />
            <DebounceInput
                element="textarea"
                value={description}
                rows="4"
                className={styles.textarea}
                debounceTimeout={300}
                onChange={handleChangeDescriptionValue}
            />
            <DragAndDrop
                setPageAmount={setPageAmount}
            />
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
