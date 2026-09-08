import { createRoot } from 'react-dom/client';
import App from './app';
import './app/globals.css';
import './lib/firebase';

createRoot(document.getElementById('main-content')!).render(
  <App path={window.location.pathname.replace(/\.html$/, '') || '/'}/>
);
