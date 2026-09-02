(()=>{
  const root=document.documentElement;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('motion-ready');

  const header=document.querySelector('.site-header');
  const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>10);
  updateHeader();
  window.addEventListener('scroll',updateHeader,{passive:true});

  const desktop=window.matchMedia('(min-width:1001px)');
  const dropdowns=[...document.querySelectorAll('.nav-dropdown')];
  dropdowns.forEach(drop=>{
    let closeTimer;
    const open=()=>{
      if(!desktop.matches)return;
      clearTimeout(closeTimer);
      dropdowns.forEach(other=>{if(other!==drop)other.classList.remove('hover-open')});
      drop.classList.add('hover-open');
      drop.querySelector('.nav-trigger')?.setAttribute('aria-expanded','true');
    };
    const close=()=>{
      if(!desktop.matches)return;
      clearTimeout(closeTimer);
      closeTimer=setTimeout(()=>{
        drop.classList.remove('hover-open');
        if(!drop.classList.contains('open'))drop.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');
      },140);
    };
    drop.addEventListener('mouseenter',open);
    drop.addEventListener('mouseleave',close);
    drop.addEventListener('focusin',open);
    drop.addEventListener('focusout',e=>{if(!drop.contains(e.relatedTarget))close()});
  });

  const hero=document.querySelector('.hero-copy-v3');
  if(hero&&!reduced)requestAnimationFrame(()=>hero.classList.add('hero-enter'));
  else hero?.classList.add('hero-enter');

  const targets=[
    ...document.querySelectorAll('#app > .section, #app > .page-hero, #app > .about-hero'),
    ...document.querySelectorAll('.product-shot'),
    ...document.querySelectorAll('.capability-links > a'),
    ...document.querySelectorAll('.solution-stack > a'),
    ...document.querySelectorAll('.case-card'),
    ...document.querySelectorAll('.pricing-grid > article'),
    ...document.querySelectorAll('.plan-preview-grid > article')
  ];

  const unique=[...new Set(targets)].filter(el=>!el.closest('.hero-v3'));
  unique.forEach((el,index)=>{
    el.classList.add('reveal');
    if(el.matches('.product-shot')&&index%2)el.classList.add('reveal-right');
    if(el.matches('.capability-links > a,.solution-stack > a,.pricing-grid > article,.plan-preview-grid > article')){
      const siblings=[...el.parentElement.children].indexOf(el);
      if(siblings>0)el.classList.add(`reveal-delay-${Math.min(siblings,3)}`);
    }
  });

  if(reduced||!('IntersectionObserver' in window)){
    unique.forEach(el=>el.classList.add('is-visible'));
  }else{
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:'0px 0px -6% 0px'});
    unique.forEach(el=>observer.observe(el));
  }

  document.querySelectorAll('.product-shot img').forEach(img=>{
    const ready=()=>img.closest('.product-shot')?.classList.add('image-ready');
    if(img.complete)ready(); else img.addEventListener('load',ready,{once:true});
  });

  document.addEventListener('click',e=>{
    const anchor=e.target.closest('a[href*="#"]');
    if(!anchor)return;
    const url=new URL(anchor.href,location.href);
    if(url.origin!==location.origin||url.pathname!==location.pathname||!url.hash)return;
    const target=document.querySelector(url.hash);
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});
    history.replaceState({},'',url.pathname+url.hash);
  });
})();
