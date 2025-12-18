import './Contas.css'
import CartaoConta from "./Componentes/CartaoComp";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';

export default function Contas() {
  const [contas, setContas] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:7147/api/Contas/retorna_contas',{
      method: "GET",
      headers:{
         "Content-Type": "application/json",
         "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImIwYjdlZDVmLTRkYTMtNGYwMC05YWM1LWE0ZGI1OTRmMzNkOCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImZhYmlvanVuaW9yQGV4YW1wbGUuY29tIiwianRpIjoiMGE0MWZmZmEtYWZiNi00MzJlLTgwMGEtZjFlN2MxZDU3ZGQ0IiwiZXhwIjoxNzY4MTQyNjM3LCJpc3MiOiJGaW5hbmMuQXBpIiwiYXVkIjoiRmluYW5jLlVJLkNsaWVudCJ9.sXg6-lo9qSUUb-7XMRuFokSfAtyc60J7d_hMd-Dwvxc`
      }
    })
    .then(res => res.json())
    .then(res => setContas(res))
  },[])


  return <div className='contas-ctn-pai'>
     <div className='contas-painel-sub'>
        <div className='contas-ico-home'>
          <div className='contas-icone'></div>
        </div>
     </div>
       <div className='contas-painel-inf'>
          <div className='contas-painel-input'>
           <div className='contas-painel'>
            {contas.map(conta => (
              <CartaoConta 
              key={conta.idConta} 
              titulo={conta.titulo} 
              tipo="Corrente" 
              vencimentos={`Ven ${conta.diaFechamento} | Pag ${conta.diaVencimento}`} 
              ativo={conta.status} 
              onClick={() => navigate('/MinhaConta')}/>
            ))}
            <CartaoConta titulo="Contas 2" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo={0} color='#df3131ff'/>
            <CartaoConta titulo="Contas 3" tipo="Corrente" vencimentos="Ven: 11 / Pag: 18" ativo={1}/> 
          </div>
           <div className='contas-painel-botao-adicionar'>
          <button className='contas-botao-adicionar' onClick={() => navigate('/CadastroContas')}>+</button>
         </div>
         </div>
        
       </div>
    </div>;
}
