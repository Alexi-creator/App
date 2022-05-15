import React, { useEffect, useState } from 'react'

import { Cartoons } from '../../components/Cartoons'
import { Select } from '../../components/UiKit/Select'
import styles from './CartoonsPage.module.scss'

export const CartoonsPage: React.FC = () => {

  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    fetch('https://api.sampleapis.com/cartoons/cartoons2D')
      .then(res => res.json())
      .then(res => setState(res))
  }, [])

  const sort = (value: string) => {
    if (value === 'mindate') {
      setState([...state].sort((a, b): any => `${a.year > b.year ?  1 : -1}`))
      return
    }
    if (value === 'maxdate') {
      setState([...state].sort((a, b): any => `${a.year > b.year ?  -1 : 1}`))
      return
    }
    if (value === 'countEpisodes') {
      setState([...state].sort((a, b): any => `${a.episodes > b.episodes ?  1 : -1}`))
      return
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>page about popular cartoons</div>

      <div className={styles.select}>
        <select onChange={(e) => sort(e.target.value)}>
          <option value="choose">choose</option>
          <option value="mindate">min date</option>
          <option value="maxdate">max date</option>
          <option value="countEpisodes">count episodes</option>
        </select>
        <Select />
      </div>

      <div className={styles.grid}>
        {state.map(item => (
          <div key={item.id}>
            <Cartoons {...item} />
          </div>
        ))}
      </div>

    </div>
  )
}
