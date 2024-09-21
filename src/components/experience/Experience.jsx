import "./experience.scss"
import React from "react";
import {head_experience, work} from "../../resume-items.ts";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {BrowserView, MobileView} from "react-device-detect";
import resume from '../../assets/resume.png'

export default function Experience() {

    function getKeys(dict) {
        return Object.keys(dict).map((key) => {
            return <TableCell align="left" key={"experience-table-key-cell-" + key}>{key}</TableCell>
        })
    }

    function spliceRow(dict) {
        return Object.values(dict).map((value, idx) => {
            return <TableCell align="left" key={"experience-table-value-cell-" + idx}>{value}</TableCell>
        })
    }

    function createTable(rows) {
        let columnNames = getKeys(rows[0])  /** Supposed that each row has same properties */

        return (<TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columnNames}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, idx) => (
                            <TableRow key={"experience-table-row-" + idx}>
                                {spliceRow(row)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)
        }

    function HeadsList(props) {
        const heads = props.heads
        const listItems = heads.map((object, idx) => {
            const CustomIconTag = object['icon']
            return <ListItem key={"head-experience-" + idx}>
                    <ListItemAvatar>
                        <Avatar>
                            <CustomIconTag/>
                        </Avatar>
                    </ListItemAvatar>

                    {createTable(work)}
            </ListItem>
           }
        );

        return (
            <List>
                {listItems}
            </List>
        );
    }

    return (
        <>
            <BrowserView className="browser_view">
                <div className="experience" id="experience">
                    <div className="table_container">
                        <h5 className="title" color='red'>Work Experience</h5>
                        <HeadsList heads={head_experience}/>
                    </div>
                </div>
            </BrowserView>
            <MobileView className="mobile_view">
                <div className="resume" id="resume">
                    <h5 className="title" >Resume to download</h5>
                    <a href={process.env.PUBLIC_URL + '/Yindong_Wang_s_CV.pdf'} download>
                        <img src={resume} alt="resume" className="image">
                        </img>
                    </a>
                </div>
            </MobileView>
        </>
    );
}
