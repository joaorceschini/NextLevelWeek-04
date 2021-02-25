import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/joaorceschini.png" alt="João Rafael"/>
      <div>
        <strong>João Rafael</strong>
        <p>
          <img src="icons/level.svg" alt="Level image"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}