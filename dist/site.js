const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
function closeMenu(){ links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'; }
menu.addEventListener('click',()=>{ const open=menu.getAttribute('aria-expanded')!=='true'; menu.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);menu.textContent=open?'Close':'Menu'; });
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
