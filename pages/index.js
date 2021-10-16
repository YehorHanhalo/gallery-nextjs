import { useState } from 'react'
import MainContainer from "../components/MainContainer";
import UploadPhoto from "../components/UploadPhoto";
import Gallery from '../components/Gallery'
import styles from '../styles/index.module.scss'

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

export default Index;