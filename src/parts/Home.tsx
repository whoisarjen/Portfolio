import { FunctionComponent, useState } from "react";
import SocialButton from "./SocialButton";
import { Typing } from "typing-effect-reactjs"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-scroll'
import ReactFlagsSelect from 'react-flags-select';

interface HomeProps {
    children: any
}

const Home: FunctionComponent<HomeProps> = ({ children }) => {
    const [selected, setSelected] = useState('GB');

    setTimeout(() => {
        const typing: any = document.querySelector('.HomeBox h1')
        typing.classList.remove('noRightBorder')

        const arrow: any = document.querySelector('.arrowGrid')
        arrow.style.display = 'grid'
    }, 6000)

    return (
        <div className="Home">
            {children}
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
                    Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.
                    Working with my hands to make magic happen on the internet. View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com.
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
            <SocialButton />
        </div>
    )
}

export default Home;