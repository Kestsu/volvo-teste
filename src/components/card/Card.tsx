import React from 'react';
import styles from "./card.module.css"
import Image from "next/image";
import { useHistory } from "react-router-dom";

interface CardProps {
  id:string;
  key: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
  className?: string;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ id, modelName, bodyType, modelType, imageUrl, className }) => {
  const history = useHistory();


  const handleClick = (type: string) => {
    console.log(id);
    
    if (type === "learn") {
      history.push(`/learn/${id}`);
    }
    if (type === "shop") {
      history.push(`/shop/${id}`);
    }
  };

  return (
    <article className={`${styles.cardContainer} ${styles.hoverEffect}  ${className}`}>
      <h2>{bodyType}</h2>
      <div className={`${styles.titleCard} ${styles.hoverEffect}`}>
        <h1>{modelName}</h1>
        <h3>{modelType}</h3>
      </div>

      <div onClick={() => handleClick('learn')} className={styles.imageContainer}>
        <Image className={styles.imageCars} src={imageUrl} alt={modelName} width="380px" height="300px" />
      </div>
      <div className={styles.buttonContainer}>
        <button className={`${styles.buttonRedirecionarLearn} ${styles.buttonRedirecionar}`} onClick={() => handleClick('learn')}>
          {"LEARN >"}
        </button>
        <button className={`${styles.buttonRedirecionarShop} ${styles.buttonRedirecionar}`} onClick={() => handleClick('shop')}>
          {"SHOP >"}
        </button>
      </div>
    </article>
  );
};

export default Card;

