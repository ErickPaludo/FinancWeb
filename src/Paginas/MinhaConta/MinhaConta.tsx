import './MinhaConta.css'
import TransacaoComp from "./Componentes/Transacoes";

export default function Contas() {
  return (
    <div className="contas-ctn-pai">
      <div className="contas-painel-sub">
        <div className="contas-ico-home">
          <div className="contas-icone"></div>
        </div>
      </div>

      <div className="contas-painel-inf">
        <div className="contas-painel-input">
          <div className="contas-painel">
            <>
              <TransacaoComp
                key={1}
                titulo="Pagamento de Luz"
                descricao="Conta mensal referente ao consumo residencial"
                tipo="Débito"
                dataRegistro="05/01/2024"
                dataVencimentos="10/01/2024"
                status={1}
              />

              <TransacaoComp
                key={2}
                titulo="Mensalidade Academia"
                descricao="Plano anual – débito recorrente"
                tipo="Débito"
                dataRegistro="01/01/2024"
                dataVencimentos="05/01/2024"
                status={0}
              />

              <TransacaoComp
                key={3}
                titulo="Salário"
                descricao="Pagamento referente ao mês anterior"
                tipo="Crédito"
                dataRegistro="30/12/2023"
                dataVencimentos="30/12/2023"
                status={1}
              />

              <TransacaoComp
                key={4}
                titulo="Assinatura Netflix"
                descricao="Renovação automática do plano padrão"
                tipo="Débito"
                dataRegistro="20/12/2023"
                dataVencimentos="20/12/2023"
                status={0}
              />

              <TransacaoComp
                key={5}
                titulo="Venda de Produto"
                descricao="Recebimento por venda no marketplace"
                tipo="Crédito"
                dataRegistro="15/12/2023"
                dataVencimentos="15/12/2023"
                status={1}
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
