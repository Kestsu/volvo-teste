import React, { useEffect, useState } from 'react';
import styles from './shopId.module.css';
import data from '../../../public/api/cars.json';
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormCheckout } from '../formCheckout/FormCheckout'
import { CardPay, CardData } from '../cardPay/CardPay'

interface ShopIdProps {
    id: string;
}

export const ShopId: React.FC<ShopIdProps> = ({ id }) => {
    const [bodyType, setBodyType] = useState("");
    const [modelName, setmodelName] = useState("");
    const [modelType, setmodelType] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const router = useRouter();

    useEffect(() => {
        const carregarDados = () => {
            try {
                const filterCar = data.filter((obj) => obj.id === id);
                setBodyType(filterCar[0].bodyType);
                setmodelName(filterCar[0].modelName);
                setmodelType(filterCar[0].modelType);
                setimageUrl(filterCar[0].imageUrl);
            } catch (erro) {
                console.log(erro);
            }
        };

        carregarDados();
    }, [id]);

    const handleCardSubmit = (cardData: CardData) => {
        console.log(cardData);
    };

    const handlePay = (): void => {
        alert("COMPRADO!");
    };


    return (
        <section className={styles.shopIdContainer}>
            <h1 className={styles.titleShop}>Revise seu Produtos</h1>
            <div className={styles.shopIdSubContainer}>
                <div className={styles.infoShopContainer}>
                    <Image src={imageUrl} alt={modelName} width="300px" height="250px" />
                    <div className={styles.infoCarShop}>
                        <h4>{bodyType}</h4>
                        <h1>{modelName}</h1>
                        <h4>{modelType}</h4>
                        <h2>R$ 99999999,99</h2>
                    </div>
                </div>
                <CardPay onSubmit={handleCardSubmit} />
            </div>
            <FormCheckout></FormCheckout>
            <button className={styles.cta} onClick={handlePay}>
                    <span className={styles.hoverUnderlineAnimation}> Finalizar a compra</span>
                    <svg className={styles.svgLearnButton} viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                </button>
        </section>
    );
};
