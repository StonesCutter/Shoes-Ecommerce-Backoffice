import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ClearIcon from "@mui/icons-material/Clear";
import emptyImage from "../../../assets/images/emptyImage/emptyImage.jpg";
import "./imageListContainer.css";

export default function ImageListContainer(props) {
  console.log("PROPS:", props);

  function removeImg(index) {
    console.log("INDEX removeImg:", index);
    let array = props.imagesData;
    array.splice(index, 1);
    props.setImagesData({ ...props.state, array });
  }

  return (
    <ImageList
      sx={{ width: 500, height: 450, position: "relative" }}
      cols={3}
      rowHeight={164}
    >
      {emptyImagesNumber(props.imagesData).map((item, index) => (
        <ImageListItem key={Math.random()}>
          {props.imagesData.length === index && (
            <div>
              <label
                htmlFor={"file-ip-" + index}
                className="form-input-file-label"
              >
                +
              </label>
              <input
                type="file"
                name="file"
                id={"file-ip-" + index}
                accept="image/*"
                onChange={(event) => props.showPreview(event, index)}
                className="form-input-file "
                style={{
                  position: "absolute",
                  zIndex: "1",
                  top: "70px",
                  left: "70px",
                }}
              />
            </div>
          )}

          {props.imagesData[index] && (
            <div onClick={() => removeImg(index)}>
              <ClearIcon
                style={{ position: "absolute", right: "0", cursor: "pointer" }}
              />
            </div>
          )}

          {!props.imagesData[index] && (
            <img
              src={`${emptyImage}`}
              style={{ width: "100%", height: "100%" }}
              alt=""
              loading="lazy"
            />
          )}

          <img
            src={`${props.imagesData[index]}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${props.imagesData[index]}`}
            alt={""}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

function emptyImagesNumber(imagesData) {
  //let emptyImagesArray = imagesData;
  const emptyImagesArray = Array.from({ length: imagesData.length + 1 });
  return emptyImagesArray;
}
