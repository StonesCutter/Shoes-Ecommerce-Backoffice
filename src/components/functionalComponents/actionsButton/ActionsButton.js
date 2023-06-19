import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import "./actionsButton.css";

export default function ActionsButton({ icons, labels, productId, ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function mapIcons() {
    return icons.map((icon, index) => {
      return (
        <MenuItem key={index} onClick={handleClose}>
          <Link
            to={icon.url ? `${icon.url}/${productId}` : null}
            onClick={
              icon.action === "delete"
                ? () => props.deleteAction(productId)
                : null
            }
          >
            <div style={{ display: "flex", gap: 10 }}>
              {icon.icon} {icon.label}
            </div>
          </Link>
        </MenuItem>
      );
    });
  }

  return (
    <div>
      <Button
        sx={{ color: "black" }}
        className="actions-button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {mapIcons()}
      </Menu>
    </div>
  );
}
