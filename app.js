const LOGIN='https://www.spxos.com.br/entrar';
const ASSETS={
  hoje:'https://i.imgur.com/X2CZmwp.png',
  conversas:'https://i.imgur.com/Zn3UeSG.png',
  jornada:'https://i.imgur.com/JMlzJcx.png',
  configuracoes:'https://i.imgur.com/fsdZG1P.png',
  desempenho:'https://i.imgur.com/RVcNuPf.png'
};

const shot=(src,alt,extra='',priority=false)=>`<figure class="product-shot ${extra}"><img src="${src}" alt="${alt}" ${priority?'loading="eager" fetchpriority="high"':'loading="lazy"'} decoding="async" referrerpolicy="no-referrer"></figure>`;

const finalCta=(title='Sua operação já está acontecendo. Agora ela precisa estar visível.')=>`<section class="final-cta"><div class="wrap final-cta-inner"><div><h2>${title}</h2><p>Clientes ativos acessam o ambiente protegido do SPX OS em spxos.com.br.</p></div><a class="button button-light" href="${LOGIN}">Acessar plataforma</a></div></section>`;

const capabilityLinks=()=>`<div class="capability-links">
  <a href="/produto#crm"><span>01</span><div><strong>CRM Comercial</strong><small>Jornada, responsável e próxima ação.</small></div><b>→</b></a>
  <a href="/produto#whatsapp"><span>02</span><div><strong>WhatsApp integrado</strong><small>Conversa com contexto da oportunidade.</small></div><b>→</b></a>
  <a href="/produto#desempenho"><span>03</span><div><strong>Desempenho</strong><small>Conversão, perdas e leitura gerencial.</small></div><b>→</b></a>
  <a href="/produto#multiunidade"><span>04</span><div><strong>Multiunidade</strong><small>Governança por unidade, equipe e função.</small></div><b>→</b></a>
</div>`;

const home=()=>`
<section class="hero-v3">
  <div class="wrap hero-copy-v3">
    <p class="eyebrow">SPX OS</p>
    <h1>Clareza para conectar<br>marketing, vendas e operação.</h1>
    <p class="hero-lead">O SPX OS organiza a jornada comercial em uma única leitura: o que entrou, quem assumiu, o que avançou, onde travou e o que virou receita.</p>
    <div class="hero-actions"><a class="button button-primary" href="/produto">Conhecer o produto</a><a class="button button-quiet" href="${LOGIN}">Entrar no sistema</a></div>
  </div>
  <div class="wrap hero-product">${shot(ASSETS.hoje,'Tela Hoje do SPX OS','hero-shot',true)}</div>
</section>

<section class="section editorial" id="produto">
  <div class="wrap editorial-head"><div><p class="eyebrow">PRODUTO</p><h2>Um sistema. Quatro camadas que trabalham juntas.</h2></div><p>O produto não termina no cadastro de uma oportunidade. Ele conecta jornada, conversa, desempenho e governança para reduzir o espaço entre informação e ação.</p></div>
  <div class="wrap">${capabilityLinks()}</div>
</section>

<section class="section soft">
  <div class="wrap split-feature">
    <div class="split-copy"><p class="eyebrow">SOLUÇÕES</p><h2>Cada área enxerga a mesma operação pelo ângulo que precisa.</h2><p>Marketing acompanha origem e qualidade. Comercial executa a próxima ação. Diretoria lê conversão, receita e gargalos. Redes e filiais comparam unidades sem perder contexto.</p><a class="text-arrow" href="/solucoes">Ver soluções por equipe →</a></div>
    <div class="solution-stack"><a href="/solucoes#marketing"><small>MARKETING</small><strong>Da origem à oportunidade que realmente chegou ao comercial.</strong></a><a href="/solucoes#comercial"><small>COMERCIAL</small><strong>Atendimento, follow-up, agenda, proposta e responsabilidade.</strong></a><a href="/solucoes#diretoria"><small>DIRETORIA</small><strong>Conversão, receita e ponto de atenção em uma única leitura.</strong></a></div>
  </div>
</section>

<section class="section product-proof">
  <div class="wrap split-feature reverse">
    ${shot(ASSETS.conversas,'Central WhatsApp do SPX OS')}
    <div class="split-copy"><p class="eyebrow">COMUNICAÇÃO</p><h2>WhatsApp deixa de ser uma caixa de entrada isolada.</h2><p>A conversa acontece junto da etapa, do procedimento, do responsável, do agendamento, do orçamento e da próxima ação. A comunicação passa a fazer parte da operação.</p><a class="text-arrow" href="/produto#whatsapp">Ver WhatsApp integrado →</a></div>
  </div>
</section>

<section class="section dark-section">
  <div class="wrap manifesto-grid"><div><p class="eyebrow gold">POR QUE EXISTE</p><h2>O SPX OS nasceu para tirar os pontos de interrogação da operação.</h2></div><div><p>Quem gerou a oportunidade?</p><p>Quem deveria ter atendido?</p><p>Onde ela parou?</p><p>Quanto ficou pelo caminho?</p><p class="answer">A ideia é colocar um ponto final em cada uma dessas perguntas.</p><a class="text-arrow light" href="/sobre">Conhecer a origem do SPX OS →</a></div></div>
</section>

<section class="section case-section">
  <div class="wrap case-head"><div><p class="eyebrow">EM OPERAÇÃO</p><h2>Do desenho de processo à rotina real.</h2></div><p>O ambiente que você está vendo foi estruturado para uma operação odontológica com jornada comercial, WhatsApp, desempenho e regras de governança no mesmo sistema.</p></div>
  <div class="wrap case-card"><div class="case-copy"><small>LARKAN ODONTO</small><h3>Uma operação comercial com contexto do início ao fim.</h3><p>CRM por etapa, agenda, atendimento, acompanhamento, análise de conversão e configurações por unidade foram reunidos em um único ambiente operacional.</p><div class="case-metrics"><span><strong>412</strong><small>oportunidades no exemplo de desempenho</small></span><span><strong>64</strong><small>fechamentos exibidos</small></span><span><strong>R$ 184.250</strong><small>valor fechado exibido</small></span></div></div>${shot(ASSETS.desempenho,'Tela de desempenho do ambiente Larkan Odonto')}</div>
</section>

<section class="section plans-preview soft">
  <div class="wrap editorial-head"><div><p class="eyebrow">PLANOS</p><h2>Estrutura proporcional à complexidade da operação.</h2></div><p>O plano deve acompanhar o número de equipes, unidades e níveis de governança — não obrigar uma empresa pequena a contratar uma estrutura que ainda não precisa.</p></div>
  <div class="wrap plan-preview-grid"><article><small>OPERAÇÃO</small><h3>Para uma equipe que precisa organizar a jornada.</h3><p>Uma base única para CRM, atendimento e acompanhamento.</p></article><article><small>GESTÃO</small><h3>Para marketing e comercial trabalhando como uma operação.</h3><p>Mais leitura, distribuição, desempenho e automação.</p></article><article><small>ESCALA</small><h3>Para redes, filiais e operações com maior governança.</h3><p>Unidades, regras, acessos e visão executiva.</p></article></div>
  <div class="wrap plans-link"><a class="button button-primary" href="/planos">Conhecer os planos</a></div>
</section>
${finalCta()}`;

