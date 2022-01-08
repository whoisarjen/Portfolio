import { FunctionComponent, useState } from "react";
// import SocialButton from "./SocialButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
// @ts-ignore
import { Typing } from "typing-effect-reactjs"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-scroll'
import ReactFlagsSelect from 'react-flags-select';
import Navbar from "./Navbar";
import ContactOptions from "./ContactOptions";

const getAge = (date: Date) => {
    const month_diff = Date.now() - new Date(date).getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}

const Home: FunctionComponent = () => {
    const [selected, setSelected] = useState('GB');

    setTimeout(() => {
        const typing: any = document.querySelector('.HomeBox h1')
        typing.classList.remove('noRightBorder')

        const arrow: any = document.querySelector('.arrowGrid')
        arrow.style.display = 'grid'
    }, 6000)

    return (
        <div className="Home">
            <Navbar />
            <div className="HomeBox">
                <Typing
                    text="Hi, I'm Kamil Owczarek."
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
                    {getAge(new Date('1997-01-31'))} year old, Javascript engineer, practicing minimalisting style & doing magic things to make internet a better place. View my <Link to="Education">Education</Link> or  <Link to="Projects">Projects</Link>. You can reach Me via social media or send an email at KamilOw97@gmail.com.
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