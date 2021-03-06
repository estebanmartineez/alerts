import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from "@material-ui/core/TableHead";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import debounce from 'lodash/debounce';
import { ALERTS_API_URL } from "./helpers/constants";


const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

const TableCellHead = styled(TableCell)`
font-weight: 550;
border-bottom: 2px solid;
`
const TableCellBody = styled(TableCell)`
width: 160px;
`
const TableRowEmpty = styled(TableRow)`
height: 53 * ${props => (props.emptyRows ?? 0)};
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 1200px;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
`
const TextFieldCustom = styled(TextField)`
padding: 30px;
`
const Title = styled.h1`
padding: 30px 0px 0px;
`
export default function AlertTable() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([])
    const [totalRows, setTotalRows] = React.useState(0)
    const debounceOnChange = React.useCallback(debounce(onChange, 500), []);


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, totalRows - (page * rowsPerPage));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = async (event) => {
        await setRowsPerPage(parseInt(event.target.value, 10));
        await setPage(0);
    };

    React.useEffect(()  => {
       const renderAlerts = async () => {
           await getAlerts(page, rowsPerPage)
       }
       renderAlerts()
    },[page, rowsPerPage])

    async function getAlerts(page, limit) {
        const rows = await axios.get(`${ALERTS_API_URL}alerts`, {
            params: {
                page,
                limit
            }
        });
        setRows(rows.data.alertData)
        setTotalRows(rows.data.total)
    }

    function onChange(search) {
        axios.get(`${ALERTS_API_URL}alerts/search?search=${search}`)
        .then(response => setRows(response.data))
    }

    return (
    <Wrapper>
    <Container>
        <Title>Dashboard Alerts</Title>
        <TextFieldCustom
            id="standard-bare"
            placeholder="Search"
            margin="normal"
            onChange={e => debounceOnChange(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCellHead align="center">Server</TableCellHead>
                            <TableCellHead align="center">Description</TableCellHead>
                            <TableCellHead align="center">Created</TableCellHead>
                            <TableCellHead  align="center">Server Type</TableCellHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCellBody align="center" scope="row">
                                    {row.server}
                                </TableCellBody>
                                <TableCellBody align="center">
                                    {row.description}
                                </TableCellBody>
                                <TableCellBody align="center">
                                    {row.createdAt}
                                </TableCellBody>
                                <TableCellBody align="center">
                                    {row.server_type}
                                </TableCellBody>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRowEmpty emptyRows={emptyRows}>
                                <TableCell colSpan={6} />
                            </TableRowEmpty>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15]}
                                colSpan={3}
                                count={totalRows}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
    </Container>
    </Wrapper>
)}
