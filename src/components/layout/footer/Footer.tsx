import { footerCopyrightYear } from "./copyright";
import oikawa from "@/assets/images/oikawa-pointing.webp";

export const Footer = () => {
    return(
        <footer>
            <div className="flex flex-row mt-10 justify-evenly gap-x-50 items-end">
                <div className="font-styrene font-light text-xs text-center flex flex-row">
                    <span>Built with React, TypeScript, and Tailwind CSS</span>
                </div>
                <div className="font-styrene font-light text-xs text-center flex flex-row">
                    <span>&#169; {footerCopyrightYear()} Jheyrus Ilagan</span>
                </div>
                <img src={oikawa} className="w-100" alt="oikawa pointing" />
            </div>
        </footer>
    )
}