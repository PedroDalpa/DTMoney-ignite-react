import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));

  }, [])
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
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>25/12/2001</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.100</td>
            <td>Casa</td>
            <td>10/12/2001</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}