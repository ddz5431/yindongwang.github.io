import React from "react";
import "./experience.scss";
import {head_education, head_experience, work} from "../../resume-items.ts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { BrowserView, MobileView } from "react-device-detect";

export default function Experience() {
  function getKeys(dict) {
    return Object.keys(dict).map((key) => (
      <TableCell align="left" key={`experience-table-key-cell-${key}`}>
        {key}
      </TableCell>
    ));
  }

  function spliceRow(dict) {
  return Object.entries(dict).map(([key, value], idx) => {
    let cellContent = value;

    // Example: If the key is 'Position', make the text bold
    if (key === 'Position') {
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
  const columnNames = getKeys(rows[0]);

  return (
    <TableContainer component={Paper} style={{ maxHeight: 400 }}>
      <Table aria-label="experience table" stickyHeader>
        <TableHead>
          <TableRow>
            {columnNames}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={`experience-table-row-${idx}`}
            >
              {spliceRow(row)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  }


  function HeadsList(props) {
    const { heads } = props;
    const listItems = heads.map((object, idx) => {
      const CustomIconTag = object.icon;
      return (
        <ListItem key={`head-experience-${idx}`}>
          <ListItemAvatar>
            <Avatar>
              <CustomIconTag />
            </Avatar>
          </ListItemAvatar>
          {createTable(work)}
        </ListItem>
      );
    });

    return <List>{listItems}</List>;
  }

  return (
    <>
      <BrowserView>
        <div className="section experience">
          <h2 className="title">Work Experience</h2>
          <div className="table_container">
            <HeadsList heads={head_education}/>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="section resume">
          <h5 className="title">Resume to Download</h5>
          <a href={process.env.PUBLIC_URL + "/Yindong_Wang_s_CV.pdf"} download>
            {/* Uncomment and provide the image if needed */}
            {/* <img src={resume} alt="Resume" className="image" /> */}
          </a>
        </div>
      </MobileView>
    </>
  );
}
