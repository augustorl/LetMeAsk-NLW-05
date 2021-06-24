import { Route,  BrowserRouter } from 'react-router-dom'

import { Home } from "./pages/Home";

import { AuthContextProvider } from './contexts/AuthContext'
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;