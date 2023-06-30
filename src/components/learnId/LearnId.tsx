import React, { useEffect, useState } from 'react';
import styles from './learnId.module.css';
import data from '../../../public/api/cars.json';
import Image from "next/image";
import { useRouter } from 'next/router';

interface LearnIdProps {
    id: string;
}

export const LearnId: React.FC<LearnIdProps> = ({ id }) => {
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

    const handleShopButtonClick = () => {
        router.push(`/shop/${id}`);
      };

    return (
        <section className={styles.learnIdContainer}>
            <Image className={styles.imageLearnCars} src={imageUrl} alt={modelName} width="700px" height="600px" />
            <div className={styles.infoLearnContainer}>
                <h4>{bodyType}</h4>
                <h1>{modelName}</h1>
                <h4>{modelType}</h4>
                <h3>Park Pilot Assist</h3>
                <p>Pode estacionar sozinho, fazendo a direção, aceleração e frenagem por você.</p>
                <h3>Soluções de armazenamento inteligentes</h3>
                <p>Soluções práticas de armazenamento e um porta-malas versátil adicionam conveniência e conforto.</p>
                <h2>R$ 99999999,99</h2>
                <button className={styles.cta} onClick={handleShopButtonClick}>
                    <span className={styles.hoverUnderlineAnimation}> Shop now </span>
                    <svg className={styles.svgLearnButton} viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};
