import React, { useEffect, useState } from 'react';
import Carousel, { ItemObject, RenderPaginationProps } from 'react-elastic-carousel';
import styles from './main.module.css';
import data from '../../../public/api/cars.json';
import Card from '../card/Card';
import Image from "next/image";
import setaEsquerda from "../../../public/images/seta-esquerda.png";
import setaDireita from "../../../public/images/seta-direita.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CustomPagination = ({ pages, activePage, onClick }: RenderPaginationProps) => (
  <div className={styles.paginationContainer}>
    <button onClick={() => onClick(String(activePage - 1))} className={styles.arrowButton}>
      <Image src={setaEsquerda} width={100} height={100} alt="setaEsquerda" />
    </button>
    <button onClick={() => onClick(String(activePage + 1))} className={styles.arrowButton}>
      <Image src={setaDireita} width={100} height={100} alt="setaDireita" />
    </button>
  </div>
);


export const Main: React.FC = () => {
  const [cars, setCars] = useState<
    {
      id: string;
      modelName: string;
      bodyType: string;
      modelType: string;
      imageUrl: string;
    }[] | null
  >(null);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCarousel(window.innerWidth <= 730);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const carregarDados = () => {
      try {
        setCars(data);
      } catch (erro) {
        console.log(erro);
      }
    };

    carregarDados();
  }, []);

  const handlePaginationClick = (prevItem: ItemObject, nextItem: ItemObject) => {
    setActiveCardIndex(nextItem.index);
  };

  return (
    <section className={styles.carouselContainer}>
      <h1 className={styles.titleMain}>Todos os modelos Recharge</h1>
      {showCarousel ? (
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          itemsToScroll={1}
          className={styles.customCarousel}
          isRTL={false}
          transitionMs={1000}
        >
          {(cars) ? (
            cars.map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                modelName={item.modelName}
                bodyType={item.bodyType}
                modelType={item.modelType}
                imageUrl={item.imageUrl}
                isActive={index === activeCardIndex}
              />
            ))
          ) : <p>Carregando</p>}
        </Carousel>
      ) : (
        <>
          {cars ? (
            <Carousel
              breakPoints={breakPoints}
              isRTL={false}
              showArrows={false}
              renderPagination={CustomPagination}
              itemsToScroll={1}
              onPrevStart={handlePaginationClick}
              onNextStart={handlePaginationClick}
            >
              {cars.map((item, index) => (
                <Card
                  key={item.id}
                  id={item.id}
                  modelName={item.modelName}
                  bodyType={item.bodyType}
                  modelType={item.modelType}
                  imageUrl={item.imageUrl}
                  isActive={index === activeCardIndex}
                />
              ))}
            </Carousel>
          ) : (
            <p>Carregando</p>
          )}
        </>
      )}
    </section>
  );
};
