import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import styles from './Layout.module.scss'

export const Layout: React.FC = () => {

  return (
    <div className={styles.root}>
      <Header />

      <Sidebar />
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}
