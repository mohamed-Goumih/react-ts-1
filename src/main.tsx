import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter'
import Fetch from './Fetch'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/* useState from src/UseState/Count.tsx */}
    {/* <Count/> */}

    {/* <Counter /> */}
    <Fetch />

    

  </StrictMode>,
)
