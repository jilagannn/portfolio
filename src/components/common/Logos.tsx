import { techLogos } from "@/lib/reacticons/techIcons";
import LogoLoop from "@/lib/reactbits/LogoLoop";

export const Logos = () => (
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
);
