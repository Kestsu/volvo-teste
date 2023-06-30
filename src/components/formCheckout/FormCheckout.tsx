import React, { useState, ChangeEvent } from "react";
import styles from './formCheckout.module.css'

export const FormCheckout: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    nome: "",
    cpf: "",
    email: "",
    tel: "",
    cep: "",
    endereco: "",
    complemento: "",
    numero: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };
  return (
    <div className={styles.containerInputs}>
      <input
        data-testid="checkout-fullname"
        placeholder="Nome Completo"
        type="text"
        name="nome"
        value={userInfo.nome}
        onChange={handleChange}
      />

      <input
        data-testid="checkout-cpf"
        placeholder="CPF"
        type="text"
        name="cpf"
        value={userInfo.cpf}
        onChange={handleChange}
      />

      <input
        data-testid="checkout-email"
        placeholder="E-mail"
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
      />

      <input
        data-testid="checkout-phone"
        placeholder="Telefone"
        type="text"
        name="tel"
        value={userInfo.tel}
        onChange={handleChange}
      />

      <input
        data-testid="checkout-cep"
        placeholder="CEP"
        type="text"
        name="cep"
        value={userInfo.cep}
        onChange={handleChange}
      />

      <input
        data-testid="checkout-address"
        placeholder="Endereço"
        type="text"
        name="endereco"
        value={userInfo.endereco}
        onChange={handleChange}
      />

      <input
        placeholder="Complemento"
        type="text"
        name="complemento"
        value={userInfo.complemento}
        onChange={handleChange}
      />

      <input
        placeholder="Número"
        type="text"
        name="numero"
        value={userInfo.numero}
        onChange={handleChange}
      />

      <input
        placeholder="Cidade"
        type="text"
        name="cidade"
        value={userInfo.cidade}
        onChange={handleChange}
      />
      <select
        id="estado"
        name="estado"
        value={userInfo.estado}
        onChange={handleChange}
      >
        <option value="" disabled>
          Estado
        </option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </div>
  );
};