const product=()=>`
<section class="page-hero"><div class="wrap page-hero-grid"><div><p class="eyebrow">PRODUTO</p><h1>O sistema que organiza a operação comercial em uma única leitura.</h1><p>CRM, WhatsApp, jornada, desempenho e governança não são produtos separados. São partes da mesma operação.</p></div>${shot(ASSETS.jornada,'Jornada do Paciente no SPX OS','page-hero-shot',true)}</div></section>
<section class="section product-row" id="crm"><div class="wrap split-feature"><div class="split-copy"><p class="eyebrow">CRM COMERCIAL</p><h2>O pipeline precisa mostrar o próximo movimento.</h2><p>Cada oportunidade reúne estágio, origem, unidade, procedimento, responsável e potencial financeiro. O time deixa de consultar uma lista e passa a operar uma jornada.</p><ul class="clean-points"><li>Jornada da entrada ao fechamento</li><li>Responsável e unidade em cada oportunidade</li><li>Potencial financeiro por estágio</li><li>Filtros por origem, procedimento e equipe</li></ul></div>${shot(ASSETS.jornada,'CRM Comercial do SPX OS')}</div></section>
<section class="section product-row soft" id="whatsapp"><div class="wrap split-feature reverse">${shot(ASSETS.conversas,'WhatsApp integrado do SPX OS')}<div class="split-copy"><p class="eyebrow">WHATSAPP INTEGRADO</p><h2>A conversa já abre com o contexto comercial.</h2><p>Etapa, procedimento, responsável, agendamento, orçamento, próxima ação e histórico acompanham o atendimento.</p><ul class="clean-points"><li>Central de conversas dentro do sistema</li><li>Ficha comercial junto do atendimento</li><li>Templates e atalhos operacionais</li><li>Movimentação de etapa e retorno sem trocar de ambiente</li></ul></div></div></section>
<section class="section product-row" id="desempenho"><div class="wrap split-feature"><div class="split-copy"><p class="eyebrow">DESEMPENHO</p><h2>O dado precisa apontar onde investigar e agir.</h2><p>Conversão entre etapas, canais, procedimentos, responsáveis e receita formam uma leitura do caminho da oportunidade.</p><ul class="clean-points"><li>Conversão etapa a etapa</li><li>Ponto de atenção destacado</li><li>Análise por canal e procedimento</li><li>Desempenho por responsável e período</li></ul></div>${shot(ASSETS.desempenho,'Desempenho do SPX OS')}</div></section>
<section class="section product-row soft" id="multiunidade"><div class="wrap split-feature reverse">${shot(ASSETS.configuracoes,'Configurações e governança do SPX OS')}<div class="split-copy"><p class="eyebrow">MULTIUNIDADE</p><h2>Governança para crescer sem perder padrão.</h2><p>Unidades, procedimentos, fontes, motivos de perda, regras de distribuição, automações e acessos ficam sob a mesma estrutura.</p><ul class="clean-points"><li>Gestão por organização e unidade</li><li>Regras de distribuição de oportunidades</li><li>Cadastros operacionais centralizados</li><li>Equipe, acessos, importação e automações</li></ul></div></div></section>
${finalCta('Conheça o produto por dentro. Depois deixe a operação falar por ele.')}`;

