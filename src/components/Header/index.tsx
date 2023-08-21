import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Content, Container } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
       
      </Content>
    </Container>
  );
}
