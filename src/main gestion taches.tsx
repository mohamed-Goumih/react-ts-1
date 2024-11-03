import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './TP4/App.tsx'
import Count from './UseState/Count.tsx'
import Home from './Gestion_taches/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    {/* useState from src/UseState/Count.tsx */}
    {/* <Count/> */}

    {/* gestion des taches from /src/Gestion_taches/ */}
    <Home />

  </StrictMode>,
)
