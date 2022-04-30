import React from 'react'

import { Preloader } from '../../assets/images/Preloader'
import styles from './PreloaderComponent.module.scss'

export const PreloaderComponent = () => {
  return (
    <div className={styles.root}>
      <Preloader />
    </div>
  )
}

export default PreloaderComponent
