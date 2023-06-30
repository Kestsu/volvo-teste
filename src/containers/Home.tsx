import React from "react";
import { Navbar } from "../components/navbar/Navbar"
import  {Main}  from "../components/main/Main"
import {Footer} from "../components/footer/Footer"

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>

  );
};
