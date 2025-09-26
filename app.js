// Tahun otomatis di footer
document.getElementById('y').textContent = new Date().getFullYear();

// Drawer mobile
const hamb = document.getElementById('hamb');
const drawer = document.getElementById('drawer');
const closeBtn = document.getElementById('closeDrawer');

function openDrawer(){
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
}
window.closeDrawer = closeDrawer;

if (hamb) hamb.addEventListener('click', openDrawer);
if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
if (drawer) {
  drawer.addEventListener('click', (e)=>{
    if(e.target === drawer) closeDrawer();
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Smooth anchor + focus for a11y
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      setTimeout(()=>{
        el.setAttribute('tabindex','-1');
        el.focus({preventScroll:true});
        el.removeAttribute('tabindex');
      }, 420);
    }
  });
});
