import { FunctionComponent } from "react";
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const Education: FunctionComponent = () => {
    return (
        <div className="Education">
            <h2 className="defaultPadding">Education</h2>
            <div className="h2Description defaultPadding">
                All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization.
                iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue.
                MongoDB as main database allow fast writting to DB, which is the most important part of "native experience".
                When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.
            </div>
            <Timeline position="alternate" sx={{ margin: 'auto', maxWidth: '700px' }}>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        10.2021 - now
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Master IT
                        </Typography>
                        <Typography>Wydział Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        10.2017 - 06.2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Engineere IT
                        </Typography>
                        <Typography>Wydział Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego
                            &
                            Wyższa Szkoła Informatyki i Umiejętności w Łodzi
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        09.2013 - 06.2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            High School IT
                        </Typography>
                        <Typography>Zespół szkół zawodowych im. stanisława staszica w Aleksandrowie Łódzkim</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        start - 06.2013
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Basic
                        </Typography>
                        <Typography>Basic education</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education;