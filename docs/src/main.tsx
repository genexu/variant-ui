import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error: developing
import { HelloWorld } from '@variant-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>,
)
