import { footerCopyrightYear } from "./copyright"

export const Footer = () => {
    return(
        <footer>
            <span>&#169; Jheyrus Ilagan, {footerCopyrightYear()}</span>
        </footer>
    )
}