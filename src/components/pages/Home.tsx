import ScrollExpand from "../common/reactbits/ScrollExpand";
import LogoLoop from "../common/reactbits/LogoLoop";
import { techLogos } from "../common/reacticons/techIcons";

export const Home = () => {
    return(
        <div className="flex flex-col items-center">
            <ScrollExpand
                src='/src/assets/images/akira-wallpaper.webp'
                title={
                <div className="w-full max-w-3xl text-black">
                    <p className="text-left">&lt;JHEYRUS</p>
                    <p className="text-right">ILAGAN/&gt;</p>
                </div>
                }
                scrollHint="↓ Scroll Down To View ↓"
                useWindowScroll
                overlayScrim={0}
                className='bg-[#222222]'
                startHeight={45}
                startWidth={55}
                startRadius={12}
            >
                <h1 className="text-7xl font-styrene font-semibold">&lt;welcome to my portfolio./&gt;</h1>
            </ScrollExpand>
            <section className="flex items-center" id="aboutMe">
                <img 
                    src="../src/assets/images/ryota.webp" 
                    alt="ryota miyagi passing ball"
                    className="w-150"/>
                <div id="aboutContainer" className="w-150">
                    <h1 className="text-4xl font-styrene font-black">&lt;Hello, I'm Jheyrus Ilagan/&gt;</h1>
                    <p className="mt-5">
                    This is my portfolio! I'm a passionate learner currently diving into the skills of a full-stack developer, software engineering, and devops engineering. I enjoy building data driven applications, automation, and collaborating with others.
                    <br/>
                    <br/>
                    Outside of academia, I like to work on personal coding projects and learn new technologies I am not familiar with.
                    <br/>
                    <br/>
                    My current hobbies right now are bouldering, running, and playing the guitar. I also enjoy watching anime and play video games here and there.
                    </p>
                </div>
            </section>
            <section id="skills" className="flex items-center flex-col mt-45">
                <h1 className="text-3xl font-styrene font-black mb-10">&lt;Tech Stack/&gt;</h1>
                <div id="skillsContainer" className="w-430 mb-10">
                    <LogoLoop 
                        logos={techLogos}
                        speed={20}
                        direction="right"
                        logoHeight={50}
                        gap={50}
                        hoverSpeed={0}
                        scaleOnHover={true}
                        ariaLabel="Technology partners"
                        layout="wave"
                        bend={0.7}
                        labels="inline"
                    />
                </div>
            </section>
        </div>
        
    )
}