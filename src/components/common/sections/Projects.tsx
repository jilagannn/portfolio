import { techLogos } from "@/lib/reacticons/techIcons";
import ketnipz from "@/assets/images/ketnipz-pixelated.webp"

export const Projects = () => (
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
                    src={ketnipz}
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
);
