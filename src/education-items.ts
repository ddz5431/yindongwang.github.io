//import { MultilineChart, SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons"
import { EducationBackground } from "./EducationBackground"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';


const Icons = [WorkIcon, SchoolIcon, ExploreIcon]
export const EDUCATION: EducationBackground [] = [
    {
        time: "2019-2021",
        university: "LMU Munich",
        major: "Computational Linguistics with a minor in Computer Science",
        degree: "Master of Science",
        declaration: "",
        location: "Munich Germany"
    },
    {
        time: "2018-2019",
        university: "LMU Munich",
        major: "Computational Linguistics",
        degree: "",
        declaration: "Required for Master studies",
        location: "Munich Germany"
    },
    {
        time: "2014-2018",
        university: "University of Anhui",
        major: "German Language and Literature",
        degree: "Bachelor of Arts",
        declaration: "",
        location: "Anhui China"
    },
    {   
        time: "2016-2017",
        university: "University of Osnabrück",
        major: "German Literature",
        degree: "",
        declaration: "Exchange studies",
        location: "Osnabrück Germany"
    }
]


export const work = [
    "NLP Engineer & Web Developer"
]

export const heads = [
    {field: "Work Experience", icon: WorkIcon},
    {field: "Education Experience", icon: SchoolIcon},
    {field: "Skills", icon: ExploreIcon}
]