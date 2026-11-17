export type Locale = 'pt' | 'en';

export const guideDownloadPath = '/ebooks/quando-o-arquivo-engana-guia-integridade-digital.pdf';
export const guideSha256 = '9460c9ca5e0e5d7ac388eb2108284442fa688fc9fb0f48cc563661efe2db0c75';

export const pageUrls = {
  pt: 'https://www.investigacaoforense.com/guia-integridade-digital',
  en: 'https://www.investigacaoforense.com/en/digital-integrity-guide',
} as const;

// Exemplo da capa do guia: dois arquivos que parecem iguais, hashes que divergem em 61 das 64 posicoes.
export const hashDemo = {
  original: '81a76d130c92533a8136ed41471a555cc5586ecdfc50fc2330dfece4c78d1c99',
  altered: 'd1f5a9906dbd1ca7a7e320af59b145deb7ceebf8bee0495985236a99ebfaadcf',
} as const;

type Card = { title: string; description: string; tag?: string };

export type GuideCopy = {
  language: string;
  ogLocale: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogAlt: string;
  schemaName: string;
  schemaDescription: string;
  breadcrumb: { home: string; apps: string; guide: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    download: string;
    secondary: string;
    note: string;
    coverAlt: string;
    langNote?: string;
  };
  proof: Card[];
  hashDemo: {
    eyebrow: string;
    title: string;
    description: string;
    originalLabel: string;
    alteredLabel: string;
    caption: string;
    legend: string;
    ideasTitle: string;
    ideas: Card[];
  };
  brazil: {
    eyebrow: string;
    title: string;
    description: string;
    columns: { term: string; what?: string; covers: string };
    rows: Array<{ term: string; what?: string; covers: string }>;
    note: string;
    imageAlt: string;
  };
  flows: { eyebrow: string; title: string; description: string; items: Card[] };
  protocol: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ title: string; description: string }>;
    channelTitle: string;
    channel: string;
    warningTitle: string;
    warning: string;
    imageAlt: string;
  };
  inside: { eyebrow: string; title: string; description: string; items: Card[] };
  kit?: { eyebrow: string; title: string; description: string; items: Card[] };
  limits: { eyebrow: string; title: string; description: string; items: Card[] };
  privacy: {
    eyebrow: string;
    title: string;
    description: string;
    columns: { tool: string; what: string };
    rows: Array<{ tool: string; what: string }>;
    retention: string;
    policyLabel: string;
    policyUrl: string;
    disclaimer: string;
  };
  verify: {
    title: string;
    description: string;
    hashLabel: string;
    commandsLabel: string;
    windows: string;
    unix: string;
  };
  about: { eyebrow: string; title: string; description: string; author: string; authorRole: string };
  faq: { title: string; items: Array<{ question: string; answer: string }> };
  final: { title: string; description: string; download: string; app: string };
  mobileDownload: string;
};

