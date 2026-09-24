
const menu = document.querySelector('[data-menu]');
const links = document.querySelector('.links');
if(menu) menu.addEventListener('click',()=>links?.classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
