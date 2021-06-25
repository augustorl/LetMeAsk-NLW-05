import { Route,  BrowserRouter, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'

import { Home } from "./pages/Home";
import { CustomThemeProvider } from './contexts/ThemeProvider';
import { GlobalStyle } from './styles/GlobalStyles';
import { NewRoom } from './pages/Rooms/NewRoom';
import { Room } from './pages/Rooms/Room';
import { AdminRoom } from './pages/Rooms/AdminRoom';

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