import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './TP4/App.tsx'
import Count from './UseState/Count.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    {/* useState from src/UseState/Count.tsx */}
    <Count/>
  </StrictMode>,
)
