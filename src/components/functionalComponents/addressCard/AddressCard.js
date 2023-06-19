import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { deleteAddress } from "../../../services/servicesAddresses";
import {
  notifyDeleteSuccess,
  notifyDeleteError,
} from "../../../utils/notificationsUtils";
import "./addressCard.css";

export default function OutlinedCard(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function navigateToAddAddress() {
    navigate("/personal-area/addresses/add-address");
  }

  function navigateToEditAddress() {
    navigate(`/personal-area/addresses/modify-address/${props?.address?.id}`);
  }

  const removeAddress = (id) => async () => {
    alert(`Are you sure you want to delete this address?`);
    const response = await deleteAddress(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      notifyDeleteSuccess("Address");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notifyDeleteError("address");
    }
  };

  const card = (
    <>
      <CardContent>
        {props?.isAddAddress && (
          <div
            className="add-address-container "
            onClick={navigateToAddAddress}
          >
            <Add className="add-address-icon" />
            <Typography color="text.secondary" className="add-address-text">
              {t("addAddress")}
            </Typography>
          </div>
        )}
        {!props?.isAddAddress && (
          <>
            <Typography color="text.secondary" gutterBottom>
              {props?.address?.label}
            </Typography>
            <Typography variant="h5">{props?.address?.name_surname}</Typography>
            <Typography sx={{ mt: 1 }} color="text.secondary">
              {props?.address?.street_address}
              <br />
              {t("zipcode")}:&nbsp; {props?.address?.zipcode}
              <br />
              {t("phoneNumber")}:&nbsp; {props?.address?.telephone}
              <br />
              {props?.address?.country}
              <br />
              {t("instructions")}:&nbsp; {props?.address?.instructions}
            </Typography>
            <CardActions>
              <Button size="medium" onClick={navigateToEditAddress}>
                {t("modify")}
              </Button>
              <Button size="medium" onClick={removeAddress(props?.address?.id)}>
                {t("remove")}
              </Button>
            </CardActions>
          </>
        )}
      </CardContent>
    </>
  );
  return (
    <Box sx={{ minWidth: 300, maxWidth: 350 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
