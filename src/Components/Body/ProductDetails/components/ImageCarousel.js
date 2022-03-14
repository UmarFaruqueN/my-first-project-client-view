import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const images = [
     "https://picsum.photos/id/100/367/267",
     "https://picsum.photos/id/1000/367/267",
     "https://picsum.photos/id/1/367/267",
     "https://picsum.photos/id/1011/367/267",
];
const useStyles = makeStyles({
     image: {
          width: "100%",
          height: "300px",
     },
});

const ImageCarousel = () => {
     const classes = useStyles();
     return (
          <Box
               sx={{
                    height: "500px",
                    display: "flex",
                    alignItems: "center",
               }}
          >
               
          </Box>
     );
};

export default ImageCarousel;