const pt: GuideCopy = {
  language: 'pt-BR',
  ogLocale: 'pt_BR',
  metaTitle: 'Guia de Integridade Digital (PDF grátis) | MetaScope Forense',
  metaDescription:
    'Guia gratuito para conferir boletos, notas fiscais, contratos, fotos e links antes de agir, e guardar o que importa para provar depois. 19 páginas em PDF, sem cadastro.',
  ogTitle: 'Quando o arquivo engana: guia de segurança e integridade digital para empresas',
  ogDescription:
    'Como conferir boletos, notas, contratos, fotos e links antes de pagar, assinar ou encaminhar. PDF gratuito, sem cadastro.',
  ogAlt: 'Capa do guia Quando o arquivo engana, com dois arquivos idênticos à vista e hashes SHA-256 diferentes',
  schemaName: 'Quando o arquivo engana: guia prático de segurança e integridade digital para empresas',
  schemaDescription:
    'Guia gratuito em PDF com protocolos para conferir boletos, notas fiscais, contratos, fotos e links e para preservar arquivos com hash SHA-256.',
  breadcrumb: { home: 'Início', apps: 'MetaScope', guide: 'Guia de integridade digital' },
  hero: {
    badge: 'Guia gratuito · PDF · 19 páginas',
    title: 'Quando o arquivo engana',
    subtitle: 'Guia prático de segurança e integridade digital para empresas',
    description:
      'Um boleto com o código de barras de outra conta. Uma nota fiscal que não existe na SEFAZ. Um contrato do qual ninguém sabe qual versão foi enviada. Veja como conferir cada arquivo antes de pagar, assinar ou encaminhar, e como guardar o que importa para provar depois.',
    download: 'Baixar o guia grátis (PDF)',
    secondary: 'Ver o que tem dentro',
    note: 'Sem cadastro. 0,7 MB. Versão 2, novembro de 2026.',
    coverAlt: 'Capa do guia Quando o arquivo engana: dois arquivos iguais à vista, com hashes SHA-256 diferentes',
  },
  proof: [
    {
      title: 'Prático, não teórico',
      description: 'Cada página responde a uma pergunta: o que fazer agora, em poucos passos, na sua área.',
    },
    {
      title: 'Honesto sobre os limites',
      description:
        'Para cada verificação, o guia diz o que ela prova e o que não prova. Verificar é procurar sinais de problema, não atestar que o documento é legítimo.',
    },
    {
      title: 'Feito para a realidade brasileira',
      description: 'Boleto, nota fiscal, Pix, CPF e CNPJ, assinatura ICP-Brasil, falsa intimação e LGPD.',
    },
  ],
  hashDemo: {
    eyebrow: 'A ideia central',
    title: 'Um caractere muda, o hash muda em 61 de 64',
    description:
      'O hash SHA-256 é a impressão digital de um arquivo: um código de 64 caracteres calculado a partir do conteúdo. Dois arquivos que parecem idênticos à vista podem ter hashes totalmente diferentes. É assim que o guia ensina a conferir se o arquivo que você recebeu é o mesmo que foi enviado.',
    originalLabel: 'Arquivo original',
    alteredLabel: 'Cópia com um caractere alterado',
    caption: 'Exemplo da capa do guia.',
    legend: 'Em destaque, os caracteres que mudaram.',
    ideasTitle: 'Três ideias para entender o resto',
    ideas: [
      {
        title: 'Arquivo original',
        description:
          'É o arquivo como foi gerado ou recebido. Aplicativos de mensagem e e-mail podem recomprimir fotos e apagar informações escondidas no arquivo.',
      },
      {
        title: 'Verificar não é provar',
        description:
          'Sem alertas quer dizer que nada foi encontrado, não que o documento é legítimo. Provar exige confirmar na fonte.',
      },
      {
        title: 'Hash',
        description:
          'Hashes iguais, arquivos idênticos. Mas o hash não diz quem fez o arquivo nem se o conteúdo é verdadeiro.',
      },
    ],
  },
  brazil: {
    eyebrow: 'Boleto e nota fiscal',
    title: 'O que o MetaScope confere nos documentos do dia a dia',
    description:
      'No guia, a triagem de Contabilidade e financeiro mostra, passo a passo, o que a Análise Técnica verifica em cada tipo de documento e o que continua sendo conferência sua.',
    columns: { term: 'Documento', covers: 'O que é conferido' },
    rows: [
      {
        term: 'Boleto',
        covers:
          'Dígitos do código de barras e da linha digitável; se o valor impresso é o mesmo do código; CPF ou CNPJ do beneficiário (e, no CNPJ, a situação na base pública da Receita); Nosso Número e Carteira nos bancos de layout conhecido.',
      },
      {
        term: 'QR Code Pix no boleto',
        covers: 'Se o QR Code bate com o boleto, sem acessar o endereço do Pix.',
      },
      {
        term: 'Nota fiscal (DANFE em PDF)',
        covers:
          'Chave de acesso e CNPJ do emitente. O XML não é analisado. A consulta da chave no Portal da NF-e é sua.',
      },
      {
        term: 'PDF com assinatura digital',
        covers: 'Integridade da assinatura e validação oficial no validador do ITI, quando a opção está marcada.',
      },
      {
        term: 'Comprovante de pagamento',
        covers: 'Confira a entrada do dinheiro no extrato. Comprovante perfeito não prova pagamento.',
      },
    ],
    note: '“Não verificável” não é problema: significa que o dado não pôde ser lido com segurança. O MetaScope não consulta a SEFAZ nem o banco. Essa confirmação é sempre sua.',
    imageAlt: 'Página do guia sobre Contabilidade e financeiro: situação, risco e o que fazer para boleto, nota fiscal e comprovante',
  },
  flows: {
    eyebrow: 'Os quatro fluxos',
    title: 'Receber, enviar, guardar e verificar',
    description: 'Todo o guia se organiza em quatro situações que se repetem em qualquer empresa.',
    items: [
      {
        title: 'Receber com cuidado',
        description:
          'Guarde o original, faça a triagem do boleto, da nota ou do contrato, confirme o dado crítico por outro canal e só então pague, aprove ou arquive.',
        tag: 'Antes de pagar',
      },
      {
        title: 'Enviar com selo',
        description:
          'Calcule o hash do arquivo final e envie junto. O destinatário confere se recebeu exatamente o que você mandou.',
        tag: 'Antes de enviar',
      },
      {
        title: 'Guardar para provar depois',
        description:
          'Registre contratos, fotos de vistoria e comprovantes de entrega para demonstrar, meses depois, que não foram alterados.',
        tag: 'Para o futuro',
      },
      {
        title: 'Verificar um link',
        description:
          'Links inesperados de e-mail, SMS e WhatsApp, supostas intimações e pastas compartilhadas, analisados sem abrir a página.',
        tag: 'Antes de clicar',
      },
    ],
  },
  protocol: {
    eyebrow: 'Quando algo parecer estranho',
    title: 'Desconfiou? Pare aqui.',
    description:
      'Use quando uma análise apontar problema, quando dois hashes não baterem ou quando algo parecer estranho. São sete passos, nesta ordem.',
    steps: [
      { title: 'Interrompa', description: 'Não pague, não assine, não encaminhe, não use o arquivo.' },
      { title: 'Preserve', description: 'Não edite, converta ou sobrescreva o arquivo recebido.' },
      { title: 'Registre', description: 'Data, canal, remetente declarado, responsável e operação.' },
      { title: 'Confirme', description: 'Fale com o emissor por um canal independente.' },
      { title: 'Compare', description: 'Recalcule o hash e confirme que são as mesmas versões.' },
      { title: 'Escale', description: 'Gestor, financeiro, jurídico ou segurança da informação.' },
      { title: 'Documente', description: 'O que foi verificado, o que foi decidido e por quem.' },
    ],
    channelTitle: 'Outro canal é',
    channel:
      'O aplicativo do seu banco, conferindo o beneficiário antes de pagar; o portal oficial, como a consulta da NF-e; um telefone ou endereço que você já conhecia. Nunca o contato que veio na mensagem suspeita.',
    warningTitle: 'Atenção',
    warning:
      'Hashes diferentes não provam fraude. Regravar, converter ou comprimir um arquivo também muda o hash. Mas a causa precisa ser esclarecida antes de seguir.',
    imageAlt: 'Página do guia Desconfiou? Pare aqui, com os sete passos do protocolo',
  },
  inside: {
    eyebrow: 'Comece pela sua área',
    title: 'Um capítulo para cada setor',
    description:
      'Cada página mostra a situação típica, o risco e o que fazer, em poucos passos, e termina dizendo o que aquela verificação não prova.',
    items: [
      {
        title: 'Contabilidade e financeiro',
        description: 'Boletos, notas fiscais e comprovantes.',
        tag: 'p. 9',
      },
      {
        title: 'Advocacia e jurídico',
        description: 'Contratos, provas de clientes e intimações.',
        tag: 'p. 10',
      },
      {
        title: 'Recursos humanos',
        description: 'Documentos funcionais, atestados e currículos, com os cuidados da LGPD.',
        tag: 'p. 11',
      },
      {
        title: 'Imobiliárias, obras e transporte',
        description: 'Fotos e vídeos de vistorias, obras e entregas.',
        tag: 'p. 12',
      },
      {
        title: 'Outra empresa',
        description: 'O essencial, em uma página, para quem não se encaixa nos setores acima.',
        tag: 'p. 3',
      },
      {
        title: 'Quem vai implantar',
        description: 'Checklist, modelos de mensagem e política interna.',
        tag: 'p. 16',
      },
    ],
  },
  kit: {
    eyebrow: 'Kit de implantação',
    title: 'Modelos prontos para copiar',
    description: 'Para transformar o guia em rotina da empresa, ele traz material para usar do jeito que está ou adaptar.',
    items: [
      {
        title: 'Checklist com 20 perguntas',
        description: 'Receber, enviar, guardar, links e pedidos, governança. O que ficar em branco é o próximo passo.',
      },
      {
        title: 'Mensagem ao destinatário',
        description: 'Texto pronto para enviar o arquivo junto com o hash e explicar como conferir.',
      },
      {
        title: 'Ficha de registro de envio',
        description: 'Operação, arquivo, responsável, data, hash completo, canais e resultado da conferência.',
      },
      {
        title: 'Política interna resumida',
        description: 'Oito diretrizes de verificação e preservação de arquivos digitais, proporcionais ao risco.',
      },
    ],
  },
  limits: {
    eyebrow: 'Transparência',
    title: 'O que nada disso prova',
    description:
      'O guia dedica uma página inteira aos limites. É o que separa orientação séria de promessa de segurança.',
    items: [
      {
        title: 'O hash não é certificado de autenticidade',
        description: 'Mostra que dois arquivos são idênticos. Não mostra autoria, origem, veracidade nem data de criação.',
      },
      {
        title: 'O registro do Guardião não é cadeia de custódia nem assinatura',
        description: 'Registra que certos hashes foram declarados e selados numa data.',
      },
      {
        title: 'Triagem não é perícia',
        description:
          'Scores e alertas são indícios e riscos, não decisões jurídicas. Quando a questão exigir conclusão técnica, procure um profissional habilitado.',
      },
      {
        title: 'Sem alertas não é garantia',
        description: 'Um boleto consistente pode ser fraude. Uma nota pode não existir na SEFAZ. Um link limpo pode vir de quem você não esperava.',
      },
      {
        title: 'Metadado não decide nada sozinho',
        description: 'A ausência não prova fraude, e a presença não prova autenticidade.',
      },
      {
        title: 'É orientação geral',
        description:
          'Não é parecer jurídico, auditoria, laudo pericial nem certificação, e não substitui as políticas e normas da sua organização.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacidade',
    title: 'O que sai do seu computador',
    description: 'O guia explica, ferramenta por ferramenta, o que é enviado e o que fica no seu navegador.',
    columns: { tool: 'Ferramenta', what: 'O que acontece' },
    rows: [
      { tool: 'Academia e ferramentas gratuitas', what: 'Rodam no seu navegador. Nada é enviado.' },
      { tool: 'Guardião', what: 'O conteúdo não sai. Vão o hash, o nome, o tamanho e o tipo de cada arquivo.' },
      {
        tool: 'Análise Técnica',
        what: 'O arquivo vai ao MetaScope e é processado em memória, sem IA e sem ser gravado em disco. Vídeos usam um arquivo temporário, apagado em seguida.',
      },
      {
        tool: 'PDF com assinatura digital',
        what: 'Por padrão, vai inteiro ao validador do governo (ITI). Se for sigiloso, desmarque a opção antes de enviar.',
      },
      { tool: 'Links', what: 'O texto do endereço é analisado e o domínio é consultado em registros públicos. A página não é aberta.' },
      {
        tool: 'Deep Research (opcional, com IA)',
        what: 'Envia conteúdo à OpenAI. O endereço do link também vai ao Google Web Risk.',
      },
    ],
    retention:
      'De cada análise, o MetaScope guarda o nome do arquivo, o tipo, o tamanho, o hash e o resumo do resultado. O nome e o resumo são apagados depois de 12 meses; o restante fica 5 anos, assim como o registro de custódia.',
    policyLabel: 'Política de Privacidade do MetaScope',
    policyUrl: 'https://app.metascopeforense.com/privacy',
    disclaimer:
      'A LGPD trata de obrigações legais; o guia traz recomendações técnicas. Defina com o seu jurídico o que pode ser enviado a serviços externos.',
  },
  verify: {
    title: 'Confira a integridade deste download',
    description:
      'Seria estranho um guia sobre integridade de arquivos que não deixasse você conferir o próprio arquivo. Este é o SHA-256 do PDF publicado nesta página.',
    hashLabel: 'SHA-256 do PDF',
    commandsLabel: 'Para calcular no seu computador, sem enviar o arquivo a ninguém:',
    windows: 'Windows',
    unix: 'Linux ou macOS',
  },
  about: {
    eyebrow: 'Quem publica',
    title: 'MetaScope Forense',
    description:
      'Plataforma brasileira de análise forense digital, desenvolvida por Investigação Forense. O guia nasceu da prática com os documentos e os golpes que mais aparecem nas empresas brasileiras.',
    author: 'Tales Giuliano Vieira',
    authorRole: 'Perito, professor e pesquisador em perícia e investigação digital.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'O guia é gratuito? Preciso me cadastrar?',
        answer: 'É gratuito e o download é direto, sem cadastro. São 19 páginas em PDF, com 0,7 MB.',
      },
      {
        question: 'Preciso usar o MetaScope para seguir o guia?',
        answer:
          'Não. Os protocolos valem com qualquer ferramenta. O hash, por exemplo, pode ser calculado no próprio computador, com certutil no Windows ou sha256sum no Linux e no macOS. O guia mostra como usar o MetaScope porque ele reúne essas conferências em um lugar, com uma conta gratuita para a Análise Técnica.',
      },
      {
        question: 'Hashes iguais provam que o documento é verdadeiro?',
        answer:
          'Não. Hashes iguais mostram apenas que os arquivos são idênticos. Não mostram quem os fez nem se o conteúdo é verdadeiro. Provar exige confirmar na fonte, no banco, no portal oficial ou com o emissor.',
      },
      {
        question: 'O guia substitui um parecer jurídico ou um laudo pericial?',
        answer:
          'Não. É orientação geral. Quando a questão exigir conclusão técnica, o guia recomenda procurar um profissional habilitado. O relatório em PDF do aplicativo também não é laudo pericial.',
      },
      {
        question: 'Meus arquivos são enviados para algum lugar?',
        answer:
          'Depende da ferramenta. As ferramentas gratuitas rodam no navegador; a Análise Técnica envia o arquivo ao MetaScope, que o processa em memória. Veja a tabela “O que sai do seu computador” nesta página e a Política de Privacidade.',
      },
    ],
  },
  final: {
    title: 'Baixe o guia e teste o MetaScope',
    description:
      'Leve o protocolo para a sua equipe e, quando quiser conferir um arquivo de verdade, abra o MetaScope com uma conta gratuita.',
    download: 'Baixar o guia grátis (PDF)',
    app: 'Abrir o MetaScope',
  },
  mobileDownload: 'Baixar o guia grátis (PDF)',
};

