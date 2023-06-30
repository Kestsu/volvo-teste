import React from 'react';
import styles from './footer.module.css';

export const Footer = () => (
    <footer className={styles.footerContainer}>
        <section className={styles.footerInfo}>
            <p>Cookies</p>
            <p>Legal</p>
            <p>Privacy</p>
            <p>Recalls</p>
            <p>Etiquetas de Segurança</p>
            <p>Ofertas</p>
        </section>
        <section className={styles.footerCopyright}>
            <p>
                Copyright © 2023 Volvo Car Corporation (ou suas afiliadas ou licenciadoras).
            </p>
        </section>
    </footer>
);

