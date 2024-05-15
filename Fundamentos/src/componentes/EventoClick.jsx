
const EventoClick = () => {
 // 8 - FUnção com handleClick
 const handleClick = () => {
    console.log("handleCLick executou!")
 }

 // 9 - Função de Renderização
 const renderizando = (x) =>{
    if(x) {
        return <h3>Renderizando X</h3>
    } 
    else{
        return <h3>Renderizando Y</h3>
    }
 }

  return (
    <div>
    <div>
        <button onClick = {() => console.log("teste click")}>
         Clique aqui </button>
    </div>

    {/*Chamando função com handleClick */}
    <div>
        <button onClick = {handleClick}>Botão com função</button>
    </div>
     
    {/*RETORNANDO A FUNÇÃO COM RENDERIZAÇAÕ */}
    {renderizando(true)}
    {renderizando(false)}
    

    </div>
  )
}


export default EventoClick;