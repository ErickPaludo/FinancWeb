
interface CartaoContaProps {
  titulo: string;
  tipo: string;
  vencimentos: string;
  ativo: boolean;
  color?: string;
}

export default function CartaoComp({ titulo, tipo, vencimentos,ativo,color}: CartaoContaProps) {
  if (!ativo) return (
    <div className='contas-cartao' style={{ backgroundColor: "#858387" }}>
      <div className='contas-cartao-interno-sup riscado'>
        <p className='contas-cartao-label riscado'>{titulo}</p>
        <p className='contas-cartao-label bold riscado'>{tipo}</p>
      </div>

      <p className='contas-cartao-label riscado'>{vencimentos}</p>
    </div>
  );

  return (
    <div className='contas-cartao'   style={color ? { backgroundColor: color } : { backgroundColor: "#820AD1" }}>
      <div className='contas-cartao-interno-sup'>
        <p className='contas-cartao-label'>{titulo}</p>
        <p className='contas-cartao-label bold'>{tipo}</p>
      </div>

      <p className='contas-cartao-label'>{vencimentos}</p>
    </div>
  );
}
