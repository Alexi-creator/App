import React, { useEffect, useState } from 'react'

import { Cartoons } from '../../components/Cartoons'
import styles from './CartoonsPage.module.scss'

export const CartoonsPage: React.FC = () => {

  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    fetch('https://api.sampleapis.com/cartoons/cartoons2D')
      .then(res => res.json())
      .then(res => setState(res))
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.title}>page about cartoons</div>

      {state.map(item => (
        <div key={item.id}>
          <Cartoons {...item} />
        </div>
      ))}

    </div>
  )
}
