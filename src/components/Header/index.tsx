import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeadersProps {
  handleOpenNewTransactionModal: () => void
}

export function Header({ handleOpenNewTransactionModal }: HeadersProps) {

  return (
    <Container>
      <Content>

        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}