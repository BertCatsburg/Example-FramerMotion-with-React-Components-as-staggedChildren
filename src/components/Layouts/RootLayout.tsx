import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

export const RootLayout = () => {

  const navigate = useNavigate()

  const handleGoToHTML = () => {
    navigate('/html')
  }

  const handleGoToReact = () => {
    navigate('/react')
  }

  return (
    <React.Fragment>
      <button onClick={handleGoToHTML}>HTML List</button>
      <button onClick={handleGoToReact}>React List</button>
      <main>
        <Outlet/>
      </main>
    </React.Fragment>
  )
}
