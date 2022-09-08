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
import { Header } from "../Components/Header"
import "../pages/VehicleFleet.css"


export const VehicleFleet = () => {
    return (
        <div>
            <Header title="Vehicle Fleet" />
            <main className="table-layout">
                <TableContainer component={Paper}>
                    <Table sx={{ Width: 2000 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Sensor</StyledTableCell>
                                <StyledTableCell align="right">Vehicle Model</StyledTableCell>
                                <StyledTableCell align="right">Model Year</StyledTableCell>
                                <StyledTableCell align="right">Channel ID</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Database.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.vehicleInfo.sensor}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.vehicleInfo.vehicleModel}</StyledTableCell>
                                    <StyledTableCell align="right">{row.vehicleInfo.modelYear}</StyledTableCell>
                                    <StyledTableCell align="right">{row.vehicleInfo.ChannelID}</StyledTableCell>
                                    <StyledTableCell align="right">{row.vehicleInfo.date}</StyledTableCell>
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