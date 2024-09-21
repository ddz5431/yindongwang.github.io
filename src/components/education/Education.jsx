import "./education.scss"
import React from "react";
import {EDUCATION, head_education} from "../../resume-items.ts";
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
import {BrowserView, MobileView} from 'react-device-detect';
import resume from '../../assets/resume.png'

// import { downloadFile } from 'react-file-downloader'


export default function Education() {

    function getKeys(dict) {
        return Object.keys(dict).map((key) => {
            return <TableCell align="left" key={"education-table-key-cell-" + key}>{key}</TableCell>
        })
    }

    function spliceRow(dict) {
        return Object.values(dict).map((value, idx) => {
            return <TableCell align="left" key={"education-table-value-cell-" + idx}>{value}</TableCell>
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
                            <TableRow key={"education-table-row-" + idx} className="br">
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
                return <ListItem key={"head-education-" + idx}>
                    <ListItemAvatar>
                        <Avatar>
                            <CustomIconTag/>
                        </Avatar>
                    </ListItemAvatar>

                        {createTable(EDUCATION)}
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
                <div className="education" id="education">
                    <div className="table_container">
                        <h5 className="title">Education Background</h5>
                        <HeadsList heads={head_education}/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <h5 className="title">Education Background</h5>
                <a href={process.env.PUBLIC_URL + '/Yindong_Wang_s_CV.pdf'} download>
                    <img src={resume} alt="resume" >
                    </img>
                </a>
            </MobileView>
        </>
    );
}
