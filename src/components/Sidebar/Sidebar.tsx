import React from 'react'
import { NavLink } from "react-router-dom";

import styles from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <NavLink className={({isActive}) => isActive ? styles.linkActive : styles.link} to='/'>Home</NavLink>
      </div>
      <div className={styles.row}>
        <NavLink className={({isActive}) => isActive ? styles.linkActive : styles.link} to='/cartoons'>Cartoons</NavLink>
      </div>
    </div>
  )
}
