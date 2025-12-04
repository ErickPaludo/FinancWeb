import './Contas.css'
import CartaoConta from "./Componentes/CartaoComp";
import { useNavigate } from "react-router-dom";

export default function Contas() {
  const navigate = useNavigate();


  return <div className='contas-ctn-pai'>
     <div className='contas-painel-sub'>
        <div className='contas-ico-home'>
          <div className='contas-icone'></div>
        </div>
     </div>
       <div className='contas-painel-inf'>
          <div className='contas-painel-input'>
           <div className='contas-painel'>
            <CartaoConta titulo="Contas 1" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo onClick={() => navigate('/MinhaConta')}/>
            <CartaoConta titulo="Contas 2" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo color='#df3131ff'/>
            <CartaoConta titulo="Contas 3" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo={false}/>
          </div>
           <div className='contas-painel-botao-adicionar'>
          <button className='contas-botao-adicionar' onClick={() => navigate('/CadastroContas')}>+</button>
         </div>
         </div>
        
       </div>
    </div>;
}
