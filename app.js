const LOGIN='https://www.spxos.com.br/entrar';

const ASSETS={
  hoje:'https://i.imgur.com/X2CZmwp.png',
  conversas:'https://i.imgur.com/Zn3UeSG.png',
  jornada:'https://i.imgur.com/JMlzJcx.png',
  configuracoes:'https://i.imgur.com/fsdZG1P.png',
  desempenho:'https://i.imgur.com/RVcNuPf.png'
};

const modules={
  crm:{label:'CRM Comercial',img:ASSETS.jornada,title:'O pipeline deixa de ser uma lista e passa a orientar a operação.',desc:'Cada oportunidade reúne etapa, origem, unidade, procedimento, responsável, potencial financeiro e próxima ação. O time enxerga o que precisa avançar sem reconstruir contexto.',facts:[['412','oportunidades recebidas'],['R$ 184 mil','valor fechado no período']],items:['Jornada da entrada ao fechamento','Potencial financeiro por oportunidade','Filtros por unidade, origem e responsável','Próxima ação visível para cada lead']},
  conversas:{label:'Conversas',img:ASSETS.conversas,title:'Atendimento e contexto comercial na mesma tela.',desc:'O WhatsApp deixa de funcionar como uma caixa de entrada isolada. Etapa, procedimento, responsável, agendamento, orçamento e histórico acompanham a conversa.',facts:[['1 lugar','para conversa e contexto'],['0 abas','para reconstruir o histórico']],items:['Central de conversas por status','Ficha comercial ao lado da conversa','Templates e atalhos operacionais','Movimentação de etapa sem sair do atendimento']},
  jornada:{label:'Jornada & Agenda',img:ASSETS.hoje,title:'O dia começa pelo que exige atenção.',desc:'Interesses sem agenda, retornos vencidos, avaliações a confirmar, faltosos e acompanhamentos aparecem como trabalho operacional — não como informação perdida em relatórios.',facts:[['14','interesses sem agenda'],['6','retornos vencidos no exemplo']],items:['Pendências organizadas por prioridade','Agenda e confirmações no mesmo fluxo','Recuperação de retornos e faltosos','Próximas ações concentradas em uma rotina']},
  inteligencia:{label:'Desempenho',img:ASSETS.desempenho,title:'Gestão começa quando o dado mostra onde agir.',desc:'Conversão entre etapas, faturamento, canais, procedimentos e responsáveis formam uma leitura única do caminho da oportunidade e dos pontos que exigem investigação.',facts:[['61,4%','conversão no ponto de atenção'],['64','tratamentos fechados no exemplo']],items:['Conversão etapa a etapa','Ponto de atenção destacado','Análise por canal e procedimento','Desempenho por responsável e período']},
  multiunidade:{label:'Multiunidade',img:ASSETS.configuracoes,title:'Governança para crescer sem perder padrão.',desc:'Unidades, procedimentos, fontes, motivos de perda, distribuição, automações, importação e acessos ficam sob a mesma estrutura operacional.',facts:[['3','unidades no exemplo'],['6','regras de distribuição ativas']],items:['Gestão por organização e unidade','Distribuição de oportunidades por regra','Cadastros operacionais centralizados','Equipe, acessos, importação e automações']}
};

const productImage=(src,alt,extra='',priority=false)=>`<figure class="product-shot ${extra}"><img src="${src}" alt="${alt}" ${priority?'loading="eager" fetchpriority="high"':'loading="lazy"'} decoding="async" referrerpolicy="no-referrer"></figure>`;

const finalCta=()=>`<section class="final-cta"><div class="wrap final-cta-inner"><div><h2>Entre no SPX OS.</h2><p>Seu ambiente operacional continua protegido em spxos.com.br.</p></div><a class="button button-light" href="${LOGIN}">Acessar plataforma</a></div></section>`;

