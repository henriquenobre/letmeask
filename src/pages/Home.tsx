import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import '../style/auth.css'

export function Home() {
    return(
        <div id='page-auth'>
            <aside>
                <img src={ilustrationImg} alt="ilustracao" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiêcia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="leteme" />
                    <button>
                        <img src={googleIcon} alt="logo google" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form >
                        <input type="text" placeholder='Digite o código da sala' />
                        <button type='submit'>Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}