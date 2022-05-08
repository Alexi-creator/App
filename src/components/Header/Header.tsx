import React from 'react'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        logo
      </div>
      <div className={styles.avatar}>avatar</div>
    </div>
  )
}
