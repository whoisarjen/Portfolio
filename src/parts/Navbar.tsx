import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll'
import ReactFlagsSelect from 'react-flags-select';
import i18n from '../i18n';

const Navbar: FunctionComponent = () => {
    const { t } = useTranslation()
    const [selected, setSelected] = useState('GB');

    useEffect(() => {
        i18n.changeLanguage(selected);
    }, [selected])

    return (
        <nav className="Navbar">
            {/* <ul> */}
                <div><Link to="Education">{t('Education')}</Link></div>
                <div><Link to="Projects">{t('Projects')}</Link></div>
                <div><Link to="Contact">{t('Contact')}</Link></div>
                <div>
                    <ReactFlagsSelect
                        className="flags"
                        selected={selected}
                        onSelect={code => setSelected(code)}
                        countries={["GB", "PL"]}
                        showOptionLabel={false}
                        showSelectedLabel={false}
                    />
                </div>
            {/* </ul> */}
        </nav>
    )
}

export default Navbar;