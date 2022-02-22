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
import { useTranslation } from "react-i18next";

const Education: FunctionComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="Education">
            <h2 className="defaultPadding">{t('Education')}</h2>
            <div className="h2Description defaultPadding">
                {t('EducationDescription')}
            </div>
            <Timeline position="alternate" sx={{ margin: 'auto', maxWidth: '700px' }}>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        10.2021 - {t('Now')}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography sx={{ fontWeight: 700 }} variant="h6" component="span">
                            {t('MasterIT')}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem' }}>Wydział Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego</Typography>
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
                        <Typography sx={{ fontWeight: 700 }} variant="h6" component="span">
                            {t('EngineereIT')}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem' }}>Wydział Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego
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
                        09.2013 - 06.2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography sx={{ fontWeight: 700 }} variant="h6" component="span">
                            {t('HighSchoolIT')}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem' }}>Zespół szkół zawodowych im. stanisława staszica w Aleksandrowie Łódzkim</Typography>
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
                        <Typography sx={{ fontWeight: 700 }} variant="h6" component="span">
                            {t('Basic')}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem' }}>{t('BasicDescription')}</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education;