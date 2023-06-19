import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductById,
  editProductByIdAuth,
} from "../services/servicesProducts";
import { useTranslation } from "react-i18next";
import { modifyProductFormProps } from "../utils/formUtils";
//import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";
import Form from "../components/hookComponents/form/Form";
import { modifyFormProps } from "../utils/formUtils";

function ModifyProduct() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
    formProps: [],
  });
  const language = i18n.language;
  const canUploadPictures = true;

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getProductById(id, language);
      console.log("RESPONSE:", response.data);
      setState({
        ...state,
        product: response.data,
        formProps: modifyFormProps(modifyProductFormProps, response.data),
      });
      if (!state.product) return;
      // modProductFormProps(modifyProductFormProps);
    }
    getResources();
  }, []);

  // function modProductFormProps(formFields) {
  //   let newformProps = [];

  //   for (let i = 0; i < formFields.length; i++) {
  //     newformProps.push({
  //       ...formFields[i],
  //       defaultValue: Object.values(state.product)[i],
  //     });
  //   }
  //   console.log("OLD FORM PROPS", modifyProductFormProps);
  //   console.log("NEW FORM PROPS", newformProps);
  //   //let concatenazione = [...newformProps, ...images];
  //   //console.log("CONCATENAZIONE ", concatenazione);

  //   setState({ ...state, formProps: newformProps });
  //   //setState({ ...state, formProps: concatenazione });
  // }

  return (
    <>
      {state.formProps.length > 0 && (
        <div className="screen-bg w-100 flex flex-column flex-center">
          <h1 className="screen-title">Modify product</h1>
          <div className="flex w-100 align-center justify-center">
            <Form
              propsData={state.formProps}
              abilitatePictures={canUploadPictures}
              buttonTitle={t("modify")}
              modifyProductAuth={editProductByIdAuth}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ModifyProduct;
