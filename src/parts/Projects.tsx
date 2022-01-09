import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectsImage from "./ProjectsImage";

const ProjectsArray = [
    {
        title: 'Juicify 2.0 via React',
        status: 'Juicify2Status',
        description: `Juicify2Description`,
        technology: ['Next.js', 'React', 'Redux toolkit', 'Typescript', 'Javascript', 'MongoDB', 'Express', 'JWT', 'Redis', 'Socket.io', 'PWA', 'IndexedDB', 'MUI', 'i18n', 'Cookies', 'etc.'],
        nerdInformations: `Juicify2NerfInformations`,
        live: '',
        livePass: '',
        source: 'https://github.com/whoisarjen/Juicify',
        img: ''
    },
    {
        title: 'Juicify 1.0 via Vue',
        status: 'Juicify1Status',
        description: `Juicify1Description`,
        technology: ['Vue', 'Javascript', 'MongoDB', 'Express', 'JWT', 'Redis', 'Socket.io', 'PWA', 'IndexedDB', 'Vuetify', 'i18n', 'Cookies', 'etc.'],
        nerdInformations: `Juicify1NerfInformations`,
        live: 'https://juicify.app',
        livePass: 'Marek : Marek123',
        source: 'https://github.com/whoisarjen/Juicify-Beta-V1.0',
        img: 'https://i.imgur.com/tJXhy7K.png'
    }
]

const Projects: FunctionComponent = () => {
    const { t } = useTranslation()
    const [img, setImg] = useState('')
    const [isProjectDialog, setIsProjectDialog] = useState(false)

    return (
        <div className="Projects">
            <div className="marginAuto">
                <h2>{t('Projects')}</h2>
                <div className="h2Description">
                    {t('ProjectsDescription')}
                </div>
                <h3 className="ProjectsLetsTalk">{t('ProjectsDescription2')}</h3>
                {
                    ProjectsArray.map(project =>
                        <div className="ProjectsBox">
                            {
                                project.img
                                    ?
                                    <img
                                        style={{ cursor: 'pointer' }}
                                        onClick={
                                            () => {
                                                setImg(project.img)
                                                setIsProjectDialog(true)
                                            }
                                        }
                                        src={project.img}
                                    />
                                    :
                                    <img
                                        src={'https://i.imgur.com/fw8UjMc.png'}
                                    />
                            }
                            <div className="ProjectBoxDescription">
                                <h3>{project.title}</h3>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('Status')}:</div>
                                    {t(project.status)}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('Technology')}:</div>
                                    {project.technology.map((technology, index) =>
                                        (index + 1) != project.technology.length
                                            ?
                                            technology + ", "
                                            :
                                            technology
                                    )}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('Description')}:</div>
                                    {t(project.description)}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('NerdInformations')}:</div>
                                    {t(project.nerdInformations)}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('LiveVersion')}:</div>
                                    {
                                        project.live
                                            ?
                                            <a href={project.live} target="_blank">{project.live}</a>
                                            :
                                            '-'
                                    }
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('LiveVersionPassword')}:</div>
                                    {
                                        project.livePass
                                            ?
                                            project.livePass
                                            :
                                            '-'
                                    }
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">{t('Source')}:</div>
                                    <a target="_blank" href={project.source}>{project.source}</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <ProjectsImage img={img} isProjectDialog={isProjectDialog} handleClose={() => setIsProjectDialog(false)} />
        </div>
    )
}

export default Projects;