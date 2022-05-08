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

  const sort = (value: string) => {
    if (value === 'date') {
      setState(state.reduce((acc, item) => {

      }, []))
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>page about cartoons</div>

      <select onChange={(e) => sort(e.target.value)}>
        <option value="date">date</option>
        <option value="countEpisodes">countEpisodes</option>
      </select>

      {state.map(item => (
        <div key={item.id}>
          <Cartoons {...item} />
        </div>
      ))}

    </div>
  )
}
