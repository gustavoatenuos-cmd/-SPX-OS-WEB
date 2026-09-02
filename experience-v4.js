(()=>{
  const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const internalRoutes=new Set(['produto','solucoes','sobre','planos']);
  const route=(location.pathname.replace(/^\/+|\/+$/g,'')||'home');
  document.body.dataset.route=route;
  document.body.classList.add('v4-boot');

  const ready=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{
    document.body.classList.remove('v4-boot');
    document.body.classList.add('v4-ready');
  }));
  ready();

  /* Visual signature derived from the SPX triad: three signals, one reading. */
  const heroCopy=document.querySelector('.v3-hero-copy,.hero-copy-v3,.about-grid>div:first-child');
  if(heroCopy&&!heroCopy.querySelector('.spx-signal')){
    const signal=document.createElement('span');
    signal.className='spx-signal'+(heroCopy.closest('.about-hero,.dark-section')?' light':'');
    signal.setAttribute('aria-hidden','true');
    signal.innerHTML='<i></i><i></i><i></i>';
    const eyebrow=heroCopy.querySelector('.eyebrow');
    if(eyebrow) eyebrow.insertAdjacentElement('afterend',signal); else heroCopy.prepend(signal);
  }

  /* Route awareness in the global navigation. */
  document.querySelectorAll('.main-nav>a.nav-link').forEach(a=>{
    const slug=new URL(a.href,location.href).pathname.replace(/^\/+|\/+$/g,'');
    if(slug===route) a.setAttribute('aria-current','page');
  });
  document.querySelectorAll('.nav-dropdown').forEach(drop=>{
    const hasCurrent=[...drop.querySelectorAll('a')].some(a=>new URL(a.href,location.href).pathname.replace(/^\/+|\/+$/g,'')===route);
    if(hasCurrent) drop.querySelector('.nav-trigger')?.classList.add('current');
  });

  /* Reserve image geometry and expose a graceful loading state. */
  const prepareImages=()=>document.querySelectorAll('.product-shot img').forEach(img=>{
    const frame=img.closest('.product-shot');
    if(!img.getAttribute('width')) img.setAttribute('width','1672');
    if(!img.getAttribute('height')) img.setAttribute('height','941');
    img.style.aspectRatio='1672 / 941';
    if(img.complete){frame?.classList.add('v4-loaded');return;}
    frame?.classList.add('v4-loading');
    img.addEventListener('load',()=>{frame?.classList.remove('v4-loading');frame?.classList.add('v4-loaded')},{once:true});
    img.addEventListener('error',()=>frame?.classList.remove('v4-loading'),{once:true});
  });
  prepareImages();

  /* Reading progress — functional feedback on long product pages. */
  const progress=document.createElement('div');
  progress.className='v4-progress';
  progress.innerHTML='<span></span>';
  document.body.appendChild(progress);
  const progressBar=progress.firstElementChild;
  let scrollTick=false;
  const updateProgress=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    progressBar.style.transform=`scaleX(${Math.min(1,scrollY/max)})`;
    scrollTick=false;
  };
  addEventListener('scroll',()=>{if(!scrollTick){scrollTick=true;requestAnimationFrame(updateProgress)}},{passive:true});
  updateProgress();

  /* Context rail: a professional product-documentation pattern, not another card grid. */
  const buildRail=()=>{
    if(innerWidth<1240||!['produto','solucoes','sobre','planos'].includes(route)) return;
    const candidates=[...document.querySelectorAll('#app [id]')].filter(el=>{
      if(!el.id||el.id==='app') return false;
      const heading=el.querySelector('h2,h3');
      return !!heading;
    }).slice(0,6);
    if(candidates.length<2) return;
    const rail=document.createElement('nav');
    rail.className='v4-route-rail';
    rail.setAttribute('aria-label','Nesta página');
    candidates.forEach((section,index)=>{
      const a=document.createElement('a');
      a.href=`#${section.id}`;
      const eyebrow=section.querySelector('.eyebrow');
      const heading=section.querySelector('h2,h3');
      const raw=(eyebrow?.textContent||heading?.textContent||`Seção ${index+1}`).trim();
      a.textContent=raw.length>20?raw.slice(0,20)+'…':raw;
      if(index===0) a.classList.add('active');
      a.addEventListener('click',e=>{
        e.preventDefault();
        section.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
        history.replaceState(history.state,'',`${location.pathname}#${section.id}`);
      });
      rail.appendChild(a);
    });
    document.body.appendChild(rail);
    const links=[...rail.querySelectorAll('a')];
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible) return;
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${visible.target.id}`));
    },{rootMargin:'-25% 0px -55% 0px',threshold:[0,.1,.35,.6]});
    candidates.forEach(el=>observer.observe(el));
  };
  buildRail();

  /* Once-only entrances. Existing product loops remain, but the page itself stops feeling templated. */
  const enterTargets=[...document.querySelectorAll('.v3-section-head,.v3-feature-copy,.v3-stage,.case-head,.case-card,.pricing-grid article,.origin-grid,.manifesto-grid,.plan-preview-grid article')];
  enterTargets.forEach((el,i)=>{el.classList.add('v4-enter');el.dataset.v4Delay=String(i%4)});
  if(reduceMotion){enterTargets.forEach(el=>el.classList.add('v4-shown'))}
  else{
    const enterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('v4-shown');enterObserver.unobserve(entry.target)}
    }),{rootMargin:'0px 0px -9% 0px',threshold:.08});
    enterTargets.forEach(el=>enterObserver.observe(el));
  }

  /* Progressive prefetch. We prefetch the real shell route, not the redirect entrypoint. */
  const prefetched=new Set();
  const canonicalShell=href=>{
    const u=new URL(href,location.href);
    if(u.origin!==location.origin) return null;
    const slug=u.pathname.replace(/^\/+|\/+$/g,'');
    if(!internalRoutes.has(slug)) return null;
    return `${location.origin}/?route=${slug}`;
  };
  const prefetch=href=>{
    const target=canonicalShell(href);
    if(!target||prefetched.has(target)) return;
    prefetched.add(target);
    const link=document.createElement('link');
    link.rel='prefetch';
    link.as='document';
    link.href=target;
    document.head.appendChild(link);
  };
  document.addEventListener('pointerover',e=>{
    const a=e.target.closest?.('a[href]');
    if(a) prefetch(a.href);
  },{passive:true});
  document.addEventListener('touchstart',e=>{
    const a=e.target.closest?.('a[href]');
    if(a) prefetch(a.href);
  },{passive:true});

  /* Speculation Rules where available; unsupported browsers simply ignore this. */
  try{
    if(HTMLScriptElement.supports?.('speculationrules')){
      const rules=document.createElement('script');
      rules.type='speculationrules';
      rules.textContent=JSON.stringify({prefetch:[{source:'list',urls:['/?route=produto','/?route=solucoes','/?route=sobre','/?route=planos'],eagerness:'moderate'}]});
      document.head.appendChild(rules);
    }
  }catch(_){/* progressive enhancement */}

  /* Faster route changes: use the full shell directly, preserve the pretty URL after render. */
  document.addEventListener('click',e=>{
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
    const a=e.target.closest?.('a[href]');
    if(!a||a.target==='_blank'||a.hasAttribute('download')) return;
    const u=new URL(a.href,location.href);
    if(u.origin!==location.origin) return;
    const slug=u.pathname.replace(/^\/+|\/+$/g,'');
    if(!internalRoutes.has(slug)) return;
    e.preventDefault();
    if(u.hash) sessionStorage.setItem('spx-v4-anchor',u.hash); else sessionStorage.removeItem('spx-v4-anchor');
    const destination=`/?route=${slug}`;
    if(reduceMotion){location.assign(destination);return;}
    document.body.classList.add('v4-leaving');
    setTimeout(()=>location.assign(destination),120);
  });

  /* Restore deep links after app.js normalizes ?route= to the clean pathname. */
  const pendingAnchor=sessionStorage.getItem('spx-v4-anchor');
  if(pendingAnchor){
    sessionStorage.removeItem('spx-v4-anchor');
    requestAnimationFrame(()=>setTimeout(()=>{
      const target=document.querySelector(pendingAnchor);
      if(target) target.scrollIntoView({behavior:'auto',block:'start'});
    },40));
  }

  /* Pause pure CSS ambience outside the viewport / background tab. */
  const visibility=()=>document.documentElement.classList.toggle('v4-tab-hidden',document.hidden);
  document.addEventListener('visibilitychange',visibility);
  visibility();

  /* Small human detail: pointer intent gently reacts in the SPX signature, never the whole page. */
  if(!reduceMotion&&matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.spx-signal').forEach(signal=>{
      signal.addEventListener('pointermove',e=>{
        const r=signal.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        signal.querySelectorAll('i').forEach((line,i)=>line.animate(
          [{transform:'scaleX(1)'},{transform:`scaleX(${1+x*(i+1)*.08})`}],
          {duration:220,fill:'forwards',easing:'ease-out'}
        ));
      });
      signal.addEventListener('pointerleave',()=>signal.querySelectorAll('i').forEach(line=>line.animate([{transform:line.style.transform||'scaleX(1)'},{transform:'scaleX(1)'}],{duration:260,fill:'forwards'})));
    });
  }
})();
