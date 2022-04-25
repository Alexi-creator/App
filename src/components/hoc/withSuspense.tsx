import React, { Suspense } from 'react'

import { Preloader } from '../../assets/images/Preloader'

export const withSuspense = (Component: any, Loader: React.FC = Preloader) => {
  return (props: any) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    )
  }
}
