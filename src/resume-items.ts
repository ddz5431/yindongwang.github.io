import { EducationBackground } from "./EducationBackground"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function createDWorkData(
    Period: string,
    Position: string,
    Company: string,
    Location: string
) {
    return { Period, Position, Company, Location}
}

export const work = [
    createDWorkData("01.2024-now", "PhD candidate", "Hasso Plattner Institute", "Potsdam, Germany"),
    createDWorkData("10.2021-12.2023", "NLP engineer", "MORESOPHY GmbH", "Munich, Germany"),
    createDWorkData("05.2021-10.2021", "Student Data Analyst", "BingoStar GmbH", "Munich, Germany"),
    createDWorkData("10.2019-07.2021", "Teaching Assistant ", "LMU Munich", "Munich, Germany"),
    createDWorkData("11.2019-10.2020", "Student Assistant", "LMU Munich", "Munich, Germany"),
    createDWorkData("08.2019-09.2019", "Marketing Intern", "ATOSS GmbH", "Munich, Germany"),
    createDWorkData("03.2018-09.2018", "Marketing Intern", "Bosch China", "Shanghai, China")
];

export const EDUCATION: EducationBackground [] = [
    {
        Period: "2024-current",
        Major: "Artificial Intelligence and Intelligent Systems",
        Degree: "Doctor Degree",
        University: "Hasso Plattner Institute",
        Location: "Potsdam, Germany"
    },
    {
        Period: "2019-2021",
        Major: "Computational Linguistics, minored in Computer Science",
        Degree: "Master of Science",
        University: "LMU Munich",
        Location: "Munich, Germany"
    },
    {
        Period: "2018-2019",
        Major: "Computational Linguistics",
        Degree: "Prerequisite courses",
        University: "LMU Munich",
        Location: "Munich, Germany"
    },
    {
        Period: "2014-2018",
        Major: "German Language and Literature",
        Degree: "Bachelor of Arts",
        University: "University of Anhui",
        Location: "Anhui, China"
    },
    {
        Period: "2016-2017",
        Major: "German Language and Literature",
        Degree: "Exchange Studies",
        University: "University of Osnabrück",
        Location: "Osnabrück, Germany"
    }
]

export const head_education = [
    {field: "Education Experience", icon: SchoolIcon},
]

export const head_experience = [
    {field: "Work Experience", icon: WorkIcon},
]