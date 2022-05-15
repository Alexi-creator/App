import React, { useState } from 'react'

import styles from './Cartoons.module.scss'

interface CartoonsProps {
  id: number
  title: string
  image: string
  year: number
  creator: [string]
  genre: [string]
  rating: string
  runtime_in_minutes: number
  episodes: number
}

export const Cartoons: React.FC<CartoonsProps> = ({title, image, year, creator, genre, rating, runtime_in_minutes, episodes}) => {
  const [state, setState] = useState(false)
  
  return (
    <div className={styles.root}>
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.title}>
        <span className={styles.bold}>Title:</span> {title}
      </div>
      <div className={styles.year}>
        <span className={styles.bold}>Year:</span> {year}
      </div>
      <div className={styles.episodes}>
        <span className={styles.bold}>Episodes:</span> {episodes}
      </div>
      <div className={styles.more}>
        <div className={state ? styles.wrap : styles.hide}>
          <div className={styles.creator}>
            <span className={styles.bold}>Author:</span> {creator}
          </div>
          <div className={styles.genre}>
            <span className={styles.bold}>Genre:</span> {genre}
          </div>
          <div className={styles.rating}>
            <span className={styles.bold}>Rating:</span> {rating}
          </div>
          <div className={styles.runtime_in_minutes}>
            <span className={styles.bold}>Minutes:</span> {runtime_in_minutes}
          </div>
        </div>
        <button onClick={() => setState(!state)}
          className={styles.btn}>
          {state ? 'close more' : 'more'}
        </button>
      </div>
    </div>
  )
}


