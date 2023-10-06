
import './App.css'
import { BookState } from './context/BookContext/BookState'
import { UserState } from './context/UserState'
import { AppRouter } from './router/AppRouter'

function App() {
 

  return (
    <>
      <UserState>
        <BookState>
          <AppRouter />
        </BookState>
      </UserState>
    </>
  )
}

export default App
