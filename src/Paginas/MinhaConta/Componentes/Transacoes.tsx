import './Transacoes.css'

interface TransacoesProps {
  titulo: string;
  descricao: string;
  tipo: string;
  status: number;
  dataRegistro: string;
  dataVencimentos: string;
}

export default function Transacoes({ 
  titulo, 
  descricao,
  tipo, 
  status,
  dataRegistro,
  dataVencimentos,
}: TransacoesProps) {
  return (
  <div className="transacao-container">
  <div className="transacao-esquerda">
    <div
      className="transacao-status"
      style={{ backgroundColor: status === 1 ? "#33CD1F" : "#E1F010" }}
    ></div>

    <div className="transacao-info-principal">
      <div className="transacao-textos">
        <p className="transacao-titulo">{titulo}</p>
        <p className="transacao-descricao">{descricao}</p>
      </div>

      <p className="transacao-descricao">{dataVencimentos}</p>
    </div>
  </div>

  <div className="transacao-info-gerais">
    <div className="transacao-detalhes">
      <p className="transacao-descricao">{tipo}</p>
      <p className="transacao-titulo">R$ 2000</p>
      <p className="transacao-descricao">
        {status === 1 ? "Pago" : "Não pago"}
      </p>
    </div>

    <p className="transacao-descricao">{dataRegistro}</p>
  </div>
</div>

  );
}
