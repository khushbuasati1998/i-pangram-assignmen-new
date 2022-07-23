import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import loadable from '@loadable/component';

// load @mui material components
const Typography = loadable(() => import('@mui/material/Typography'));
const Table = loadable(() => import('@mui/material/Table'));
const TableHead = loadable(() => import('@mui/material/TableHead'));
const TableRow = loadable(() => import('@mui/material/TableRow'));
const TableCell = loadable(() => import('@mui/material/TableCell'));
const TableBody = loadable(() => import('@mui/material/TableBody'));
const Paper = loadable(() => import('@mui/material/Paper'));

export interface SummaryRowDetails {
    question: string;
    answer: string;
}

interface Props {
    details: {
        id: string;
        list: SummaryRowDetails[];
    };
    index: number;
}

const Summary = ({ details, index }: Props) => {
    return (
        <TableContainer component={Paper} sx={{ margin: '2rem 0px' }}>
            <Typography>Form No. {Number(index) + 1}</Typography>
            <Table sx={{ minWidth: 650, marginTop: '1rem' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell>Question</TableCell>
                        <TableCell align="center">Answer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {details.list.map((row: SummaryRowDetails, index: number) => (
                        <TableRow
                            key={row.question}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.question}
                            </TableCell>
                            <TableCell align="center">{row.answer}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Summary;