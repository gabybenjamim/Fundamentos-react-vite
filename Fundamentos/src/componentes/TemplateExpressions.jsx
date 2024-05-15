
const TemplateExpressions = () => {

// 4 - Criando uma variável
const nome = "Maria Gabrielly"


// 5 - Obejto
 const dados = {
  idade: 19, 
  profissao: "Estudante"

 }

  return (
    <div>
   <p>A soma é {4 + 9}</p>
   <h3>Boas-vindas {nome} </h3>
   <p>Vi aqui que voce tem {dados.idade} anos e é {dados.profissao} </p>
   </div>
  )
}

export default TemplateExpressions;