const solutions=()=>`
<section class="page-hero simple"><div class="wrap page-copy"><p class="eyebrow">SOLUÇÕES</p><h1>A mesma verdade operacional para quem gera, quem vende e quem decide.</h1><p>O SPX OS não cria uma visão diferente para cada área. Ele organiza a mesma operação para que cada equipe consiga enxergar o que precisa.</p></div></section>
<section class="section audience-row" id="marketing"><div class="wrap audience-grid"><div><p class="eyebrow">MARKETING</p><h2>Entender o que entrou — e o que de fato avançou.</h2><p>Origem, canal e volume deixam de terminar no lead gerado. O marketing passa a acompanhar a qualidade da oportunidade e sua passagem pelo comercial.</p><ul class="clean-points"><li>Fontes e origens centralizadas</li><li>Leitura do avanço após a geração do lead</li><li>Procedimentos e potencial financeiro associados</li><li>Visão comum com o comercial</li></ul></div>${shot(ASSETS.jornada,'Jornada comercial vista pelo marketing')}</div></section>
<section class="section audience-row soft" id="comercial"><div class="wrap audience-grid reverse">${shot(ASSETS.conversas,'Operação comercial no WhatsApp')}<div><p class="eyebrow">COMERCIAL</p><h2>Saber quem precisa de atenção antes de procurar no histórico.</h2><p>Conversa, retorno, agenda, proposta e próxima ação ficam dentro do contexto da oportunidade.</p><ul class="clean-points"><li>Atendimento com contexto</li><li>Follow-up e retornos</li><li>Agenda e confirmações</li><li>Responsabilidade por oportunidade</li></ul></div></div></section>
<section class="section audience-row" id="diretoria"><div class="wrap audience-grid"><div><p class="eyebrow">DIRETORIA</p><h2>Uma visão executiva sem depender de dez relatórios.</h2><p>O caminho da oportunidade mostra volume, conversão, fechamento, valor e o ponto de atenção da operação.</p><ul class="clean-points"><li>Conversão por etapa</li><li>Receita e ticket médio</li><li>Desempenho por responsável</li><li>Análise por procedimento e canal</li></ul></div>${shot(ASSETS.desempenho,'Visão gerencial do SPX OS')}</div></section>
<section class="section audience-row soft" id="redes"><div class="wrap audience-grid reverse">${shot(ASSETS.configuracoes,'Gestão de unidades do SPX OS')}<div><p class="eyebrow">REDES E FILIAIS</p><h2>Unidades diferentes sem virar operações desconectadas.</h2><p>A estrutura permite organizar regras, equipes, procedimentos e acessos por unidade mantendo uma leitura comum da operação.</p><ul class="clean-points"><li>Unidades e equipes</li><li>Distribuição por regra</li><li>Acessos por função</li><li>Padronização de cadastros e processo</li></ul></div></div></section>
${finalCta('Marketing, comercial e gestão olhando para a mesma operação.')}`;

