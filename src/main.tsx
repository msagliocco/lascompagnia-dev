import { hydrateRoot } from 'react-dom/client'
import Root from './root'
import './index.css'

hydrateRoot(document.getElementById('root')!, <Root />)
