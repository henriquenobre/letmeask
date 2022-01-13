import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

import '../style/auth.css'
import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'

export function Home() {

    const navigate = useNavigate()
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        navigate('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
            return
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Room does not exist')
            return
        }

        navigate(`/rooms/${roomCode}`)

    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={ilustrationImg} alt="ilustracao" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiêcia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="leteme" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIcon} alt="logo google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separetor">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input type="text"
                            placeholder='Digite o código da sala'
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type='submit'>Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}