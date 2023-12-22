import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ClickCounter from './HighorderCompo/ClickCounter'
import HoverCompo from './HighorderCompo/HoverCompo'
import PureCompo from './HighorderCompo/PureCompo'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ClickCounter/>
        <HoverCompo/>
        <PureCompo/>
  </React.StrictMode>,
)
