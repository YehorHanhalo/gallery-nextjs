import { useState } from 'react'
import MainContainer from "../components/MainContainer";
import UploadPhoto from "../components/UploadPhoto";
import Gallery from '../components/Gallery'
import styles from '../styles/index.module.scss'
import { wrapper } from '../store/store'
import { fetchDescription } from '../store/description/description-operations'
import { fetchTitle } from '../store/title/title-operations'
import { fetchPaginatedPhotos } from '../store/photo/photo-operations'

const Index = () => {
  const [pageAmount, setPageAmount] = useState(1)

  return (
    <MainContainer>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <UploadPhoto
            setPageAmount={setPageAmount}
          />
        </li>
        <li className={styles.listItem}>
          <Gallery
            setPageAmount={setPageAmount}
            pageAmount={pageAmount}
          />
        </li>
      </ul>
    </MainContainer>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchTitle())
  await store.dispatch(fetchDescription())
  await store.dispatch(fetchPaginatedPhotos({ page: 0}))
})

export default Index;