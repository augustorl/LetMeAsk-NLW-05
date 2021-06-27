import { useContext } from 'react';
import { Container } from './styles';
import { RiLightbulbFlashLine, RiLightbulbLine } from 'react-icons/ri';
import { ThemeContext } from '../../contexts/ThemeProvider';;

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
     {theme.name === 'light' ? (<p>Toggle Dark</p>) : (<p>Toggle Light</p>)}
     {theme.name === 'light' ? (
       <RiLightbulbFlashLine onClick={toggleTheme} size={26}/> 
     ) :
        <RiLightbulbLine onClick={toggleTheme} size={24}/>
     }
    </Container>
  )
}