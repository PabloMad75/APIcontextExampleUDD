
import './App.css'
import { UserState } from './context/UserState'
import { AppRouter } from './router/AppRouter'

function App() {
 

  return (
    <>
      <UserState>
        <AppRouter />
      </UserState>
    </>
  )
}

export default App
