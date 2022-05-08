import React, { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Cartoons } from '../../components/Cartoons'
// import { AppRouter } from '../AppRouter'
import styles from './AppInit.module.scss'

export const AppInit = () => {

  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    fetch('https://api.sampleapis.com/cartoons/cartoons2D')
      .then(res => res.json())
      .then(res => setState(res))
  }, [])

  return (
    <div className={styles.root}>
      <Header />

      {state.map(item => (
        <div key={item.id}>
          <Cartoons {...item} />
        </div>
      ))}

      footer
    </div>
  )
}

export default AppInit
