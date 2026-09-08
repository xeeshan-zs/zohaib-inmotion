import { renderToString } from 'react-dom/server';
import App from './app';
import { sampleProjects } from './lib/content';

export const pages = [
  {path:'/', title:'Zohaib — Every Frame. A Feeling.', description:'Zohaib’s personal student portfolio. Exploring editing, color, sound, and the stories between frames.'},
  ...sampleProjects.filter(p=>p.published).map(p=>({path:`/work/${p.id}`,title:`${p.title} — Zohaib`,description:p.summary})),
  {path:'/404', title:'Page not found — Zohaib', description:'This page is out of frame.'},
];
export function render(path:string){ return renderToString(<App path={path}/>); }
