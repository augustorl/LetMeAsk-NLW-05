import { useHistory } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import darkLogoImg from '../../assets/images/dark-theme-logo.svg'

import googleIconImg from '../../assets/images/google-icon.svg'
import { FormEvent, useState } from 'react';
import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Button } from '../../components/Button';
import { useContext } from 'react';
import { ToggleThemeButton } from '../../components/ToggleThemeButton';
import { ThemeContext } from '../../contexts/ThemeProvider';

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  const { theme } = useContext(ThemeContext);
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return
    }

    history.push(`/rooms/${roomCode}`);
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </Content>
      </main>
      <ToggleThemeButton/>
    </Container>
  )
}