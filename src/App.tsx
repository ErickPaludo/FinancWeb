import './App.css'

function App() {

  return (
    <>
    <div className='login-ctn-pai'>
     <div className='login-painel-sub'>
        <div className='login-ico-home'>
          <div className='login-icone'></div>
        </div>
     </div>
       <div className='login-painel-inf'>
          <div className='login-painel-input'>
           <div className='login-painel'>

            <div className='login-input'>
              <p className='login-label'>Usuário</p>
              <input className='login-input-discreto' type='text'></input>
            </div>

            <div className='login-input'>
              <p className='login-label'>Senha</p>
              <input className='login-input-discreto' type='password'></input>
            </div>

            <div className='login-painel-check'>
              <input type="checkbox"/>
              <p className='login-label'>Exibir senha</p>
            </div>

            <button className='login-botao-entrar'>Entrar</button>
            <p className='login-label'>Ainda não possui uma conta?</p>

          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default App
