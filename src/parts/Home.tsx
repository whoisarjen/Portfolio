import { FunctionComponent, useState, useEffect } from "react";
// @ts-ignore
import { Typing } from "typing-effect-reactjs"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-scroll'
import ReactFlagsSelect from 'react-flags-select';
import Navbar from "./Navbar";
import ContactOptions from "./ContactOptions";
import { useTranslation } from "react-i18next";
import i18n from '../i18n';

const getAge = (date: Date) => {
    const month_diff = Date.now() - new Date(date).getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}

const Home: FunctionComponent = () => {
    const { t } = useTranslation()
    const [selected, setSelected] = useState('GB');

    setTimeout(() => {
        const typing: any = document.querySelector('.HomeBox h1')
        typing.classList.remove('noRightBorder')

        const arrow: any = document.querySelector('.arrowGrid')
        arrow.style.display = 'grid'
    }, 6000)

    useEffect(() => {
        i18n.changeLanguage(selected);
    }, [selected])

    return (
        <div className="Home">
            <Navbar />
            <div className="HomeBox">
                <Typing
                    text={t('mainH1')}
                    id="typing"
                    styleClass="noRightBorder"
                    shouldDelete="false"
                    typeSpeed="250"
                    blinkingSpeed="1250"
                    element="h1"
                    cursorColor="#fff"
                    disableBlinkingOnEnd="false"
                />
                <div className="HomeBoxDescription">
                    {getAge(new Date('1997-01-31'))} {t('HomeBoxDescription')} <Link to="Education">{t('Education')}</Link> {t('or')} <Link to="Projects">{t('Projects')}</Link>. {t('HomeBoxDescription2')}
                </div>
                <div className="HomeBoxSocial">
                    <ContactOptions />
                </div>
            </div>
            <div className="HomeHolder">
                <div className="arrowGrid">
                    <div />
                    <div className="arrow bounce">
                        <Link to="Education"><KeyboardArrowDownIcon className="" /></Link>
                    </div>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={code => setSelected(code)}
                        countries={["GB", "PL"]}
                        showOptionLabel={false}
                        showSelectedLabel={false}
                    />
                </div>
            </div>
            {/* <SocialButton /> */}
        </div>
    )
}

export default Home;