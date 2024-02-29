import {Route, Routes as RouterRoutes} from 'react-router-dom';

import {ReactList, HtmlList, RootLayout} from '../index.ts'

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<HtmlList/>}/>
        <Route path="/html" element={<HtmlList/>}/>
        <Route path="/react" element={<ReactList/>}/>
      </Route>
    </RouterRoutes>
  )
}

