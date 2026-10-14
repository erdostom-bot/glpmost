import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="mx-auto max-w-prose px-6 py-24">
      <h1 className="text-4xl">GLPMost</h1>
      <p className="mt-4 text-ink-soft">Hamarosan.</p>
    </main>
  </StrictMode>,
)
