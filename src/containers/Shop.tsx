import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { ShopId } from "../components/shopId/ShopId";
import { Footer } from "../components/footer/Footer"


interface ShopParams {
  id: string;
}

export const Shop: React.FC = () => {
  const { id } = useParams<ShopParams>();

  return (
    <section>
      <Navbar />
      <ShopId id={id} />
      <Footer />
    </section>
  );
};