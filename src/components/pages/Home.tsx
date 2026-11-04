import { Menu } from "../layout/menu/Menu";
import { Scroll } from "../common/Scroll";
import { About } from "../common/sections/About";
import { Skills } from "../common/sections/Skills";
import { Experience } from "../common/sections/Experience";
import { Projects } from "../common/sections/Projects";

export const Home = () => {
    return(
        <div className="flex flex-col items-center">
            <Scroll />
            <Menu />
            <About />
            <Skills />
            <Experience />
            <Projects />
        </div> 
    )
};
