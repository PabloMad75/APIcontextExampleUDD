import { BookTable } from "../components/BookTable"
import { Headers } from "../components/Headers"
import { PaypalButton } from "../components/Paypal/PaypalButton"
import { UserList } from "../components/UserList"



export const HomePage = () => {
  return (
    <>
        <h1>Bievenido al Home de nuestra App</h1>
        <Headers />  
        <UserList />
        <BookTable />
        <PaypalButton invoice={'libro 1'} totalValue={'25.99'}/>

    </>
  )
}
