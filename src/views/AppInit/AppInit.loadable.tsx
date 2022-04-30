import React, { lazy } from 'react'
import { withSuspense } from '../../components/hoc'
import { PreloaderComponent } from '../../components/PreloaderComponent'

const AppInit = lazy(() => import('./AppInit'))

export default withSuspense(
  AppInit,
  () => (
    <PreloaderComponent />
  ),
)
