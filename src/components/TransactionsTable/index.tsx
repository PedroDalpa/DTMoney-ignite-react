import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Datas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dev</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>25/12/2001</td>
          </tr>
          <tr>
            <td>Dev</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>25/12/2001</td>
          </tr>
          <tr>
            <td>Dev</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>25/12/2001</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}