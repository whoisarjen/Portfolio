import { FunctionComponent } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

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

interface ContactOptionsProps {
    isAddDiv?: boolean
}

const ContactOptions: FunctionComponent<ContactOptionsProps> = ({ isAddDiv = false }) => {
    return (
        <div className="ContactOptions">
            {
                contact.map(x =>
                    isAddDiv
                        ?
                        <div>
                            <IconButton onClick={x.function} color="primary" component="span">
                                {x.icon}
                            </IconButton>
                        </div>
                        :
                        <IconButton onClick={x.function} color="primary" component="span">
                            {x.icon}
                        </IconButton>
                )
            }
        </div>
    )
}

export default ContactOptions;