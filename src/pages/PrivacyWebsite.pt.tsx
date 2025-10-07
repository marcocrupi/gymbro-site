export default function PrivacyWebsitePt() {
  const updated = new Date().toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <div className="container privacy">
      <h1>Política de Privacidade e Cookies — Site</h1>
      <p className="muted">Última atualização: {updated}</p>

      <h2>1. Âmbito do aviso</h2>
      <p>
        Este aviso aplica-se exclusivamente ao <strong>site</strong> da
        GymBroTools (site estático, alojado no GitHub Pages, com domínio
        personalizado). Para a privacidade da <strong>app móvel</strong>,
        consulte a página dedicada: <a href="/privacy">Privacidade da app</a>.
      </p>

      <h2>2. Responsável pelo tratamento e contacto</h2>
      <p>
        Responsável: Marco Crupi — Email: {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
      </p>

      <h2>3. Tipos de dados tratados através do site</h2>
      <p>
        <strong>Dados de navegação e registos técnicos (alojamento):</strong>
        durante a visita podem ser gerados e tratados dados como endereço IP,
        <em>user‑agent</em> do navegador, data/hora, URL solicitada, <em>referrer</em>
        e outras informações técnicas necessárias à prestação do serviço e à
        segurança (p. ex., prevenção de abusos). Estes dados são geridos pelo
        fornecedor de alojamento/CDN utilizado pelo site.
      </p>
      <p>
        <strong>Cookies e tecnologias semelhantes:</strong> o site <strong>não</strong>
        utiliza cookies de perfilização nem ferramentas de rastreio de
        terceiros. Não são instalados píxeis, sistemas de analítica ou plugins
        sociais. Utilizamos apenas um <em>armazenamento técnico</em> local para
        memorizar o idioma preferido: chave <code>"gymbro.lang"</code> no
        <code>localStorage</code> do navegador. Este registo é opcional e pode
        ser apagado a qualquer momento nas definições do navegador.
      </p>
      <p>
        <strong>Formulários e envios voluntários:</strong> o site não inclui
        formulários de contacto nem áreas de registo. Se nos contactar por
        email, utilizaremos os dados facultados exclusivamente para responder.
      </p>

      <h2>4. Finalidades e bases jurídicas</h2>
      <p>
        <strong>Prestação do site e segurança</strong> (registos técnicos/
        alojamento): base jurídica o <em>interesse legítimo</em> do
        Responsável em assegurar uma experiência segura e contínua no site
        (art. 6.º, n.º 1, al. f), RGPD).
      </p>
      <p>
        <strong>Preferência de idioma</strong> (armazenada em {" "}
        <code>localStorage</code>): base jurídica a <em>necessidade de execução
        de medidas pré-contratuais/contratuais</em> e o interesse legítimo em
        proporcionar uma experiência coerente (art. 6.º, n.º 1, als. b) e f),
        RGPD). Não é necessário consentimento por se tratar de uma ferramenta
        técnica não destinada ao rastreio.
      </p>

      <h2>5. Conservação</h2>
      <p>
        O site não mantém bases de dados próprias de dados pessoais. Os
        eventuais registos técnicos são geridos pelo fornecedor de alojamento e
        conservados pelos prazos por ele indicados. A preferência de idioma
        permanece no seu navegador até ser apagada manualmente ou até limpar o
        armazenamento do site.
      </p>

      <h2>6. Destinatários e alojamento</h2>
      <p>
        O site está alojado em <strong>GitHub Pages</strong> (GitHub, Inc.) e
        pode utilizar uma rede de distribuição de conteúdos (CDN). Estes
        fornecedores podem tratar os dados técnicos necessários para prestar o
        serviço e garantir a sua segurança. Mais informações estão disponíveis na
        {" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Declaração de Privacidade do GitHub
        </a>
        .
      </p>

      <h2>7. Transferências para fora da UE</h2>
      <p>
        A infraestrutura de alojamento/CDN pode implicar transferências para
        países fora da UE/EEE. Nesses casos, os fornecedores aplicam as medidas
        previstas no RGPD (p. ex., Cláusulas Contratuais‑Tipo). Para mais
        detalhes, consulte o aviso do fornecedor indicado acima.
      </p>

      <h2>8. Direitos do titular dos dados</h2>
      <p>
        Tem direito de acesso, retificação, apagamento, limitação, oposição e
        portabilidade, bem como o direito de apresentar reclamação à Autoridade
        de Controlo competente. Para exercer os seus direitos, contacte o
        Responsável por email em {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>

      <h2>9. Segurança</h2>
      <p>
        O site é estático e não expõe áreas autenticadas nem formulários de
        recolha de dados. O fornecedor de alojamento adota medidas técnicas e
        organizativas adequadas; o Responsável seleciona fornecedores fiáveis e
        minimiza os dados tratados.
      </p>

      <h2>10. Atualizações</h2>
      <p>
        O presente aviso pode ser atualizado para refletir alterações legais ou
        técnicas. As versões atualizadas são publicadas nesta página.
      </p>

      <p className="muted">
        Ligações úteis: <a href="/privacy">Privacidade da app</a> · {" "}
        <a href="/terms">Termos e Condições</a>
      </p>
    </div>
  )
}

