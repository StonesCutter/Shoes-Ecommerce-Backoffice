import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityOnIcon from "@mui/icons-material/Visibility";
import "./inputPassword.css";

function InputPassword(props) {
  const [state, setState] = useState({
    showPassword: false,
  });

  const register = props?.register;

  function toggleVisibility() {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  }
  return (
    <>
      <div className="password-wrapper">
        {register && (
          <input
            {...register(props.field?.name, props.field?.errors)}
            type={state.showPassword ? "text" : "password"}
            id={props.field?.id}
            name={props.field?.name}
            placeholder={props.field?.placeholder}
            required={props.field?.required}
            defaultValue={props.field?.defaultValue}
            className="form-input"
          />
        )}

        <div className="icon-container" onClick={toggleVisibility}>
          {!state.showPassword && <VisibilityOnIcon fontSize="medium" />}
          {state.showPassword && <VisibilityOffIcon fontSize="medium" />}
        </div>
      </div>
    </>
  );
}

InputPassword.default = {
  isRequired: false,
};

export default InputPassword;
