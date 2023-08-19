import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

export function Dashboard () {
  return (
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  )
}