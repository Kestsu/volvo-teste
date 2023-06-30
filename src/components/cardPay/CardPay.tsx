import React, { useState, ChangeEvent } from 'react';
import styles from './cardPay.module.css';

interface CardPayProps {
  onSubmit: (cardData: CardData) => void;
}

export interface CardData {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export const CardPay: React.FC<CardPayProps> = ({ onSubmit }) => {
  const [cardData, setCardData] = useState<CardData>({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCardData((prevCardData) => ({
      ...prevCardData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(cardData);
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome no Cartão"
        value={cardData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="cardNumber"
        placeholder="Número do Cartão"
        value={cardData.cardNumber}
        onChange={handleChange}
        required
      />

      <div className={styles.cardFormRow}>
        <input
          type="text"
          name="expirationDate"
          placeholder="Data de Expiração (MM/AA)"
          value={cardData.expirationDate}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={cardData.cvv}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Cadastrar Cartão</button>
    </form>
  );
};

