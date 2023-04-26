import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {

  try {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    await clienteService.criaCliente(nome, email)
    window.location.href = '../telas/cadastro_concluido.html'

  }
  catch {
    console.log(erro);
    window.location.href = '../telas/erro.html';
  }

})


/* const render = async () =>{
  try{
      const listaClientes = await clienteService.listaClientes();

      listaClientes.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
  })
  }
 catch(erro){
      console.log(erro);
      window.location.href = '../telas/erro.html';
 }
} */