function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma série.</p>"
      return 
    }
   
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
    
  
    // Itera sobre cada item (dado) na lista de dados (assumindo que 'dados' é um array).
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
       
      //Se no dado titulo includes camposPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
        
      // Constrói uma string HTML para cada resultado, formatando-a com as informações do dado.
      // Cada resultado será um elemento <div> com as classes e conteúdos correspondentes.
       
    }

     if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
     }
    // Atribui a string com todos os resultados ao conteúdo HTML da seção.
    // Isso substituirá o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados;
  }

        