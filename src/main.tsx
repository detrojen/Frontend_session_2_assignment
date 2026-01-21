import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeContextProvider from './contexts/ThemeConxtextProvider.tsx'
import CartContextProvider from './contexts/CartContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  
    <ThemeContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ThemeContextProvider>,
)
