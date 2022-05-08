import React from 'react'

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
  return (
    <div className={styles.root}>
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.title}> {title} </div>
      <div className={styles.year}> {year} </div>
      <div className={styles.more}>
        <div className={styles.wrap}>
          <div className={styles.creator}> {creator} </div>
          <div className={styles.genre}> {genre} </div>
          <div className={styles.rating}> {rating} </div>
          <div className={styles.runtime_in_minutes}> {runtime_in_minutes} </div>
          <div className={styles.episodes}> {episodes} </div>
        </div>
        <div className={styles.btn}>more</div>
      </div>
    </div>
  )
}


