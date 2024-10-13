import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorld } from '@variant-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorld name="Tester" />
  </StrictMode>,
)
