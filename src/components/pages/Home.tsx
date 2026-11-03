import ScrollExpand from "../../lib/reactbits/ScrollExpand";
import LogoLoop from "../../lib/reactbits/LogoLoop";
import { techLogos } from "../../lib/reacticons/techIcons";

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
            <section className="flex items-center gap-x-25" id="aboutMe">
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
                <img 
                    src="../src/assets/images/ryota.webp" 
                    alt="ryota miyagi passing ball"
                    className="w-150 scale-x-[-1]"/>
            </section>
            <section id="skills" className="w-320 mt-10">
                <h1 className="text-3xl font-styrene font-black mb-45">&lt;Tech Stack/&gt;</h1>
            </section>
            <section className="w-screen" id="logoLoop">
                <div id="techLogoContainer" className="mb-30">
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
            <section id="education" className="w-320">
                <h1 className="text-3xl font-styrene font-black mb-5">&lt;Experience & Education/&gt;</h1>
                <ul>
                    <li className="flex justify-between font-styrene">
                        <h3 className="mt-">Application Developer <span className="font-light">@ Red River College Polytechnic</span></h3>
                        <span className="font-thin">Jan 2025 - May 2027</span>
                    </li>
                    <li className="flex font-styrene font-light mb-30">Dean's Honour List</li>
                </ul>
            </section>
            <section id="projects" className="w-320 flex flex-col gap-y-5">
                <h1 className="text-3xl font-styrene font-black mb-5">&lt;Projects/&gt;</h1>
                <article className="flex flex-row border rounded-lg gap-x-4 w-320">
                    <div id="imgContainer" className="overflow-hidden min-w-100">
                        <img 
                            src="https://i.pinimg.com/736x/fa/64/8e/fa648ea7787ffe54edf441b38aa6eb0d.jpg" 
                            alt="" 
                            className="w-100 h-100 object-cover rounded-s-lg"
                            />
                    </div>
                    <div id="infoContainer" className="flex flex-col justify-evenly">
                        <h3 className="font-styrene font-medium text-2xl">Chef Claude</h3>
                        <p className="font-styrene font-normal text-lg">Web application that takes in user-provided ingredients and gives recipe suggestion through Anthropic API.</p>
                        <ul className="flex gap-x-4">
                            <li className="font-styrene font-thin font-sm">{techLogos[11].title}</li>
                            <li className="font-styrene font-thin font-sm">{techLogos[7].title}</li>
                            <li className="font-styrene font-thin font-sm">Anthropic API</li>
                        </ul>
                        <a className="font-styrene font-light text-base text-[#222222]" href="https://github.com/jilagannn/chef-claude" target="_blank">View Repository 🗗</a>
                    </div>
                </article>
                <article className="flex flex-row border rounded-lg gap-x-4 w-320">
                    <div id="imgContainer" className="overflow-hidden min-w-100">
                        <img 
                            src="../src/assets/images/ketnipz-pixelated.webp"
                            alt="" 
                            className="w-100 h-100 object-cover rounded-s-lg"
                            />
                    </div>
                    <div id="infoContainer" className="flex flex-col justify-evenly">
                        <h3 className="font-styrene font-medium text-2xl">C.R.Y.N.</h3>
                        <p className="font-styrene font-normal text-lg">C.R.Y.N. is short for Commands Run, You Nap. It is a set of scripts I came up with to automate repetitive tasks I noticed in my daily work, allowing me to allocate time on more important things.</p>
                        <ul className="flex gap-x-4">
                            <li className="font-styrene font-thin font-sm">{techLogos[5].title}</li>
                            <li className="font-styrene font-thin font-sm">{techLogos[0].title}</li>
                        </ul>
                        <a className="font-styrene font-light text-base text-[#222222]" href="https://github.com/jilagannn/cryn" target="_blank">View Repository 🗗</a>
                    </div>
                </article>
                <article className="flex flex-row border rounded-lg gap-x-4 w-320">
                    <div id="imgContainer" className="overflow-hidden min-w-100">
                        <img 
                            src="https://i.pinimg.com/736x/cc/54/3f/cc543f410d0715a50c079e36d915fbc9.jpg"
                            alt="" 
                            className="w-100 h-100 object-cover rounded-s-lg"
                            />
                    </div>
                    <div id="infoContainer" className="flex flex-col justify-evenly">
                        <h3 className="font-styrene font-medium text-2xl">Movies-API</h3>
                        <p className="font-styrene font-normal text-lg">This project provides a RESTful API for managing movies. With this API, it allows film curators to manage movies, movie genres, and movie ratings.</p>
                        <ul className="flex gap-x-4">
                            <li className="font-styrene font-thin font-sm">{techLogos[2].title}</li>
                            <li className="font-styrene font-thin font-sm">{techLogos[6].title}</li>
                            <li className="font-styrene font-thin font-sm">{techLogos[7].title}</li>
                            <li className="font-styrene font-thin font-sm">{techLogos[10].title}</li>
                            <li className="font-styrene font-thin font-sm">GitHub Actions</li>
                            <li className="font-styrene font-thin font-sm">Jest</li>
                            <li className="font-styrene font-thin font-sm">Swagger</li>
                        </ul>
                        <a className="font-styrene font-light text-base text-[#222222]" href="https://github.com/jilagannn/movies-api" target="_blank">View Repository 🗗</a>
                    </div>
                </article>
            </section>
        </div>
        
    )
}