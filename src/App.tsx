import { Route,  BrowserRouter, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'

import { Home } from "./pages/Home";
import { Room } from './pages/Room';
import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from './pages/AdminRoom';
import { CustomThemeProvider } from './contexts/ThemeProvider';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />     
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
          <GlobalStyle />
        </AuthContextProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;