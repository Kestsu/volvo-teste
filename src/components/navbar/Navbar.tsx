import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from "./navbar.module.css"
import VolvoIcon from "../../../public/images/logo-volvo.png";
import Menu from "../../../public/images/menu.png"
import Lupa from "../../../public/images/lupa.png";
import { useHistory } from "react-router-dom";

export const Navbar: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    const handleClickOutsideForm = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setShowMenu(false);
        }
    };

    const handleServices = () => {
        setShowModal(true);
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Impede o evento de clique da div modal de propagar para o fundo escurecido
    };

    const handleOverlayClick = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutsideForm);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideForm);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideForm);
        };
    }, [showMenu]);

    const handleAgendar = (): void => {
        alert("AGENDADO!");
    };

    const handleComprar = (): void => {
        alert("Em Andamento a rota!");
    };
    
    return (
        <nav>
            {showModal && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={styles.modal} onClick={handleModalClick}>
                        <form className={styles.formService}>
                            <div className={styles.formServiceTitle}>Agende Seu Serviço</div>
                            <input type="text" placeholder="Seu email" className={styles.formServiceInput}/>
                                <textarea placeholder="Qual o problema?"></textarea>
                                <button onClick={handleAgendar}>Enviar</button>
                        </form>
                    </div>
                </div>
            )}
            <section className={styles.navbar}>
                <Image style={{cursor: 'pointer'}} onClick={() => history.push("/")} width={"100px"} height={"30px"} src={VolvoIcon} alt="Volvo-icon" />

                <nav className={styles.buttonNav}>
                    <button type="button" onClick={() => history.push("/")}>Veículos</button>
                    <button type="button" onClick={handleComprar}>Comprar</button>
                    <button type="button" onClick={handleServices}>Serviços</button>
                </nav>
                <div className={styles.search}>
                    <input placeholder="Type to search..." className="input" name="text" type="text" />
                    <button type="button">
                        <Image className={styles.searchIcon} width={"25px"} height={"20px"} src={Lupa} alt="Lupa-icon" />
                    </button>
                </div>
                <div className={styles.mobileMenu}>
                    <button onClick={handleClick}>
                        <Image className={styles.iconMenu} src={Menu} width={"40px"} height={"40px"} alt="menu" />
                    </button>
                </div>
                {showMenu && (
                    <>
                        <div className={styles.menuOverlay} />
                        <section ref={menuRef} className={`${styles.navbarResponse} ${styles.show}`}>
                            <ul className={styles.optionsMenu}>
                                <li className={styles.navItem}>
                                    <button type="button" className={styles.buttonNavMenu}>Veículos</button>

                                </li>
                                <li className={styles.navItem}>
                                    <button type="button" className={styles.buttonNavMenu}>Comprar</button>
                                </li>
                                <li className={styles.navItem}>
                                    <button type="button" onClick={handleServices} className={styles.buttonNavMenu}>Serviços</button>
                                </li>
                            </ul>
                        </section>
                    </>
                )}
            </section>
        </nav>
    )
}
