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

// import { downloadFile } from 'react-file-downloader'


export default function Education() {

    function getKeys(dict) {
        return Object.keys(dict).map((key) => {
            return <TableCell align="left" key={"education-table-key-cell-" + key}>{key}</TableCell>
        })
    }

    function spliceRow(dict) {
  return Object.entries(dict).map(([key, value], idx) => {
    let cellContent = value;

    // Example: If the key is 'Position', make the text bold
    if (key === 'Major') {
      cellContent = <strong>{value}</strong>;
    }

    return (
      <TableCell align="left" key={`experience-table-value-cell-${idx}`}>
        {cellContent}
      </TableCell>
    );
  });
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
        <div className="section education" id="education">
            <h2 className="title">Education Experience</h2>
            <div className="table_container">
                <HeadsList heads={head_education}/>
            </div>
        </div>
    );
}