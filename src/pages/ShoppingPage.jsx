import { BookTable } from "../components/BookTable"
import { PaypalButton } from "../components/Paypal/PaypalButton"

 
export const ShoppingPage = () => {
    return (
        <>
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