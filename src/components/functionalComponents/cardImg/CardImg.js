import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function MediaCard(props) {
  return (
    <Card sx={props.width} style={props.style}>
      <CardMedia
        component="img"
        sx={props.height}
        image={props.imageSrc}
        title={props.title}

        // style={props.style}
      />
    </Card>
  );
}
