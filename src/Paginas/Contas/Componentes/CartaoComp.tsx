import React from "react";

interface CartaoContaProps {
  titulo: string;
  tipo: string;
  vencimentos: string;
  ativo: boolean;
  color?: string;
}

export default function CartaoComp({ titulo, tipo, vencimentos,ativo,color}: CartaoContaProps) {
  if (!ativo) return (
    <div className='cadcontas-cartao' style={{ backgroundColor: "#858387" }}>
      <div className='cadcontas-cartao-interno-sup riscado'>
        <p className='cadcontas-cartao-label riscado'>{titulo}</p>
        <p className='cadcontas-cartao-label bold riscado'>{tipo}</p>
      </div>

      <p className='cadcontas-cartao-label riscado'>{vencimentos}</p>
    </div>
  );

  return (
    <div className='cadcontas-cartao'   style={color ? { backgroundColor: color } : { backgroundColor: "#820AD1" }}>
      <div className='cadcontas-cartao-interno-sup'>
        <p className='cadcontas-cartao-label'>{titulo}</p>
        <p className='cadcontas-cartao-label bold'>{tipo}</p>
      </div>

      <p className='cadcontas-cartao-label'>{vencimentos}</p>
    </div>
  );
}
