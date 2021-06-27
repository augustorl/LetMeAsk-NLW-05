import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useContext, useState } from 'react'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import { Container, Content } from '../Home/styles';
import { database } from '../../services/firebase';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import darkLogoImg from '../../assets/images/dark-theme-logo.svg'

import { ToggleThemeButton } from '../../components/ToggleThemeButton';
import { ThemeContext } from '../../contexts/ThemeProvider';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()

  const [newRoom, setNewRoom] = useState('')
  const { theme } = useContext(ThemeContext);
  
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>
          Tire as dúvidas da sua audiência em tempo-real
        </p>
      </aside>

      <main>
        <Content>
          <img src={theme.name === 'light' ? logoImg : darkLogoImg} alt="Letmeask" />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </Content>
      </main>
      <ToggleThemeButton/>
    </Container>
  )
}