const about=()=>`
<section class="about-hero"><div class="wrap about-grid"><div><p class="eyebrow gold">SOBRE O SPX OS</p><h1>O sistema surgiu para uma coisa: trazer clareza para a operação.</h1></div><div><p>Empresas não costumam sofrer por falta de informação. Sofrem porque marketing, vendas e gestão enxergam pedaços diferentes da mesma realidade.</p><p>O SPX OS nasceu para reduzir esse espaço.</p></div></div></section>
<section class="section origin-section"><div class="wrap origin-grid"><div><p class="eyebrow">A ORIGEM</p><h2>Trocar pontos de interrogação por pontos finais.</h2></div><div class="questions"><p><span>?</span> Quem gerou essa oportunidade?</p><p><span>?</span> Quem ficou responsável por ela?</p><p><span>?</span> Em qual etapa ela parou?</p><p><span>?</span> Quanto potencial ficou pelo caminho?</p><p><span>?</span> O problema está em marketing, atendimento, agenda ou fechamento?</p><strong>Quando essas respostas vivem no mesmo sistema, a gestão deixa de operar no feeling.</strong></div></div></section>
<section class="section dark-section"><div class="wrap manifesto-grid"><div><p class="eyebrow gold">PRINCÍPIO SPX</p><h2>“Feeling é ego. Clareza é certeza.”</h2></div><div><p>O software é a materialização desse princípio: integrar marketing, vendas e dados para organizar leitura, responsabilidade e direção.</p></div></div></section>
<section class="section case-section"><div class="wrap case-head"><div><p class="eyebrow">COMO ISSO GANHA FORMA</p><h2>Um sistema desenhado em cima da operação real.</h2></div><p>O ambiente Larkan Odonto demonstra como jornada comercial, WhatsApp, agenda, desempenho e governança podem coexistir dentro da mesma arquitetura.</p></div><div class="wrap case-gallery">${shot(ASSETS.hoje,'Rotina comercial no SPX OS')}${shot(ASSETS.conversas,'Conversas no SPX OS')}${shot(ASSETS.desempenho,'Desempenho no SPX OS')}</div></section>
${finalCta('Clareza não é um dashboard. É saber o que fazer com a operação.')}`;

const plans=()=>`
<section class="page-hero simple"><div class="wrap page-copy"><p class="eyebrow">PLANOS</p><h1>Uma estrutura que cresce junto da complexidade da empresa.</h1><p>Os planos são organizados pelo nível de operação, equipes, unidades e governança necessária. Valores não são publicados nesta versão porque dependem da configuração contratada.</p></div></section>
<section class="section pricing-section"><div class="wrap pricing-grid"><article><div><small>OPERAÇÃO</small><h2>Para empresas que precisam organizar uma equipe comercial.</h2><p>Começa pelo essencial: jornada, atendimento e rotina comercial em um único lugar.</p></div><ul><li>CRM Comercial</li><li>Jornada e agenda</li><li>WhatsApp integrado</li><li>Indicadores operacionais</li><li>Uma estrutura de operação</li></ul><footer><strong>Configuração sob proposta</strong><span>Indicada para operações menores e em estruturação.</span></footer></article><article class="featured"><div><small>GESTÃO</small><h2>Para empresas com marketing e comercial operando juntos.</h2><p>Mais controle sobre distribuição, desempenho, regras e leitura gerencial.</p></div><ul><li>Tudo do plano Operação</li><li>Desempenho e conversão</li><li>Regras de distribuição</li><li>Automações e configurações</li><li>Mais equipes e responsabilidades</li></ul><footer><strong>Configuração sob proposta</strong><span>Indicada para empresas em crescimento e maior maturidade comercial.</span></footer></article><article><div><small>ESCALA</small><h2>Para redes, filiais e operações com maior governança.</h2><p>Estrutura para múltiplas unidades, acessos e leitura executiva da operação.</p></div><ul><li>Tudo do plano Gestão</li><li>Multiunidade</li><li>Governança por função</li><li>Padronização entre filiais</li><li>Implantação orientada à estrutura</li></ul><footer><strong>Configuração sob proposta</strong><span>Indicada para operações complexas, redes e grupos empresariais.</span></footer></article></div><div class="wrap pricing-note"><p>Os limites exatos de usuários, unidades, automações e integrações ainda devem ser definidos comercialmente antes de publicar uma tabela definitiva.</p></div></section>
${finalCta('O plano certo começa pelo desenho da sua operação.')}`;

const legacy={crm:'/produto#crm',conversas:'/produto#whatsapp',jornada:'/produto#crm',inteligencia:'/produto#desempenho',multiunidade:'/produto#multiunidade'};
const routeParam=new URLSearchParams(location.search).get('route');if(routeParam)history.replaceState({},'',`/${routeParam}`);const slug=(routeParam||location.pathname).replace(/^\/+|\/+$/g,'');
if(legacy[slug]){location.replace(legacy[slug]);}
else{
  const pages={produto:product,solucoes:solutions,sobre:about,planos:plans};
  document.querySelector('#app').innerHTML=pages[slug]?pages[slug]():home();
}

const menu=document.querySelector('#menuBtn');
const nav=document.querySelector('#mainNav');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
document.querySelectorAll('.nav-trigger').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.stopPropagation();
    const parent=btn.closest('.nav-dropdown');
    document.querySelectorAll('.nav-dropdown.open').forEach(x=>{if(x!==parent)x.classList.remove('open')});
    parent.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(parent.classList.contains('open')));
  });
});
document.addEventListener('click',()=>document.querySelectorAll('.nav-dropdown.open').forEach(x=>x.classList.remove('open')));