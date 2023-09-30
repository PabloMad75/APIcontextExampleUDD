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
        <div className="container">
          <div className="row">
            <div className="col">
              <PaypalButton invoice={'libro 1, libro 2'} totalValue={'25.99'}/>
            </div>
          </div>
        </div>

    </>
  )
}
