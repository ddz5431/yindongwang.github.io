import "./resume.scss"
import React from "react";
import {EDUCATION, heads} from "../../education-items.ts";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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

    function spliceArray(dict) {
        return Object.values(dict).map(value => {
            return <TableCell align="right">{value}</TableCell>
        })
    }

    function createTable(array) {
        let cell = undefined
        return array.map((dict) => {
            cell = spliceArray(dict)
            return (
                <TableContainer component={Paper}>
                    <Table sx={{minWid: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={dict.major} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {cell}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        });
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
                    <ListItemText primary={object['field']}/>
                        {createTable(EDUCATION)}
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
            <HeadsList heads={heads}/>
        </div>
    );
}
