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
          height: "250px",
          borderRadius: "16px",
          marginTop: "60x",
     },
});
const Banner = () => {
     const classes = useStyles();
     return (
          <Box sx={{  height: "210px", width: "100%", top: "10%" }}>
               <Box>
                    <Carousel animationHandler={"fade"} showStatus={false} autoPlay={true} showThumbs={false} showArrows={true} infiniteLoop={true}>
                         {images.map((obj) => (
                              <div>
                                   <img className={classes.image} src={obj} alt="image1" />
                              </div>
                         ))}
                    </Carousel>
               </Box>
          </Box>
     );
};

export default Banner;
