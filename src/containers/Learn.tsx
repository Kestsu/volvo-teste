import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { LearnId } from "../components/learnId/LearnId";
import {Footer} from "../components/footer/Footer"


interface LearnParams {
  id: string;
}

export const Learn: React.FC = () => {
  const { id } = useParams<LearnParams>();

  return (
    <section>
      <Navbar />
      <LearnId id={id} />
      <Footer/>
    </section>
  );
};