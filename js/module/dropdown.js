export default function initDropdown() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown-menu]')   //importou o dropdown do HTML o lI que está segurando toda UL que faz o drop

  dropdownMenu.forEach((item) => {                                        //passou por cada linha que está dentro do dropdown, cada linha recebeu o nome de item
    const eventos = ['click', 'touchstart']                               //criou um array(eventos) com cada evento que vamos trabalhar [click e touch start]
    eventos.forEach((evento) =>{                                          //passou por cada evento dentro do array eventos [click e touch start]
      item.addEventListener(evento, handleClick, {capture: true})         //quando o item for clicado (evento[click ou touch start]) vai disparar a função handleClick
    })
  })
  function handleClick(event) {                                          // função handleClick vai receber o (evento[click ou touch start])
    event.preventDefault();                                              // vai prevenir o padrão para não mandar para o link Href que está no li do dropdown
    this.classList.toggle('ativo');                                     // vai adicionar a classe ativo ao dropdown(se ele já tiver vai retirar)
    outsideClick(this, ['touchstart', 'click'], () => {                 //após adicionar a classe vai chamar  a função outsideClick (this é o dropdownmeny, eventos, e vai e
      this.classList.remove('ativo')                                    //executar uma funçao que remove a classe ativo do dropdowm meu
    })
  }



  
  function outsideClick(elemento, eventos, callback) {                  //outsideClick(recebe (this-elemento= dropdownmenu), eventos ['touchstart' ou'click']
    const html = document.documentElement                               //recebeu todo o hmtl (será usado para saber se clicou fora do dropdownmenu)
    const outside = 'data-outside';                                     // referencia para setar o atributo data-outside="" 
    
    if(!elemento.hasAttribute(outside)){                                //se o dropdownmeu não contém o attributo 'data-outside'
      eventos.forEach(userEvent => {                                    //se não contem vai ler os eventos ['touchstart' ou'click'] cada evento está com o nome userEvent   
        html.addEventListener(userEvent, handleOutsideClick)            //vai adicionar ao html os eventos ['touchstart' ou'click'] e chamar a função  handleOutsideClick
      })
      elemento.setAttribute(outside,'')                                 //no dropdownmenu será adicionado o atributo 'data-outside'
    }  
    function handleOutsideClick(event) {                                //funca recebe os eventos que ocorreu 'touchstart' ou'click']
      if(!elemento.contains(event.target)){                             //o elemento clicado não foi o proprio menu clicado?
        elemento.removeAttribute(outside)                               //se não for ele remove o atributto outside
        eventos.forEach((userEvent) => {                                //vai percorrer a lista de eventos ['touchstart' ou'click']
          html.removeEventListener(userEvent, handleOutsideClick)       // vai remover os eventos do html e vai chamar a propria funcao para callback
        })
        callback();                                                     // se está tudo ok fim.
      }
    }
  }

}
