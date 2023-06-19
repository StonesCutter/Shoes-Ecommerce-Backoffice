import React from "react";
import MyButton from "@mui/material/Button";
import "./button.css";

function Button(/*text, action*/ props) {
  return (
    <div className="button-container">
      <MyButton
        variant="contained"
        color={props.color}
        type={props.type} /* onClick={action}*/
      >
        {props.title}
      </MyButton>
    </div>
  );
}
export { Button };
