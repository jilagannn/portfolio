import ryota from "@/assets/images/ryota.webp"

export const About = () => (
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
            src={ryota}
            alt="ryota miyagi passing ball"
            className="w-150 scale-x-[-1]"/>
    </section>
);
