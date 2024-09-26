import { EducationBackground } from "./EducationBackground"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function createDWorkData(
    Period: string,
    Position: string,
    Company: string,
    Location: string,
    Link: string
) {
    return { Period, Position, Company, Location, Link}
}

export const work = [
    createDWorkData("01.2024-now",
        "PhD candidate",
        "Hasso Plattner Institute",
        "Potsdam, Germany",
        "https://hpi.de"),

    createDWorkData("10.2021-12.2023", "NLP engineer", "MORESOPHY GmbH", "Munich, Germany", "https://www.moresophy.com/en"),
    createDWorkData("05.2021-10.2021", "Student Data Analyst", "BingoStar GmbH", "Munich, Germany", "https://www.lmu.de"),
    createDWorkData("10.2019-07.2021", "Teaching Assistant ", "LMU Munich", "Munich, Germany", "https://www.lmu.de"),
    createDWorkData("11.2019-10.2020", "Student Assistant", "LMU Munich", "Munich, Germany", "https://www.lmu.de"),
    createDWorkData("08.2019-09.2019", "Marketing Intern", "ATOSS GmbH", "Munich, Germany", "https://www.atoss.com/de"),
    createDWorkData("03.2018-09.2018", "Marketing Intern", "Bosch China", "Shanghai, China", "https://www.bosch.de")
];

export const EDUCATION: EducationBackground [] = [
    {
        Period: "2024-current",
        Major: "Artificial Intelligence and Intelligent Systems",
        Degree: "Ph.D",
        University: "Hasso Plattner Institute",
        Location: "Potsdam, Germany",
        Link: "https://hpi.de"
    },
    {
        Period: "2019-2021",
        Major: "Computational Linguistics, minored in Computer Science",
        Degree: "Master of Science",
        University: "LMU Munich",
        Location: "Munich, Germany",
        Link: "https://www.lmu.de"
    },
    {
        Period: "2018-2019",
        Major: "Computational Linguistics",
        Degree: "Prerequisite courses",
        University: "LMU Munich",
        Location: "Munich, Germany",
        Link: "https://www.lmu.de"
    },
    {
        Period: "2014-2018",
        Major: "German Language and Literature",
        Degree: "Bachelor of Arts",
        University: "University of Anhui",
        Location: "Hefei, China",
        Link: "https://en.ahu.edu.cn/"
    },
    {
        Period: "2016-2017",
        Major: "German Language and Literature",
        Degree: "Exchange Studies",
        University: "University of Osnabrück",
        Location: "Osnabrück, Germany",
        Link: "https://www.uni-osnabrueck.de/"
    }
]

export const head_education = [
    {field: "Education Experience", icon: SchoolIcon},
]

export const head_experience = [
    {field: "Work Experience", icon: WorkIcon},
]