import "./resume.scss"
import React from "react";
import {EDUCATION, heads, work, skills} from "../../resume-items.ts";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';


export default function Resume() {

    function getKeys(dict) {
        return Object.keys(dict).map(key => {
            return <TableCell align="left">{key}</TableCell>
        })
    }

    function spliceRow(dict) {
        return Object.values(dict).map(value => {
            return <TableCell align="left">{value}</TableCell>
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
                        {rows.map((row) => (
                            <TableRow>
                                {spliceRow(row)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)
        }

    function HeadsList(props) {
        const heads = props.heads
        const listItems = heads.map((object) => {
            const CustomIconTag = object['icon']
            return<ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CustomIconTag/>
                        </Avatar>
                    </ListItemAvatar>

                <List primary={object['field']}/>
                    {(object['field']==='Education Experience')? createTable(EDUCATION) : createTable(work)}
                <Divider variant="inset" component="li"/>
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
        <div className="resume">
            <h3 className="title">Education and Work Experience</h3>
            <HeadsList heads={heads}/>
        </div>
    );
}
