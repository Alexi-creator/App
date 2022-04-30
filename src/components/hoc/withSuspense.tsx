import React, { Suspense } from 'react'

export const withSuspense = (Component: any, Loader: React.FC) => {
  return (props: any) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    )
  }
}
