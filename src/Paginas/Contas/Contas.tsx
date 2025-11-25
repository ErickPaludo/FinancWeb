import './Contas.css'
import CartaoConta from "./Componentes/CartaoComp";

export default function Contas() {
  return <div className='cadcontas-ctn-pai'>
     <div className='cadcontas-painel-sub'>
        <div className='cadcontas-ico-home'>
          <div className='cadcontas-icone'></div>
        </div>
     </div>
       <div className='cadcontas-painel-inf'>
          <div className='cadcontas-painel-input'>
           <div className='cadcontas-painel'>
            <CartaoConta titulo="Contas 1" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo />
            <CartaoConta titulo="Contas 2" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo color='#df3131ff'/>
            <CartaoConta titulo="Contas 3" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo={false}/>
          </div>
           <div className='cadcontas-painel-botao-adicionar'>
          <button className='cadcontas-botao-adicionar'>+</button>
         </div>
         </div>
        
       </div>
    </div>;
}
