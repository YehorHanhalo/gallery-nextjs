import MainContainer from "../components/MainContainer";
import UploadPhoto from "../components/UploadPhoto";
import Gallery from '../components/Gallery'
import styles from '../styles/index.module.scss'

const Index = () => {
  return (
    <MainContainer>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <UploadPhoto/>
        </li>
        <li className={styles.listItem}>
          <Gallery />
        </li>
      </ul>
    </MainContainer>
  )
}

export default Index;