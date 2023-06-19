import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./productImages.css";

function ProductImages(props) {
  return (
    <ImageList cols={4} gap={16}>
      {props.productImages.map((item) => (
        <ImageListItem key={Math.random()}>
          <img
            src={`${item.imagePath}?w=164&h=164&fit=crop&auto=format`}
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"shoe"}
            loading="lazy"
            style={{
              maxHeight: "300px",
              maxWidth: "300px",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProductImages;
