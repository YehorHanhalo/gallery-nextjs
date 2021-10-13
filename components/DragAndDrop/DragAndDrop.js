import { useState } from 'react'
import { useSnackbar } from 'notistack'
import API from '../../api'
import styles from './DragAndDrop.module.scss'

const DragAndDrop = () => {
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

            const formData = new FormData()
            formData.append('file', files[0], files[0].name)

            const result = await API.postPhoto(formData)

        } catch (error) {
            enqueueSnackbar('File is not uploaded. try again', {variant: 'error'})
        } finally {
            setDrag(false)
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