const en: GuideCopy = {
  language: 'en',
  ogLocale: 'en_US',
  metaTitle: 'Document Integrity Guide for Brazil (Free PDF) | MetaScope',
  metaDescription:
    'Free PDF guide to checking Brazilian boletos, NF-e invoices, contracts, photos and links before you act, and keeping what matters provable. In Portuguese, built for Brazil.',
  ogTitle: 'When the File Lies: a digital integrity guide built for Brazil',
  ogDescription:
    'How to check boletos, invoices, contracts, photos and links before you pay, sign or forward them. Free PDF, in Portuguese, no sign-up.',
  ogAlt: 'Cover of the guide Quando o arquivo engana: two files that look identical, with different SHA-256 hashes',
  schemaName: 'Quando o arquivo engana: a practical guide to digital security and file integrity for companies',
  schemaDescription:
    'Free Portuguese-language PDF guide with protocols to check Brazilian boletos, NF-e invoices, contracts, photos and links, and to preserve files with SHA-256 hashes.',
  breadcrumb: { home: 'Home', apps: 'MetaScope', guide: 'Digital integrity guide' },
  hero: {
    badge: 'Free PDF guide · in Portuguese · built for Brazil',
    title: 'When the File Lies',
    subtitle: 'A practical guide to digital file integrity and document-fraud checks, built for Brazil’s documents',
    description:
      'A bank slip carrying someone else’s barcode. An invoice that does not exist in the tax authority’s system. A contract nobody can match to the version that was sent. This guide shows how to check a file before you pay, sign or forward it, and how to keep what matters so you can prove it later.',
    download: 'Download the guide (PDF, Portuguese)',
    secondary: 'See what is Brazil-specific',
    note: 'No sign-up. 19 pages, 0.7 MB. Version 2, November 2026.',
    coverAlt: 'Cover of the guide: two files that look identical, with different SHA-256 hashes',
    langNote:
      'The PDF itself is in Portuguese (pt-BR), because it covers Brazilian documents and rules for the people who handle them. This page summarizes what applies anywhere and explains what is specific to Brazil.',
  },
  proof: [
    {
      title: 'Practical, not theoretical',
      description: 'Every page answers one question: what to do right now, in a few steps, for your line of work.',
    },
    {
      title: 'Honest about limits',
      description:
        'For each check, the guide says what it proves and what it does not. Verifying means looking for signs of a problem, not certifying that a document is genuine.',
    },
    {
      title: 'Built for Brazilian reality',
      description: 'Boletos, NF-e invoices, Pix, CPF and CNPJ tax IDs, ICP-Brasil signatures, fake court notices and the LGPD.',
    },
  ],
  hashDemo: {
    eyebrow: 'The core idea',
    title: 'Change one character and the hash changes in 61 of 64',
    description:
      'A SHA-256 hash is a file’s fingerprint: a 64-character code calculated from its content. Two files that look identical can have completely different hashes. This is how the guide teaches you to confirm that the file you received is the one that was sent. The idea works for any file, in any country.',
    originalLabel: 'Original file',
    alteredLabel: 'Copy with one character changed',
    caption: 'Example from the guide’s cover.',
    legend: 'Highlighted: the characters that changed.',
    ideasTitle: 'Three ideas that travel',
    ideas: [
      {
        title: 'Original file',
        description:
          'The file as it was generated or received. Messaging apps and email can recompress photos and strip the information hidden inside a file.',
      },
      {
        title: 'Verifying is not proving',
        description:
          'No alerts means nothing was found, not that the document is genuine. Proving requires confirming at the source.',
      },
      {
        title: 'Hash',
        description:
          'Same hash, identical files. But a hash does not say who made the file or whether its content is true.',
      },
    ],
  },
  brazil: {
    eyebrow: 'Built for Brazil',
    title: 'Where the guide gets specific: Brazil’s document ecosystem',
    description:
      'Fraud follows local paperwork. These are the Brazilian documents and rules the guide is built around, and what its companion tool, MetaScope, checks in each. They only apply to Brazilian documents.',
    columns: { term: 'Brazilian term', what: 'What it is', covers: 'What the guide covers' },
    rows: [
      {
        term: 'Boleto',
        what: 'Bank slip used to pay invoices, with a barcode and a typed payment line. A classic fraud target.',
        covers:
          'Barcode and payment-line digits, whether the printed amount matches the code, the beneficiary’s tax ID, and bank-specific fields on known layouts.',
      },
      {
        term: 'Pix QR Code',
        what: 'Brazil’s instant-payment system. Slips often embed a Pix QR Code.',
        covers: 'Checks that the QR Code matches the slip, without opening its address.',
      },
      {
        term: 'NF-e / DANFE',
        what: 'Electronic invoice, validated by the tax authority (SEFAZ) through a 44-digit access key, plus its printed PDF version.',
        covers:
          'Checks the access key and the issuer’s CNPJ on the PDF. It does not query SEFAZ: confirming the key on the official portal stays with you.',
      },
      {
        term: 'CPF / CNPJ',
        what: 'Individual and company tax IDs.',
        covers: 'Beneficiary ID check and, for a CNPJ, its status in the Receita Federal public database.',
      },
      {
        term: 'ICP-Brasil signatures',
        what: 'Brazil’s public-key infrastructure for legally recognized digital signatures. The government’s ITI runs the official validator.',
        covers:
          'Signed PDFs can be sent to the ITI validator. This is on by default and can be unticked before upload for confidential files.',
      },
      {
        term: 'Fake court notices',
        what: 'Scam messages posing as a summons, with a link to a “shared folder” on a look-alike domain.',
        covers: 'Link check for look-alike brands, mixed alphabets, hidden destinations and domain age, without opening the page.',
      },
      {
        term: 'LGPD',
        what: 'Brazil’s data-protection law, comparable in spirit to the GDPR.',
        covers: 'Flags sensitive data, such as medical certificates, that should not be uploaded without real doubt.',
      },
    ],
    note: 'The method (hashing, confirming through an independent channel, preserving the original) works for any file anywhere. The checks above apply only to Brazilian documents.',
    imageAlt: 'Guide page on accounting and finance: situation, risk and what to do for a boleto, invoice and payment receipt',
  },
  flows: {
    eyebrow: 'The four workflows',
    title: 'Receive, send, keep and verify',
    description: 'The whole guide is organized around four situations that repeat in any organization.',
    items: [
      {
        title: 'Receive with care',
        description:
          'Keep the original, screen the boleto, invoice or contract, confirm the critical detail through another channel, and only then pay, approve or file it.',
        tag: 'Before paying',
      },
      {
        title: 'Send with a seal',
        description:
          'Calculate the hash of the final file and send it along. The recipient checks that they received exactly what you sent.',
        tag: 'Before sending',
      },
      {
        title: 'Keep it to prove it later',
        description:
          'Register contracts, inspection photos and delivery receipts so you can show, months later, that they were not changed.',
        tag: 'For the future',
      },
      {
        title: 'Check a link',
        description:
          'Unexpected links from email, SMS and WhatsApp, fake court notices and shared folders, analyzed without opening the page.',
        tag: 'Before clicking',
      },
    ],
  },
  protocol: {
    eyebrow: 'When something looks wrong',
    title: 'Suspect it? Stop here.',
    description:
      'Use it when an analysis flags a problem, when two hashes do not match or when something just looks off. Seven steps, in this order.',
    steps: [
      { title: 'Stop', description: 'Do not pay, sign, forward or use the file.' },
      { title: 'Preserve', description: 'Do not edit, convert or overwrite the file you received.' },
      { title: 'Record', description: 'Date, channel, claimed sender, person responsible and the transaction.' },
      { title: 'Confirm', description: 'Contact the issuer through an independent channel.' },
      { title: 'Compare', description: 'Recalculate the hash and make sure you are comparing the same versions.' },
      { title: 'Escalate', description: 'Manager, finance, legal or information security.' },
      { title: 'Document', description: 'What was checked, what was decided and by whom.' },
    ],
    channelTitle: 'An independent channel is',
    channel:
      'Your bank’s own app, checking the beneficiary before you pay; the official portal, such as the NF-e lookup; a phone number or address you already had. Never the contact that came in the suspicious message.',
    warningTitle: 'Note',
    warning:
      'Different hashes do not prove fraud. Re-saving, converting or compressing a file also changes its hash. But the cause has to be explained before moving on.',
    imageAlt: 'Guide page “Suspect it? Stop here” with the seven-step protocol, in Portuguese',
  },
  inside: {
    eyebrow: 'Inside the PDF',
    title: 'What else is in the Portuguese edition',
    description:
      'Beyond the sections summarized here, the PDF has material written around Brazilian practice. It is not translated.',
    items: [
      {
        title: 'Sector chapters',
        description:
          'Accounting and finance, law, HR, and property, construction and logistics. Each lists the typical situation, the risk and what to do.',
      },
      {
        title: 'Implementation kit',
        description:
          'A 20-question checklist, a message template for recipients, a send-record form and a summarized internal policy.',
      },
      {
        title: 'Privacy table',
        description: 'What stays in your browser and what is uploaded, tool by tool, with a note on the LGPD.',
      },
      {
        title: 'A page on limits',
        description: 'Six things the checks do not prove, including “no alerts is not a guarantee”.',
      },
    ],
  },
  limits: {
    eyebrow: 'Transparency',
    title: 'What none of this proves',
    description:
      'The guide spends a full page on limits. It is what separates serious guidance from a security promise.',
    items: [
      {
        title: 'A hash is not a certificate of authenticity',
        description: 'It shows that two files are identical. It does not show authorship, origin, truthfulness or creation date.',
      },
      {
        title: 'The Guardian registry is not chain of custody or a signature',
        description: 'It records that certain hashes were declared and sealed on a date.',
      },
      {
        title: 'Screening is not forensic examination',
        description:
          'Scores and alerts are indications and risks, not legal decisions. When a question needs a technical conclusion, consult a qualified professional.',
      },
      {
        title: 'No alerts is not a guarantee',
        description: 'A consistent boleto can still be fraud. An invoice may not exist at SEFAZ. A clean link can come from someone you did not expect.',
      },
      {
        title: 'Metadata decides nothing on its own',
        description: 'Its absence does not prove fraud, and its presence does not prove authenticity.',
      },
      {
        title: 'It is general guidance',
        description:
          'Not legal advice, an audit, an expert report or a certification, and it does not replace your organization’s own policies.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'What leaves your computer',
    description: 'The guide explains, tool by tool, what is uploaded and what stays in your browser. This is the summary.',
    columns: { tool: 'Tool', what: 'What happens' },
    rows: [
      { tool: 'Academy and free tools', what: 'Run in your browser. Nothing is uploaded.' },
      {
        tool: 'Guardian (integrity registry)',
        what: 'File contents never leave your device. The hash, name, size and type of each file are sent.',
      },
      {
        tool: 'Technical Analysis',
        what: 'The file is uploaded and processed in server memory, with no AI and nothing written to disk. Videos use a temporary file that is deleted right after.',
      },
      {
        tool: 'Digitally signed PDF',
        what: 'By default the whole file goes to the Brazilian government’s ITI validator. For confidential files, untick the option before uploading.',
      },
      { tool: 'Links', what: 'The address text is analyzed and the domain is looked up in public records. The page is never opened.' },
      {
        tool: 'Deep Research (optional, uses AI)',
        what: 'Sends content to OpenAI. The link address also goes to Google Web Risk.',
      },
    ],
    retention:
      'For each analysis, MetaScope keeps the file name, type, size, hash and a result summary. The name and summary are deleted after 12 months; the rest is kept for 5 years, as is the custody record.',
    policyLabel: 'MetaScope Privacy Policy',
    policyUrl: 'https://app.metascopeforense.com/privacy',
    disclaimer:
      'The LGPD deals with legal obligations; the guide gives technical recommendations. Decide with your legal team what may be sent to external services.',
  },
  verify: {
    title: 'Verify this download',
    description:
      'A guide about file integrity should let you check its own file. This is the SHA-256 of the PDF published on this page.',
    hashLabel: 'PDF SHA-256',
    commandsLabel: 'To calculate it on your own computer, without uploading the file anywhere:',
    windows: 'Windows',
    unix: 'Linux or macOS',
  },
  about: {
    eyebrow: 'Published by',
    title: 'MetaScope Forense',
    description:
      'A Brazilian digital forensics platform, developed by Investigação Forense. The guide comes from hands-on work with the documents and scams that most often hit Brazilian companies.',
    author: 'Tales Giuliano Vieira',
    authorRole: 'Forensic expert, professor and researcher in digital forensics and investigations.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is the guide free? Do I need to sign up?',
        answer: 'It is free and the download is direct, with no sign-up. It is a 19-page PDF of 0.7 MB.',
      },
      {
        question: 'Why is the PDF in Portuguese?',
        answer:
          'Because it covers Brazilian documents and rules, such as boletos, NF-e invoices, ICP-Brasil signatures and the LGPD, for the people who handle them. This page summarizes the parts that apply anywhere and flags the parts that are Brazil-specific.',
      },
      {
        question: 'Is it useful if I do not handle Brazilian documents?',
        answer:
          'The method is: keep the original, hash what you need to prove later, confirm critical details through an independent channel and know what a check does not prove. The document-specific checks (boleto, NF-e, ICP-Brasil, SEFAZ) only apply to Brazilian paperwork.',
      },
      {
        question: 'Does a matching hash prove a document is genuine?',
        answer:
          'No. A matching hash only shows that two files are identical. It does not show who made them or whether their content is true. Proving requires confirming at the source: the bank, the official portal or the issuer.',
      },
      {
        question: 'Does the guide replace legal advice or a forensic expert report?',
        answer:
          'No. It is general guidance. When a question needs a technical conclusion, the guide recommends a qualified professional. The PDF report generated by the app is not an expert report either.',
      },
      {
        question: 'Are my files uploaded anywhere?',
        answer:
          'It depends on the tool. The free tools run in your browser; Technical Analysis uploads the file to MetaScope, which processes it in memory. See the “What leaves your computer” table on this page and the Privacy Policy.',
      },
    ],
  },
  final: {
    title: 'Download the guide and try MetaScope',
    description:
      'Bring the protocol to your team and, when you want to check a real file, open MetaScope with a free account.',
    download: 'Download the guide (PDF, Portuguese)',
    app: 'Open MetaScope',
  },
  mobileDownload: 'Download the guide (PDF, Portuguese)',
};

export const guideCopy: Record<Locale, GuideCopy> = { pt, en };
