import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Database } from "../Api/Database.js"
import { Header } from '../Components/Header.jsx';
import "../pages/Drivers.css"

export const Drivers = () => {
    return (
        <div>
            <Header title="Drivers" />
            <main className="table-layout">
                <TableContainer component={Paper}>
                    <Table
                        sx={{ Width: 1000 }}
                        className="table-style"
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID</StyledTableCell>
                                <StyledTableCell>Initials</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Database.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.personalInfo.userName}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.personalInfo.eamil}</StyledTableCell>
                                    <StyledTableCell align="center">{row.personalInfo.date}</StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </main>
        </div>
    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));