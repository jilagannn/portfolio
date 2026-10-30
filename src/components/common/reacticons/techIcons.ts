import {
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTypescript,
    SiGnubash,
    SiExpress,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiFirebase,
    SiReact,
    SiTailwindcss,
    SiGit,
    SiDocker,
    SiLinux
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { type Icons } from "../../../types/icons";

export const techLogos: Icons[] = [
    {name: "Python", node: SiPython },
    {name: "JavaScript", node: SiJavascript},
    {name: "TypeScript", node: SiTypescript},
    {name: "HTML5", node: SiHtml5},
    {name: "CSS", node: SiCss},
    {name: "GNU Bash", node: SiGnubash},
    {name: "Express", node: SiExpress},
    {name: "Node.js", node: SiNodedotjs},
    {name: "PostgreSQL", node: SiPostgresql},
    {name: "Prisma", node: SiPrisma},
    {name: "Firebase", node: SiFirebase},
    {name: "React", node: SiReact},
    {name: "Tailwind CSS", node: SiTailwindcss},
    {name: "Git", node: SiGit},
    {name: "Docker", node: SiDocker},
    {name: "AWS", node: FaAws},
    {name: "Linux", node: SiLinux},
];
