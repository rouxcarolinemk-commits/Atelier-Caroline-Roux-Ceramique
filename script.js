
const header=document.querySelector('.topbar');
const btn=document.querySelector('.menu-button');
const nav=document.querySelector('.topbar nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));
btn.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  btn.setAttribute('aria-expanded',open?'true':'false');
});
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
