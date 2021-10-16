import { useState } from 'react'
import { useSnackbar } from 'notistack'
import imageCompression from 'browser-image-compression';
import { useDispatch } from 'react-redux'
import { postPhoto } from '../../store/photo/photo-operations'
import styles from './DragAndDrop.module.scss'

const DragAndDrop = ({ setPageAmount }) => {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()

    const [drag, setDrag] = useState(false)

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const successNotification = () => enqueueSnackbar('File is uploaded', {variant: 'success'})

    const onDropHandler = async (e) => {
        try {
            e.preventDefault()
            const files = e.dataTransfer?.files || e.target?.files

            if (!files[0].type.includes('image')) {
                enqueueSnackbar('load only images', { variant: 'warning' })
                return
            }
            if (files.length > 1) {
                enqueueSnackbar('load files one by one', {variant: 'info'})
            }

            const options = {
              maxSizeMB: 10,
              maxWidthOrHeight: 600,
              useWebWorker: true

            }

            const compressedFile = await imageCompression(files[0], options);

            const formData = new FormData()
            formData.append('photo', compressedFile, compressedFile.name)

            dispatch(postPhoto({ formData, successNotification, setPageAmount }))
        } catch (error) {
            console.log(error.message)
            enqueueSnackbar('File is not uploaded. try again', {variant: 'error'})
        } finally {
            setDrag(false)
            if (e.target) {
                e.target.value = null
            }
        }
    }

    return (
        <label
            tabIndex={0}
            className={styles.dropZone}
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
        >
            <input
                type="file"
                onChange={e => onDropHandler(e)}
                accept="image/png, image/jpeg"
                className="visually-hidden"
            />
            {drag ? 'Drop photo to load it' : 'Drag photo or click to select'}
        </label>
    )
}

export default DragAndDrop;
