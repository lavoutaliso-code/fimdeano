/* ══════════════════════════════════════════════════════════════════════════
   CONTEÚDO — é aqui que se mexe no texto, nas vagas e no link.
   Nada de caçar string no meio do HTML.
   ══════════════════════════════════════════════════════════════════════════ */

/* 🔴 O LINK DO CHECKOUT. Enquanto for '#', o botão não leva a lugar nenhum. */
window.LINK_MENTORIA = '#';

/* ══════════════════════════════════════════════════════════════════════════
   O PREÇO. Conta de dinheiro: tudo que a tela mostra sai daqui, e a parcela
   é CALCULADA na frente — não é número digitado à mão.

   ⚠️ A taxa de parcelamento é a que a Kiwify publica: **3,49% ao mês**, acréscimo
   cobrado do comprador (ajuda.kiwify.com.br → «Como funciona o parcelamento no
   checkout», lido em 02/11/2026). Os checkouts que já existem na conta dela são
   todos ASSINATURA — nenhum tem parcelado —, então não deu pra medir a taxa no
   checkout dela. Quando o produto da mentoria existir, CONFIRA a parcela no
   checkout real e, se divergir, mude JUROS_AM aqui: a tela inteira acompanha.
   ══════════════════════════════════════════════════════════════════════════ */
window.PRECO = {
  de: 1997,          // o preço cheio, riscado
  por: 1297,         // o preço das 20 primeiras
  parcelas: 12,
  JUROS_AM: 0.0349   // 3,49% a.m. — tabela Price, como a Kiwify faz
};

/* ⚠️ NÚMERO DE VAGA NÃO É MEDIDO — é o que ela definir. Não existe fonte
   externa pra isso ainda; quando existir (a planilha da turma, o checkout),
   é daqui que ele passa a vir. Até lá, os dois números abaixo são a verdade. */
window.VAGAS = { total: 20, restam: 20 };

/* ── As 5 perguntas ──────────────────────────────────────────────────────
   `ilu`  = a ilustração do gargalo (uma por pergunta)
   `dois` = quando a pergunta tem DUAS imagens, uma por resposta (só o financeiro) */
window.PERGUNTAS = [
  { n:'01', cat:'Aquisição',
    texto:'Você tem uma estrutura de aquisição de clientes que roda no automático?',
    ilu:'funil',
    furo:'Aquisição',
    sim:'Tenho — entra cliente sem eu correr atrás.',
    nao:'Não — quando para de chegar, eu não sei o que fazer.' },

  { n:'02', cat:'Conversão',
    texto:'Você tem um processo para transformar conversas em agendamentos?',
    ilu:'rota',
    furo:'Conversão',
    sim:'Tenho — a conversa tem um caminho até a agenda.',
    nao:'Não — muita conversa, pouco agendamento.' },

  { n:'03', cat:'Equipe',
    texto:'Seu salão consegue crescer sem depender exclusivamente de você?',
    ilu:'balde',
    furo:'Equipe',
    sim:'Consegue — o salão anda sem mim na cadeira.',
    nao:'Não — se eu paro, para tudo.' },

  { n:'04', cat:'Financeiro',
    texto:'Você sabe para onde está indo o dinheiro que entra no seu salão?',
    furo:'Financeiro',
    dois:{
      sim:{ img:'torneira-jorra', diz:'Sei precificar — e sobra muito lucro!' },
      nao:{ img:'torneira-fura',  diz:'Não sobra o quanto eu gostaria.' }
    } },

  { n:'05', cat:'Planejamento',
    texto:'Você tem metas e sabe o que precisa fazer para alcançá-las?',
    ilu:'estrada',
    furo:'Planejamento',
    sim:'Tenho — sei o número e sei o caminho.',
    nao:'Não — eu vou levando o mês como dá.' }
];

/* o fecho do checklist, pelo número de furos abertos */
window.FECHO = [
  { ate:0, tit:'Cano inteiro.',
    sub:'Dos 5 gargalos, nenhum abriu. Agora o número: veja se o preço fecha a conta.' },
  { ate:1, tit:'Um furo aberto.',
    sub:'Um gargalo já tira do seu lucro todo mês. Veja quanto, na calculadora.' },
  { ate:2, tit:'Dois furos abertos.',
    sub:'Não é falta de cliente: é dinheiro saindo no caminho. Veja quanto.' },
  { ate:3, tit:'Três furos abertos.',
    sub:'Metade do que entra está se perdendo antes de chegar em você.' },
  { ate:5, tit:'O cano está furado.',
    sub:'Trabalhar mais não tapa furo. Veja o tamanho do vazamento.' }
];