const home=()=>`
<section class="hero-v2">
  <div class="wrap hero-v2-copy">
    <p class="overline">SPX OS · OPERAÇÃO COMERCIAL</p>
    <h1>Marketing, vendas e operação.<br><span>Uma única leitura.</span></h1>
    <p class="hero-lead">O SPX OS organiza oportunidades, atendimento, agenda, equipe e desempenho para que cada área saiba o que aconteceu, o que precisa avançar e onde a operação está perdendo eficiência.</p>
    <div class="hero-actions-v2"><a class="button button-primary" href="${LOGIN}">Acessar SPX OS</a><a class="button button-link" href="#produto">Ver produto ↓</a></div>
  </div>
  <div class="wrap hero-product">${productImage(ASSETS.hoje,'Tela Hoje do SPX OS','hero-shot',true)}</div>
</section>

<section class="product-index" id="produto"><div class="wrap"><div class="section-intro"><h2>Um sistema para operar o comercial do início ao fim.</h2><p>Cinco camadas que trabalham juntas, sem transformar a rotina em um conjunto de ferramentas desconectadas.</p></div><div class="module-list">
${[['/jornada','01','Hoje','Prioridades, agenda e retornos'],['/crm','02','CRM','Jornada e próxima ação'],['/conversas','03','Conversas','WhatsApp com contexto'],['/inteligencia','04','Desempenho','Conversão e leitura gerencial'],['/multiunidade','05','Multiunidade','Governança e configuração']].map(x=>`<a href="${x[0]}" class="module-row"><span>${x[1]}</span><strong>${x[2]}</strong><small>${x[3]}</small><b>→</b></a>`).join('')}
</div></div></section>

<section class="feature-section"><div class="wrap feature-layout"><div class="feature-copy"><p class="overline">ROTINA</p><h2>O sistema começa pelo trabalho que precisa acontecer hoje.</h2><p>Em vez de abrir um dashboard e procurar problemas, o time encontra interessados sem agenda, retornos vencidos, avaliações a confirmar, faltosos e acompanhamentos já organizados como ação.</p><a class="text-arrow" href="/jornada">Conhecer Jornada & Agenda →</a></div>${productImage(ASSETS.hoje,'Tela Hoje do SPX OS')}</div></section>

<section class="feature-section feature-soft"><div class="wrap feature-layout reverse">${productImage(ASSETS.conversas,'Tela Conversas do SPX OS')}<div class="feature-copy"><p class="overline">ATENDIMENTO</p><h2>A conversa já abre com o contexto da oportunidade.</h2><p>Procedimento, etapa, responsável, avaliação, orçamento, próxima ação e histórico permanecem junto do atendimento. Menos troca de abas, menos informação perdida.</p><a class="text-arrow" href="/conversas">Conhecer Conversas →</a></div></div></section>

<section class="feature-section"><div class="wrap feature-layout"><div class="feature-copy"><p class="overline">CRM COMERCIAL</p><h2>A jornada inteira visível em uma única operação.</h2><p>Da entrada da oportunidade ao fechamento, o time acompanha estágio, responsável, origem, procedimento e potencial financeiro sem perder contexto.</p><a class="text-arrow" href="/crm">Conhecer CRM Comercial →</a></div>${productImage(ASSETS.jornada,'Tela Jornada do Paciente do SPX OS')}</div></section>

<section class="journey-v2"><div class="wrap journey-v2-grid"><div><p class="overline inverse-overline">JORNADA COMERCIAL</p><h2>Toda oportunidade precisa de um próximo movimento.</h2><p>O SPX OS acompanha o avanço da oportunidade desde a entrada até a receita, com responsabilidade definida em cada etapa.</p></div><ol class="journey-line">${['Novo lead','Contato','Qualificação','Agendamento','Comparecimento','Fechamento'].map((s,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><strong>${s}</strong></li>`).join('')}</ol></div></section>

<section class="feature-section"><div class="wrap feature-layout"><div class="feature-copy"><p class="overline">GESTÃO</p><h2>Do volume à conversão. Da conversão à decisão.</h2><p>O desempenho mostra o caminho da oportunidade e destaca onde a operação perde eficiência. No exemplo real do sistema, a passagem para agendamento aparece como principal ponto de atenção.</p><div class="stat-line"><div><strong>412</strong><span>oportunidades</span></div><div><strong>61,4%</strong><span>ponto de atenção</span></div><div><strong>64</strong><span>fechamentos</span></div></div><a class="text-arrow" href="/inteligencia">Conhecer Desempenho →</a></div>${productImage(ASSETS.desempenho,'Tela Desempenho do SPX OS')}</div></section>

<section class="feature-section feature-soft"><div class="wrap feature-layout reverse">${productImage(ASSETS.configuracoes,'Tela Configurações do SPX OS')}<div class="feature-copy"><p class="overline">GOVERNANÇA</p><h2>Uma estrutura preparada para mais de uma unidade.</h2><p>Unidades, fontes, procedimentos, distribuição, equipe, acessos e automações podem ser organizados sem perder uma leitura comum da operação.</p><a class="text-arrow" href="/multiunidade">Conhecer Multiunidade →</a></div></div></section>

<section class="spx-principle"><div class="wrap principle-grid"><p>SPX</p><blockquote>“Feeling é ego. Clareza é certeza.”</blockquote><div>O sistema materializa a proposta da SPX: integrar marketing, vendas e dados para estruturar decisões de crescimento.</div></div></section>${finalCta()}`;

const detail=p=>`<section class="detail-v2"><div class="wrap detail-v2-copy"><a class="back-link" href="/#produto">← Produto</a><p class="overline">${p.label.toUpperCase()}</p><h1>${p.title}</h1><p class="detail-lead">${p.desc}</p><div class="hero-actions-v2"><a class="button button-primary" href="${LOGIN}">Acessar SPX OS</a></div></div><div class="wrap detail-shot">${productImage(p.img,`Tela ${p.label} do SPX OS`,'detail-product',true)}</div></section><section class="detail-content"><div class="wrap detail-content-grid"><div><p class="overline">NA OPERAÇÃO</p><h2>Menos reconstrução de contexto. Mais capacidade de agir.</h2></div><div class="clean-list">${p.items.map(x=>`<div><span>—</span><p>${x}</p></div>`).join('')}</div></div></section><section class="detail-facts"><div class="wrap fact-grid">${p.facts.map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}<p>Indicadores apresentados nas telas reais usadas na validação visual desta página.</p></div></section><section class="next-modules"><div class="wrap"><p class="overline">CONTINUE EXPLORANDO</p><div class="next-grid">${Object.entries(modules).filter(([k])=>k!==location.pathname.replace(/^\/+|\/+$/g,'')).slice(0,3).map(([k,m])=>`<a href="/${k}"><strong>${m.label}</strong><span>→</span></a>`).join('')}</div></div></section>${finalCta()}`;

const slug=location.pathname.replace(/^\/+|\/+$/g,'');
document.querySelector('#app').innerHTML=modules[slug]?detail(modules[slug]):home();
const menu=document.querySelector('#menuBtn'),nav=document.querySelector('#mainNav');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
