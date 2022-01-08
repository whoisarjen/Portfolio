import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    GB: {
        translation: {
            or: 'or',
            Education: "Education",
            EducationDescription: "Since High school my education is related to Informatics Technology. I learned a lot diffrent paths for this topic, but mostly I was always extending the programming way, which allowed me to have closer look for more programming languages than my favourite Javascript's path.",
            MasterIT: "Master IT",
            EngineereIT: "Engineere IT",
            HighSchoolIT: "High School IT",
            Basic: "Basic",
            BasicDescription: "Basic education",
            Projects: "Projects",
            ProjectsDescription: "Since 2015 I was building a lot of projects, which where mostly on same technology: jQuery, PHP, MySQL & Wordpress, which allowed me to create basiclly everything what I needed, but when the time to defende Engineere title came, I decided to create the biggest project in my life - Juicify (exacly Juicify 1.0), which was too complicated for my small technology pool. After year of learning and coding, Juicify 1.0 got 500 users and deserved new version, used once again as best option to learn new technology.",
            ProjectsDescription2: "So let's talk about what Juicify uses...",
            Technology: "Technology",
            Description: "Description",
            NerdInformations: "Nerd informations",
            LiveVersion: "Live version",
            LiveVersionPassword: "Live version password",
            Source: "Source",
            mainH1: "Hi, I'm Kamil Owczarek.",
            HomeBoxDescription: "Year Old, Javascript engineer, practicing minimalisting style & doing magic things to make internet a better place. View my",
            HomeBoxDescription2: "You can reach Me via social media or send an email at KamilOw97@gmail.com.",
            Contact: "Contact",
            Now: "Now",
            Juicify1Status: "Project ended. Reached satisfying level of working as first such big project and got 500+ users, because of goal, which is mastering React, decided to stop working on this code and rewrite whole application.",
            Juicify1Description: "Juicify is a PWA application, which is a coach in your pocket. It allow all function like MyFitnessPal and more, but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and helping him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.",
            Juicify1NerfInformations: `All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization. iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue. MongoDB as main database allow fast writting to DB, which is the most important part of "native experience". When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.`,
            Juicify2Status: "Preparing for first live tests.",
            Juicify2Description: "Juicify is a PWA application, which is a coach in your pocket. It allow all function like MyFitnessPal and more, but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and helping him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.",
            Juicify2NerfInformations: `All the technology probably are not new for you, but what is the biggest flex of the app is the way it handles offline synchronization. iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue. MongoDB as main database allow fast writting to DB, which is the most important part of "native experience". When user is forced to search in DB, Juciify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.`
        }
    },
    PL: {
        translation: {
            or: 'lub',
            Education: "Edukacja",
            EducationDescription: "Od szkoły średniej moja edukacja jest powiązana stricte z Informatyką. Pozwoliło mi to na poznanie wielu różnych dziedzin tego zagadnienia, ale zawsze interesowało mnie przede wszystkim programowanie. Przed okres nauki poznałem wiele języków programowania, dzięki czemu łatwiej było mi zdecydować się na konkretny kierunek, Javascript Engineer.",
            MasterIT: "Magister IT",
            EngineereIT: "Inżynier IT",
            HighSchoolIT: "Technikum IT",
            Basic: "Podstawowe",
            BasicDescription: "Podstawowe wykształcenie",
            Projects: "Projekty",
            ProjectsDescription: "",
            ProjectsDescription2: "",
            Technology: "Technologie",
            Description: "Opis",
            NerdInformations: "Informację dla nerdów",
            LiveVersion: "Wersja na żywo",
            LiveVersionPassword: "Hasło do wersji na żywo",
            Source: "Kod",
            mainH1: "Cześć, jestem Kamil.",
            HomeBoxDescription: "lat, Javascript engineer, praktykuje minimalizm & sprawiam, że internet jest lepszym miejscem. Sprawdź",
            HomeBoxDescription2: "Możesz się ze mną skontaktować za pomocą social mediów lub KamilOw97@gmail.com.",
            Contact: "Kontakt",
            Now: "Teraz",
            Juicify1Status: "",
            Juicify1Description: "",
            Juicify1NerfInformations: ``,
            Juicify2Status: "",
            Juicify2Description: "",
            Juicify2NerfInformations: ``
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "GB",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;