import { FunctionComponent } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import ContactOptions from "./ContactOptions";
import { useTranslation } from "react-i18next";

const contact = [
    {
        icon: <GitHubIcon />,
        name: 'Github',
        // @ts-ignore
        function: () => window.open('https://github.com/whoisarjen', '_blank').focus()
    },
    {
        icon: <EmailIcon />,
        name: 'Email',
        // @ts-ignore
        function: () => window.open('mailto:KamilOw97@gmail.com', '_blank').focus()
    },
    {
        icon: <FacebookIcon />,
        name: 'Facebook',
        // @ts-ignore
        function: () => window.open('https://www.facebook.com/kamil.owczarek.1/', '_blank').focus()
    },
].reverse();

const Contact: FunctionComponent = () => {
    const { t } = useTranslation()
    
    return (
        <div className="Contact">
            <h2>{t('Contact')}</h2>
            <div className="ContactGrid">
                <ContactOptions isAddDiv={true} />
            </div>
        </div>
    )
}

export default Contact;