
interface CartaoContaProps {
  titulo: string;
  monetario?:boolean;
  ativo?:boolean;
  centraliza?:boolean;
}

export default function CadInputContas({titulo,monetario,ativo=true,centraliza}: CartaoContaProps) {
  
  return (
    <div
      className="cadcontas-input"
      style={{
        ...( !ativo && { backgroundColor: '#F4F1F1' } ),
        ...( centraliza && { textAlign: 'center', justifyContent: 'center' } )
      }}> 
        <p className='cadcontas-label'>{titulo}</p>
        <div className="cadcontas-label-input">
         {monetario &&(
            <p className='cadcontas-label cadcontas-monetario-label'>R$</p>
         )}
          {ativo && (
              <input className='cadcontas-input-discreto' style={{...(centraliza && { textAlign: 'center', justifyContent: 'center' } )}} 
              type={(monetario ? 'number' : 'text') }></input>
          )}
        </div>
    </div>
  );
}
