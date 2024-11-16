import { BackgroundGradientAnimation } from './magic/GradientBg';
import Portfolio from '../components/portfolio';
import ProjectList from './3jsanimation';
import MagicButton from './magic/MagicButton';
import MagicCard from './magic/card/MagicCard';
import Contact from './contact/page';
import Grid from './layoutDesign/Grid';
import Experience from './mobebtn/Experience';
import Clients from './movingcard/Clients';
import Projects from './projects/Projects';
import Sound from './sounds/Sound';
import RecentProjects from './works/RecentProjects';
import Navigate from './formerRotationnav/navigation/Navigate';

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl -z-50"></div>
      </BackgroundGradientAnimation>
      <div className="relativ h-full overflow-y-scroll z-10">
        <Grid />
        <Portfolio />
        <Projects />
        <RecentProjects />
        <Clients />
        <Experience />
        <ProjectList />
        <Sound />
        <div id="my-modal" />
        <Contact />
        <MagicCard />
        <MagicButton title="Show my work" />
        <Navigate />
      </div>
    </div>
  );
}
