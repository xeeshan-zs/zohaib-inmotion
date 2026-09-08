import Portfolio from './app/portfolio';
import ProjectPage from './app/project';
import NotFound from './app/not-found';
import { defaultProfile, sampleProjects } from './lib/content';

export default function App({path}:{path:string}) {
  if(path === '/') return <Portfolio profile={defaultProfile} projects={sampleProjects.filter(p=>p.published)}/>;
  const match = /^\/work\/([a-z0-9-]+)\/?$/.exec(path);
  return match ? <ProjectPage id={match[1]}/> : <NotFound/>;
}
