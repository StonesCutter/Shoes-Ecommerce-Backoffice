import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ActionsButton from "../../functionalComponents/actionsButton/ActionsButton";
import { useTranslation } from "react-i18next";
import emptyShoes from "../../../assets/images/emptyImage/emptyShoes.png";
import "./genericTable.css";

function GenericTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { t } = useTranslation();

  const handleChangePage = (event, newPage) => {
    console.log("NEW PsdaAGE:", newPage);
    console.log("TOTAL ROWS:", props.results);
    setPage(newPage);
    console.log("Rows per page:", rowsPerPage);
    props.getResources(newPage + 1, rowsPerPage);
  };

  function mapColumns() {
    return props?.columns?.map((column) => {
      return (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {t(column.label)}
        </TableCell>
      );
    });
  }
  function mapRows() {
    return props?.fields?.slice(0, rowsPerPage).map((product, key) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
          {props.columns.map((column) => {
            const value = product[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.id === "actions" && (
                  <ActionsButton
                    icons={props.icons}
                    productId={product.id}
                    deleteAction={props.deleteAction}
                  />
                )}

                {column.id === "image_preview" ? (
                  <img
                    src={value ? value : emptyShoes}
                    alt="product"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                    }}
                  />
                ) : (
                  value
                )}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  }

  return (
    <Paper
      sx={{
        overflow: "hidden",
        boxShadow: "none",
        margin: "0 auto",
        backgroundColor: "#f1f1f1",
      }}
    >
      <TableContainer
        sx={{ height: 588, backgroundColor: "white" }}
        className="table-container"
      >
        <Table stickyHeader aria-label="sticky table" className="generic-table">
          <TableHead className="table-head">
            <TableRow>{mapColumns()}</TableRow>
          </TableHead>
          <TableBody className="table-body">{mapRows()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={props?.results || 0} //{props?.fields?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page} // {page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}

export default GenericTable;
