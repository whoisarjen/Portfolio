import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll'

const Navbar: FunctionComponent = () => {
    const { t } = useTranslation()

    return (
        <nav className="Navbar">
            <ul>
                <li><Link to="Education">{t('Education')}</Link></li>
                <li><Link to="Projects">{t('Projects')}</Link></li>
                <li><Link to="Contact">{t('Contact')}</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;