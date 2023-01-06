//MOBILE MENU
humBtn=document.querySelector("#mobile_menu_links")
mobile_menu=document.querySelector('#mobile_nemu')
humBtn_about=document.querySelector("#mobile_menu_links_1")
humBtn.addEventListener('click',()=>{
    document.querySelector('#hamburger').classList.toggle('hidden');
    document.querySelector('#x_icon').classList.toggle('hidden');
    document.querySelector("#mobile_nemu").classList.toggle('displayhiddenNav');
})

mobile_menu.addEventListener('click', () => {
    if (mobile_menu.classList.contains('displayhiddenNav')) {
        document.querySelector('#hamburger').classList.remove('hidden');
        document.querySelector('#x_icon').classList.add('hidden');
        mobile_menu.classList.remove('displayhiddenNav');
    }
  });

  humBtn_about.addEventListener('click',()=>{
    document.querySelector('#hamburger_1').classList.toggle('hidden');
    document.querySelector('#x_icon_1').classList.toggle('hidden');
    document.querySelector("#mobile_nemu_1").classList.toggle('displayhiddenNav');
})

