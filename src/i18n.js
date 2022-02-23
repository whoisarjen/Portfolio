import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    GB: {
        translation: {
            or: 'or',
            Education: "Education",
            EducationDescription: "Since high school, my education is related to Information Technology. I learned a lot diffrent paths for this topic, but mostly I was always leaning towards programming,which allowed me to have closer look into programming languages more than my favourite Javascript's path.",
            MasterIT: "Master of IT",
            EngineereIT: "IT Engineer",
            HighSchoolIT: "IT major in high School",
            Basic: "Basic",
            BasicDescription: "Basic education",
            Projects: "Projects",
            ProjectsDescription: "Since 2015 I was building a lot of projects,mostly on same technology: jQuery, PHP, MySQL & Wordpress, which allowed me to create everything what I needed, but when the time to defend title Engineer came,at the end of my Bachelors studies I decided to create the biggest project in my life - Juicify (exactly Juicify 1.0), which was too complicated for my small technology pool. After year of learning and coding, Juicify 1.0 got 500 users and deserved new version, used once again as best option to learn new technology.",
            ProjectsDescription2: "So let's talk about what Juicify uses...",
            Technology: "Technology",
            Description: "Description",
            NerdInformations: "What am I proud of:",
            LiveVersion: "Live version",
            LiveVersionPassword: "Live version password",
            Source: "Source",
            mainH1: "Hi, I'm Kamil Owczarek.",
            HomeBoxDescription: "Year Old, Software Engineer, practicing a minimalistic style & doing magical things to make internet a better place. View my",
            HomeBoxDescription2: "You can reach me via social media or send an email at KamilOw97@gmail.com.",
            Contact: "Contact",
            Now: "Now",
            Juicify1Status: "Project ended,reaching a satisfying level, getting 500+ users, but due to of my goal of mastering React, I decided to stop working on this code and to rewrite whole application.",
            Juicify1Description: "Juicify is a Progressive Web Application, which is a coach in your pocket. It allows all functions like popular fitness application (for example MyFitnessPal), but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and help him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.",
            Juicify1NerfInformations: `The technology probably are not new for you, but the biggest flex of the app is the way it handles offline synchronization. iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue. MongoDB as main database allow fast writing to DB, which is the most important part of "native experience". When user is forced to search in DB, Juicify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.`,
            Juicify2Status: "Live tests.",
            Juicify2Description: "Juicify is a Progressive Web Application, which is a coach in your pocket. It allows all functions like popular fitness application (for example MyFitnessPal), but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and help him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.",
            Juicify2NerfInformations: `The biggest flex of the app is the way of handling offline synchronization. iOS does not support PWA background synchronization, but thanks to socket and Web workers, we can kind of avoid the issue, but delegating synchornization to work in background, when user uses the app. MongoDB as main database allow fast writing to DB, which is the most important part of "native experience". When user search in DB, Juicify supports it with cache methods like indexedDB and Redis, reusing previous queries's results.`
        }
    },
    PL: {
        translation: {
            or: 'lub',
            Education: "Edukacja",
            EducationDescription: "Od szkoły średniej moja edukacja jest powiązana stricte z Informatyką. Pozwoliło mi to na poznanie wielu różnych dziedzin tego zagadnienia i umocnienie przekonania, że to właśnie programowanie jest dla mnie. Przez okres kształcenia spróbowałem wielu języków programowania, ale to Javascript Engineer jest profilem, który najbardziej mi odpowiada.",
            MasterIT: "Magister IT",
            EngineereIT: "Inżynier IT",
            HighSchoolIT: "Technikum IT",
            Basic: "Podstawowe",
            BasicDescription: "Podstawowe wykształcenie",
            Projects: "Projekty",
            ProjectsDescription: "Od 2015 roku zbudowałem wiele projektów, które opierały się o tę same technologie: jQuery, PHP, mySQL & Wordpress, które praktycznie pozwalały mi na stworzenie wszystkiego, co potrzebowałem. Kiedy przyszedł czas obrony inżyniera, zdecydowałem się na zbudowanie największego projektu w moim życiu - Juicify (dokładniej Juicify 1.0), który był zbyt skomplikowany dla obecnie posiadanych technologii. Po roku nauki oraz kodowania, Juicify 1.0 zdobyło 500+ użytkowników i zasłużyło na nową wersję, ponownie wykorzystaną jako najlepszy sposób na naukę nowych technologii.",
            ProjectsDescription2: "Więc porozmawiajmy o tym, co Juicify wykorzystuje...",
            Technology: "Technologie",
            Description: "Opis",
            NerdInformations: "Informację dla nerdów",
            LiveVersion: "Wersja na żywo",
            LiveVersionPassword: "Hasło do wersji na żywo",
            Source: "Kod",
            mainH1: "Cześć, jestem Kamil.",
            HomeBoxDescription: "lat, Software Engineer, praktykuje minimalizm & sprawiam, że internet jest lepszym miejscem. Sprawdź",
            HomeBoxDescription2: "Możesz się ze mną skontaktować za pomocą social mediów lub KamilOw97@gmail.com.",
            Contact: "Kontakt",
            Now: "Teraz",
            Juicify1Status: "Projekt zakończony. Osiągnął sadysakcjonujący sukces, sięgając 500+ użytkowników. Ze względu na zmianę technologii na Reacta, zdecydowałem się nie rozwijać tego kodu, a przepisać całą aplikację.",
            Juicify1Description: "Juicify to PWA aplikacja, która jest trenerem personalnym w Twojej kieszeni. Oferuje ona wszystkie funkcję jak inne tego typu aplikacje (np. MyFitnessPal) oraz wiele więcej. Główna różnica to przede wszystkim możliwość śledzenie progresu treningowego, obserwowania rezultatów innych osób oraz ich metod treningowych. Najważniejszą funkcją jest możliwość analizowania sposobu jedzenia użytkownika oraz pomagane mu w osiągnięciu celu sylwetkowego. Wciąż mało? Juicify działa w trybie offline.",
            Juicify1NerfInformations: `Wszystkie wymienione technologie prawdopodobnie nie są niczym nowym dla Ciebie, ale to, czym Juicify może się pochwalić to sposób, w który radzi sobie z synchronizacją po offline. W przypadku natywnych aplikacji można wykorzystać synchronizację w tle, ale nie działa to w przypadku PWA, któremu iOS blokuje taką możliwość. Sposobem na uniknięcie tego problemu jest socket, który dzięki wsparciu Redisa oraz szybkiej bazy danych noSQL, pozwala na przeprowadzenie tego procesu, bez psucia "native experience".`,
            Juicify2Status: "Pyrzogotowanie pod pierwsze testy na żywo.",
            Juicify2Description: "Juicify to PWA aplikacja, która jest trenerem personalnym w Twojej kieszeni. Oferuje ona wszystkie funkcję jak inne tego typu aplikacje (np. MyFitnessPal) oraz wiele więcej. Główna różnica to przede wszystkim możliwość śledzenie progresu treningowego, obserwowania rezultatów innych osób oraz ich metod treningowych. Najważniejszą funkcją jest możliwość analizowania sposobu jedzenia użytkownika oraz pomagane mu w osiągnięciu celu sylwetkowego. Wciąż mało? Juicify działa w trybie offline.",
            Juicify2NerfInformations: `Wszystkie wymienione technologie prawdopodobnie nie są niczym nowym dla Ciebie, ale to, czym Juicify może się pochwalić to sposób, w który radzi sobie z synchronizacją po offline. W przypadku natywnych aplikacji można wykorzystać synchronizację w tle, ale nie działa to w przypadku PWA, któremu iOS blokuje taką możliwość. Sposobem na uniknięcie tego problemu jest socket, który dzięki wsparciu Redisa oraz szybkiej bazy danych noSQL, pozwala na przeprowadzenie tego procesu, bez psucia "native experience".`,
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