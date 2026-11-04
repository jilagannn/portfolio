import spidey from "@/assets/images/spidey.webp"

export const Experience = () => (
    <section id="experience" className="w-320">
        <h1 className="text-3xl font-styrene font-black mb-5">&lt;Experience & Education/&gt;</h1>
        <ul>
            <li className="flex justify-between font-styrene">
                <h3 className="mt-">Application Developer <span className="font-light">@ Red River College Polytechnic</span></h3>
                <span className="font-thin">Jan 2025 - May 2027</span>
            </li>
            <li className="flex font-styrene font-light ">Dean's Honour List</li>
            <li><img src={spidey} alt="pixelated spiderman pointing" className="w-50" /></li>
        </ul>
    </section>
);
