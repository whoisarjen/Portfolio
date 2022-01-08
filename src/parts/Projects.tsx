import { FunctionComponent, useState } from "react";
import ProjectsImage from "./ProjectsImage";

const ProjectsArray = [
    {
        title: 'Juicify 2.0 via React',
        status: 'Preparing for first live tests.',
        description: `Juicify is a PWA application, which is a coach in your pocket. It allow all function like MyFitnessPal and more, but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and helping him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.`,
        technology: ['Next.js', 'React', 'Typescript', 'Javascript', 'MongoDB', 'Express', 'JWT', 'Redis', 'Socket.io', 'PWA', 'IndexedDB', 'MUI', 'i18n', 'Cookies', 'etc.'],
        nerdInformations: `All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization. iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue. MongoDB as main database allow fast writting to DB, which is the most important part of "native experience". When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.`,
        live: 'https://juicify.app',
        livePass: '-',
        source: 'https://github.com/whoisarjen/Juicify',
        // img: 'https://i.imgur.com/fw8UjMc.png'
    },
    {
        title: 'Juicify 1.0 via Vue',
        status: 'Project ended. Reached satisfying level of working as first such big project and got 500+ users, because of goal, which is mastering React, decided to stop working on this code and rewrite whole application.',
        description: `Juicify is a PWA application, which is a coach in your pocket. It allow all function like MyFitnessPal and more, but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and helping him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.`,
        technology: ['Vue', 'Javascript', 'MongoDB', 'Express', 'JWT', 'Redis', 'Socket.io', 'PWA', 'IndexedDB', 'Vuetify', 'i18n', 'Cookies', 'etc.'],
        nerdInformations: `All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization. iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue. MongoDB as main database allow fast writting to DB, which is the most important part of "native experience". When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.`,
        live: 'https://juicify.app',
        livePass: '-',
        source: 'https://github.com/whoisarjen/Juicify-Beta-V1.0',
        img: 'https://i.imgur.com/tJXhy7K.png'
    }
]

const Projects: FunctionComponent = () => {
    const [img, setImg] = useState('')
    const [isProjectDialog, setIsProjectDialog] = useState(false)

    return (
        <div className="Projects">
            <div className="marginAuto">
                <h2>Projects</h2>
                <div className="h2Description">
                    All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization.
                    iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue.
                    MongoDB as main database allow fast writting to DB, which is the most important part of "native experience".
                    When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.
                </div>
                {
                    ProjectsArray.map(project =>
                        <div className="ProjectsBox">
                            {
                                project.img
                                    ?
                                    <img
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
                                    <div className="ProjectsBoxDescriptionBold">Status:</div>
                                    {project.status}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">Technology:</div>
                                    {project.technology.map((technology, index) =>
                                        (index + 1) != project.technology.length
                                            ?
                                            technology + ", "
                                            :
                                            technology
                                    )}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">Description:</div>
                                    {project.description}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">Nerd informations:</div>
                                    {project.nerdInformations}
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">Live version:</div>
                                    {
                                        project.live &&
                                        <a href={project.live} target="_blank">{project.live}</a>
                                    }
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">Live version password:</div>
                                    {
                                        project.livePass
                                    }
                                </div>
                                <div>
                                    <div className="ProjectsBoxDescriptionBold">Source:</div>
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