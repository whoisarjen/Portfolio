import { FunctionComponent } from "react";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

const Education: FunctionComponent = () => {
    return (
        <div className="Education">
            <h2>Education</h2>
            <div className="h2Description">
                All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization.
                iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue.
                MongoDB as main database allow fast writting to DB, which is the most important part of "native experience".
                When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.
            </div>
            <div className="marginAuto">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            9:30 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <FastfoodIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            10:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Code
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <HotelIcon />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Sleep
                            </Typography>
                            <Typography>Because you need rest</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <RepeatIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default Education;