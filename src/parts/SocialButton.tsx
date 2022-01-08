import { FunctionComponent } from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ChatIcon from '@mui/icons-material/Chat';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

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
];

const SocialButton: FunctionComponent = () => {
    return (
        <div className="SocialButton">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, left: 16 }}
                    icon={<ChatIcon sx={{ color: "#fff" }} />}
                >
                    {contact.map((action) => (
                        <SpeedDialAction
                            onClick={action.function}
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    )
}

export default SocialButton;