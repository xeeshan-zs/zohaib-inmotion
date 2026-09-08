import { hydrateRoot } from 'react-dom/client';
import App from './app';
import './app/globals.css';

hydrateRoot(document.getElementById('main-content')!, <App path={window.location.pathname.replace(/\.html$/, '') || '/'}/>);
