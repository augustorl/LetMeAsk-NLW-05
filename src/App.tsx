import { Route,  BrowserRouter } from 'react-router-dom'

import { Home } from "./pages/Home";

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;