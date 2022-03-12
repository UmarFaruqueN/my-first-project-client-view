import React from "react";

import Header from "../Components/Header/Header";
import HomeComponents from "../Components/Body/Home/HomeComponents";
import { Footer } from "./";

export const Home = () => {
     return (
          <>
               <Header />
               <HomeComponents />
               <Footer/>
          </>
     );
};

export default Home;
