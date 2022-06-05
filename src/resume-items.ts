//import { MultilineChart, SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons"
import { EducationBackground } from "./EducationBackground"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';
import {create} from "@mui/material/styles/createTransitions";


function createDWorkData(
    period: string,
    position: string,
    company: string,
    location: string
) {
    return { period, position, company, location}
}

export const work = [
    createDWorkData("05.2022-now", "PhD candidate", "Hasso Plattner Institute / University of Potsdam", "Potsdam, Germany"),
    createDWorkData("11.2021-now", "NLP engineer", "MORESOPHY GmbH", "Munich, Germany"),
    createDWorkData("10.2019-07.2021", "Teaching Assistant ", "LMU Munich", "Munich, Germany"),
    createDWorkData("11.2019-10.2020", "Student Assistant", "LMU Munich", "Munich, Germany"),
    createDWorkData("08.2019-09.2019", "Markeing Intern", "ATOSS GmbH", "Munich, Germany"),
    createDWorkData("03.2018-09.2018", "Marketing Intern", "Bosch China", "Shanghai, China")
];

export const EDUCATION: EducationBackground [] = [
    {
        period: "2022-2025",
        major: "Artificial Intelligence and Intelligent Systems",
        degree: "Doctor of science",
        university: "Hasso Plattner Institute / University of Potsdam",
        location: "Potsdam, Germany"
    },
    {
        period: "2019-2021",
        major: "Computational Linguistics with minor in Computer Science",
        degree: "Master of Science",
        university: "LMU Munich",
        location: "Munich, Germany"
    },
    {
        period: "2018-2019",
        major: "Computational Linguistics",
        degree: "Makeup year",
        university: "LMU Munich",
        location: "Munich, Germany"
    },
    {
        period: "2014-2018",
        major: "German Language and Literature",
        degree: "Bachelor of Arts",
        university: "University of Anhui",
        location: "Anhui, China"
    },
    {
        period: "2016-2017",
        major: "German Language and Literature",
        degree: "Exchange Studies",
        university: "University of Osnabrück",
        location: "Osnabrück, Germany"
    }
]

export const heads = [
    {field: "Work Experience", icon: WorkIcon},
    {field: "Education Experience", icon: SchoolIcon},
]