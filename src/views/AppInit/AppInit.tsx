import React from 'react'

import { CartoonsPage } from '../Cartoons'
import { Routes, Route } from "react-router-dom";
import { Layout } from '../Layout';

export const AppInit = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<div>home page</div>} />
          <Route path='cartoons' element={<CartoonsPage />} />
          <Route path='*' element={<div>404 not found page</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppInit
