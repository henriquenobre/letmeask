import logoImg from '../assets/images/logo.svg'

export function Room () {
    return(
        <div id="page-room">
        <header>
          <div className="content">
            <img src={logoImg} alt="Letmeask" />
            <RoomCode code={roomId} />
          </div>
        </header>
  
        <main>
          <div className="room-title">
            <h1>Sala {title}</h1>
            { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
          </div>
  
          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="O que você quer perguntar?"
              onChange={event => setNewQuestion(event.target.value)}
              value={newQuestion}
            />
  
            <div className="form-footer">
              { user ? (
                <div className="user-info">
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              ) : (
                <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
              ) }
              <Button type="submit" disabled={!user}>Enviar pergunta</Button>
            </div>
          </form>
  
          {JSON.stringify(questions)}
        </main>
      </div>
    )
}