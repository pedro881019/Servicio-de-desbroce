(function(){
  const t=document.querySelector('[data-theme-toggle]');
  const r=document.documentElement;
  let d=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  const paint=()=>t.innerHTML=d==='dark'?'☀':'☾';
  r.setAttribute('data-theme',d);
  paint();
  t.addEventListener('click',()=>{
    d=d==='dark'?'light':'dark';
    r.setAttribute('data-theme',d);
    paint();
  });
})();
