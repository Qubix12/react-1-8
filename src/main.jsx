import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Analiza from './components/Analizazadania.jsx'
import DateTime from './components/DateTimeCard.jsx'
import Code from './components/CodeSnippet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Analiza></Analiza>
<DateTime></DateTime>
<Code></Code>
  </StrictMode>,
)
