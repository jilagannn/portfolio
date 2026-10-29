import { footerCopyrightYear } from "./copyright"

export const Footer = () => {
    return(
        <footer className="font-styrene font-light text-xs text-center">
            <span>&#169; {footerCopyrightYear()} Jheyrus Ilagan</span>
        </footer>
    )
}