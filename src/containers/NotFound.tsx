import React from 'react';
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer"


export const NotFound: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "100px"}}>
            <h1>404 - Page Not Found</h1>
            <p>{`The page you're looking for does not exist.`}</p>
            </div>
            <Footer />
        </div>
    );
}

