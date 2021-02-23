import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/joaorceschini.png" alt="João Rafael"/>
      <div>
        <strong>João Rafael</strong>
        <p>
          <img src="icons/level.svg" alt="Level image"/>
          Level 1
        </p>
      </div>
    </div>
  )
}