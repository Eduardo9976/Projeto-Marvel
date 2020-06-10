export default function initContentTab(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li') //1 lista lateral
  const tabcontent = document.querySelectorAll('.js-tabcontent')// 1 section com o conteudo

  if(tabMenu.length && tabcontent.length){  //7 verificacao para saber se existe
    tabcontent[0].classList.add('ativo') //6 primeiro elemento sempre ativo


    function activeTab(index) {
      tabcontent.forEach((section) => { //3 remover primeiro o ativo de todas
        section.classList.remove('ativo') 
      })
      tabcontent[index].classList.add('ativo') //2 adicionar ativo na section com o conteúdo
    }  

    //4 adicionar evento de click
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {  // 5 preciso criar com essa function dessa forma para conseguir usar o index
        activeTab(index) //está passando o argumento index para minha funcao lá em cima
      })
    })
  }
}