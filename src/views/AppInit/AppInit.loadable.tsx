import React, { lazy } from 'react'
import { withSuspense } from '../../components/hoc'
import { Preloader } from '../../assets/images/Preloader'

const AppInit = lazy(() => import('./AppInit'))

export default withSuspense(
  AppInit,
  () => (
    <div className="w-screen h-screen flex items-center justify-center">
      <Preloader />
    </div>
  ),
)
