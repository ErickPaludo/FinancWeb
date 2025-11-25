import './CadContas.css'
import CadInputContas from './Componentes/CadInputContas';

export default function CadContas() {
  return <div className='cadcontas-ctn-pai'>
     <div className='cadcontas-painel-sub'>
        <div className='cadcontas-ico-home'>
          <div className='cadcontas-icone'></div>
        </div>
     </div>
       <div className='cadcontas-painel-inf'>
          <div className='cadcontas-painel-input'>
           <div className='cadcontas-painel'>
           <CadInputContas titulo='Teste'/>
           <CadInputContas titulo='Limite do Cartão' monetario={true}/>
           <CadInputContas titulo='Tipo de conta' ativo={false}/>
           <div className='cadcontas-painel-dias'>
             <CadInputContas titulo='Fechamento' centraliza={true}/>
             <CadInputContas titulo='Vencimento' centraliza={true}/>
           </div>

          </div>
           <div className='cadcontas-painel-botao-adicionar'>
          <button className='cadcontas-botao-adicionar'>Cadastrar</button>
         </div>
         </div>
        
       </div>
    </div>;
}
