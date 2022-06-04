import React from "react";
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render(){
         return(
            <div>
             { conteudos.map((currentValue)=>(
                <div key={currentValue.conteudo} className="card">
                <h4>{`O conteudo é: ${currentValue.conteudo}`}</h4>
                <p>{`status: ${currentValue.status}`}</p>
                <p>{`bloco: ${currentValue.bloco}`}</p>
                </div>
             ))}
            </div> 
         )
    }
}

export default Content