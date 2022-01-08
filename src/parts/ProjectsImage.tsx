import { FunctionComponent } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface ProjectsImageProps {
    img: string
    isProjectDialog: boolean,
    handleClose: () => void
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectsImage: FunctionComponent<ProjectsImageProps> = ({ img, isProjectDialog, handleClose }) => {

    return (
        <div className="ProjectsImage">
            <Dialog
                fullScreen
                open={isProjectDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'fixed', 'top': 0 }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

                        </Typography>
                    </Toolbar>
                </AppBar>
                <img className="ProjectsImageIMG" src={img} />
            </Dialog>
        </div>
    )
}

export default ProjectsImage;