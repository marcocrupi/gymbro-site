export default function PrivacyPt() {
  const updated = new Date().toLocaleDateString('pt-PT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container privacy">
      <h1>Política de Privacidade da app GymBroTools</h1>
      <p className="muted">Última atualização: {updated}</p>

      <h2>1. Introdução e âmbito de aplicação</h2>
      <p>
        A GymBroTools é uma aplicação móvel de fitness disponível a nível
        mundial. A presente Política de Privacidade descreve como a GymBroTools
        recolhe, utiliza e protege os dados pessoais dos utilizadores. A app é
        desenvolvida e gerida por um único programador independente (não uma
        empresa) e está empenhada em salvaguardar a privacidade de todos os
        utilizadores.
      </p>
      <p>
        <strong>IMPORTANTE:</strong> a app destina-se a utilizadores com 13 anos
        ou mais. A utilização da app por menores de 13 anos não é permitida.
      </p>
      <p>
        A presente política aplica-se a todos os serviços oferecidos através da
        app GymBroTools.
      </p>

      <h2>2. Menores</h2>
      <p>
        <strong>Menores de 13 anos:</strong> a GymBroTools não se destina a
        menores de 13 anos e não recolhemos intencionalmente dados pessoais de
        crianças com menos dessa idade. Se um pai ou tutor considerar que um
        menor de 13 anos forneceu dados pessoais através da app, convidamo-lo a
        contactar-nos imediatamente através de{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> para
        solicitar a sua eliminação.
      </p>
      <p>
        <strong>Utilizadores de 13 a 17 anos:</strong> os menores de idade
        (13-17 anos) podem utilizar a app. Recomenda-se a supervisão de um pai
        ou tutor para garantir uma utilização responsável da aplicação.
      </p>

      <h2>3. Tipos de dados recolhidos</h2>
      <p>
        Não recolhemos dados pessoais identificáveis salvo o estritamente
        necessário para o funcionamento da app. Em particular, a GymBroTools
        recolhe as seguintes categorias de dados:
      </p>
      <p>
        <strong>Dados fornecidos pelo utilizador:</strong> informação que o
        utilizador introduz voluntariamente, como dados de registo (por
        exemplo, e-mail ou nome de utilizador) e detalhes dos treinos (séries,
        repetições, cargas). Estes dados servem para criar a conta e permitir ao
        utilizador guardar e consultar os seus treinos. A informação inserida
        permanece privada, visível apenas para o próprio utilizador e não é
        partilhada com outros utilizadores ou terceiros, exceto conforme
        descrito nesta política. Importante: a GymBroTools não solicita nem
        recolhe quaisquer dados pessoais «sensíveis» ou biológicos, como dados
        biométricos, informação de saúde, fotos, localização GPS, contactos ou
        outros dados desnecessários ao uso da app.
      </p>
      <p>
        <strong>Dados técnicos de utilização (telemetria):</strong> a app
        utiliza o Microsoft Application Insights para recolher automaticamente
        dados técnicos anónimos sobre a utilização e o funcionamento da
        aplicação. Esta informação inclui, por exemplo, registos de erros,
        métricas de desempenho, dados do dispositivo (modelo, sistema
        operativo) e eventos técnicos gerais (por exemplo, carregamento de um
        ecrã ou chamada a uma API). Esta telemetria não contém dados pessoais
        identificáveis: não são registados nomes, e-mails, moradas ou conteúdos
        pessoais dos utilizadores. Configurámos a telemetria para excluir
        informação potencialmente identificável (por exemplo, URLs completas,
        endereços de e-mail, IDs de utilizador) e recolher apenas os dados úteis
        para garantir a estabilidade e a segurança da app. O Application
        Insights está sempre ativo para monitorizar o estado da aplicação e é
        configurado com amostragem limitada (em produção) para minimizar a
        quantidade de dados recolhidos.
      </p>
      

      <h2>4. Finalidades do tratamento</h2>
      <p>
        Tratamos os dados recolhidos para as seguintes finalidades, em
        conformidade com os princípios de licitude e minimização dos dados:
      </p>
      <p>
        <strong>Prestar o serviço e as funcionalidades da app:</strong>
        utilizamos os dados fornecidos pelo utilizador (por exemplo, conta e
        dados de treinos) para lhe permitir registar-se, aceder ao seu perfil,
        guardar exercícios e visualizar estatísticas. Este tratamento é
        essencial para o funcionamento da GymBroTools e para disponibilizar as
        funcionalidades solicitadas (por exemplo, sincronizar os treinos entre
        dispositivos em modo offline-first).
      </p>
      <p>
        <strong>Melhorar a estabilidade, a segurança e o desempenho:</strong>
        os dados técnicos recolhidos através do Application Insights são
        utilizados exclusivamente para monitorizar o estado da app, identificar
        erros, prevenir falhas, analisar o desempenho e garantir a segurança do
        serviço. Esta informação ajuda-nos a corrigir erros, otimizar a
        infraestrutura e assegurar que a app funciona de forma fiável em
        diferentes dispositivos.
      </p>
      
      <p>
        <strong>Comunicações de suporte:</strong> os dados de contacto (como o
        e-mail fornecido no registo) podem ser utilizados para comunicações de
        serviço estritamente relacionadas com a app, por exemplo, para responder
        a pedidos de suporte técnico ou enviar avisos importantes sobre o seu
        funcionamento. A GymBroTools não envia newsletters promocionais nem
        comunicações de marketing não solicitadas.
      </p>
      <p>
        Os dados nunca são utilizados para fins de perfilagem comercial,
        publicidade de terceiros ou decisões automatizadas que produzam efeitos
        jurídicos sobre o utilizador. Todo o tratamento é limitado às
        finalidades descritas acima.
      </p>

      <h2>5. Base jurídica do tratamento</h2>
      <p>
        Tratamos os dados pessoais dos utilizadores apenas quando existe uma
        base legal segundo a legislação aplicável (Regulamento UE 2016/679
        «RGPD» e leis equivalentes noutras jurisdições). Relativamente às
        finalidades acima, as bases jurídicas são:
      </p>
      <p>
        <strong>Execução de um contrato ou medidas pré-contratuais:</strong>
        para os dados fornecidos diretamente pelo utilizador (como dados da
        conta e dos treinos), o tratamento é necessário para prestar o serviço
        solicitado. Quando o utilizador cria uma conta e utiliza a GymBroTools,
        estabelece-se uma relação contratual implícita: os seus dados são
        tratados para permitir o uso da app e das suas funcionalidades (art.
        6(1)(b) RGPD). Sem estes dados, não poderíamos disponibilizar o registo,
        o armazenamento de exercícios e outras funcionalidades essenciais da app.
      </p>
      <p>
        <strong>Interesse legítimo:</strong> o tratamento da telemetria técnica
        através do Application Insights baseia-se no interesse legítimo do
        programador (art. 6(1)(f) RGPD). Esse interesse consiste em garantir a
        estabilidade, a segurança e a melhoria contínua do serviço, em benefício
        do programador e dos utilizadores. Avaliámos que este tratamento,
        limitado a dados técnicos anónimos, não prejudica os direitos e as
        liberdades dos utilizadores (também graças à ausência de informação
        pessoal identificável). A app requer, de qualquer forma, a aceitação dos
        Termos e da Privacidade na instalação, tornando os utilizadores cientes
        desta telemetria básica. O utilizador tem o direito de se opor por
        motivos relacionados com a sua situação particular (ver secção Direitos),
        tendo em conta que a telemetria é fundamental para prevenir
        mau-funcionamentos e proteger os dados.
      </p>
      
      <p>
        Para além destas bases principais, a GymBroTools pode tratar dados
        pessoais para cumprir obrigações legais aplicáveis (art. 6(1)(c) RGPD)
        ou para proteger interesses vitais dos utilizadores ou de terceiros
        (situações raras, art. 6(1)(d)), embora, na prática, estas circunstâncias
        não ocorram no uso normal da app.
      </p>

      <h2>6. Modalidades do tratamento e prazos de conservação</h2>
      <p>
        Tratamos os dados pessoais dos utilizadores principalmente em formato
        eletrónico e automatizado, adotando medidas de segurança adequadas para
        prevenir acessos não autorizados, divulgação ou alteração dos dados. Os
        dados são armazenados em servidores seguros (por exemplo, infraestrutura
        cloud da Microsoft Azure) e protegidos com técnicas de cifragem e
        controlo de acessos. O programador único da GymBroTools é a única pessoa
        com acesso direto aos dados para a operação da app, tratando-os de forma
        estritamente confidencial. Não há outro pessoal ou terceiros que acedam a
        dados pessoais, exceto os serviços externos mencionados (Microsoft), que
        atuam como fornecedores técnicos conforme descrito.
      </p>
      <p>
        Conservamos os dados apenas pelo tempo necessário para atingir as
        finalidades para as quais foram recolhidos, após o que procedemos à sua
        eliminação ou anonimização. Seguem-se os prazos específicos de
        conservação para cada tipo de dado:
      </p>
      <p>
        <strong>Dados de conta e de treinos:</strong> a informação fornecida pelo
        utilizador (por exemplo, e-mail de registo, nome de utilizador,
        séries/repetições/cargas guardadas) é conservada enquanto a conta se
        mantiver ativa. Na prática, estes dados permanecem armazenados enquanto o
        utilizador continuar a usar a app e mantiver a sua conta ativa, para que
        possa aceder ao histórico de treinos. O utilizador pode sempre alterar
        ou eliminar dados individuais (por exemplo, remover um treino)
        diretamente na app. Pode também solicitar, a qualquer momento, a
        eliminação completa da conta (ver Direitos dos utilizadores); nesse caso,
        todos os dados pessoais associados serão eliminados de forma permanente
        dos nossos sistemas num curto prazo técnico. Poderão ser conservados
        dados limitados após a eliminação apenas de forma agregada ou anónima, ou
        para cumprir obrigações legais (por exemplo, registos de segurança), mas
        não de forma a identificar o utilizador.
      </p>
      <p>
        <strong>Telemetria técnica (Application Insights):</strong> os dados
        recolhidos automaticamente sobre erros e desempenho através do
        Application Insights são conservados por um período máximo de 90 dias.
        Este limite está alinhado com as definições padrão da plataforma e visa
        manter um histórico recente para análise e depuração, sem reter
        informação por mais tempo do que o necessário. Após cerca de 90 dias, os
        registos e telemetrias mais antigos são eliminados ou sobrescritos
        automaticamente. Em qualquer caso, tratando-se de dados anónimos, não é
        possível associar estas informações a um utilizador específico, e a sua
        eliminação ocorre em conformidade com as políticas de retenção do
        Microsoft Azure Application Insights.
      </p>
      
      <p>
        <strong>Transferência de dados para o estrangeiro:</strong> os dados
        pessoais recolhidos pela GymBroTools podem ser transferidos e tratados
        em países fora do Espaço Económico Europeu (EEE), em particular quando os
        servidores dos fornecedores cloud utilizados — como a Microsoft Azure —
        se encontram localizados fora do EEE. Nestes casos, asseguramos a
        adoção de garantias adequadas para a proteção dos dados, como a
        utilização de Cláusulas Contratuais-Tipo aprovadas pela Comissão
        Europeia ou outros instrumentos legais previstos na legislação
        aplicável, de modo a garantir um nível de proteção equivalente ao exigido
        pelo RGPD.
      </p>
      <p>
        No termo dos períodos indicados acima, os dados são eliminados de forma
        segura ou anonimizados de forma irreversível (de modo a não poderem mais
        ser associados a um utilizador). Recordamos que o utilizador pode sempre
        solicitar a eliminação antecipada dos seus dados pessoais, e a
        GymBroTools dará seguimento a esses pedidos dentro dos prazos previstos
        por lei (ver Direitos dos utilizadores).
      </p>

      <h2>7. Direitos dos utilizadores</h2>
      <p>
        Os utilizadores da GymBroTools, na qualidade de titulares dos dados,
        gozam de um conjunto de direitos em matéria de proteção de dados
        pessoais. Em particular, o utilizador pode, a qualquer momento, exercer
        os seguintes direitos:
      </p>
      <p>
        <strong>Direito de acesso:</strong> direito de obter a confirmação de que
        dados pessoais que lhe digam respeito são ou não objeto de tratamento e,
        sendo esse o caso, de aceder a esses dados, bem como a informações sobre
        finalidades, categorias de dados tratados, destinatários, prazo de
        conservação e existência dos demais direitos aqui elencados. Na prática,
        o utilizador pode solicitar uma cópia dos seus dados na nossa posse e
        informações sobre como os utilizamos.
      </p>
      <p>
        <strong>Direito de retificação:</strong> direito de obter a correção dos
        dados pessoais inexatos que lhe digam respeito e a que os dados
        incompletos sejam completados. O utilizador pode corrigir os seus dados
        diretamente na app, quando aplicável (por exemplo, dados da conta), ou
        contactando-nos para atualizações.
      </p>
      <p>
        <strong>Direito ao apagamento («direito a ser esquecido»):</strong>
        direito de obter o apagamento dos dados pessoais que lhe digam respeito
        quando estes já não forem necessários para as finalidades para que foram
        recolhidos ou quando o consentimento for retirado (nos casos em que o
        tratamento se baseie no consentimento), sem prejuízo de obrigações
        legais que possam exigir a sua conservação. Na prática, o utilizador pode
        solicitar a eliminação da sua conta e dos dados pessoais associados; na
        sequência do pedido, os dados serão permanentemente eliminados dos
        nossos sistemas num curto prazo técnico.
      </p>
      <p>
        <strong>Direito à limitação do tratamento:</strong> direito de obter a
        limitação do tratamento dos dados pessoais em determinadas
        circunstâncias (por exemplo, quando a exatidão é contestada ou o
        tratamento é ilícito e o utilizador, em vez do apagamento, solicita a
        limitação).
      </p>
      <p>
        <strong>Direito à portabilidade dos dados:</strong> direito de receber os
        dados pessoais que lhe digam respeito e que nos tenha fornecido, num
        formato estruturado, de uso corrente e de leitura automática, e de
        transmitir esses dados a outro responsável, quando tecnicamente possível
        e quando o tratamento se baseie no consentimento ou num contrato.
      </p>
      <p>
        <strong>Direito de oposição:</strong> direito de se opor, por motivos
        relacionados com a sua situação particular, ao tratamento baseado no
        interesse legítimo (como a telemetria técnica através do Application
        Insights).
      </p>
      <p>
        <strong>Direito de apresentar reclamação:</strong> se o utilizador
        entender que o tratamento dos seus dados viola a legislação de proteção
        de dados, tem o direito de apresentar reclamação à autoridade de controlo
        competente. Para os utilizadores na União Europeia, a autoridade
        principal é a Autoridade de Proteção de Dados italiana (ou outra
        autoridade local competente consoante o país de residência do
        utilizador). Ainda assim, convidamos os utilizadores a contactar-nos em
        primeiro lugar para qualquer dúvida ou pedido, para podermos resolver a
        questão de forma amigável.
      </p>
      <p>
        A GymBroTools não vende, nem tenciona vender, os dados pessoais dos
        utilizadores, conforme previsto no California Consumer Privacy Act
        (CCPA). Os utilizadores da Califórnia podem exercer os seus direitos
        escrevendo para <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>
      <p>
        Para exercer os seus direitos, o utilizador pode contactar-nos a
        qualquer momento através do e-mail
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>. Os
        pedidos serão atendidos dentro dos prazos previstos por lei (normalmente
        até 30 dias, prorrogáveis em caso de pedidos complexos) e sem custos
        para o utilizador, exceto pedidos manifestamente infundados ou
        excessivos.
      </p>

      <h2>8. Segurança e proteção de dados</h2>
      <p>
        A segurança dos dados dos nossos utilizadores é uma prioridade.
        Implementámos medidas técnicas e organizativas adequadas para proteger os
        dados pessoais contra acessos não autorizados, divulgação indevida,
        alteração ou destruição. Em particular:
      </p>
      <p>
        Todas as comunicações entre a app GymBroTools e o servidor ocorrem via
        protocolo seguro HTTPS, garantindo que os dados transmitidos (como
        credenciais de autenticação ou atualizações de treinos) são cifrados em
        trânsito e não podem ser intercetados por terceiros.
      </p>
      <p>
        Os dados dos utilizadores (incluindo dados de conta e de exercícios) são
        armazenados em servidores cloud seguros fornecidos pela Microsoft Azure.
        Estes servidores beneficiam de medidas de segurança avançadas da
        Microsoft, como cifragem dos dados em repouso, firewalls, sistemas de
        prevenção de intrusões e monitorização contínua de vulnerabilidades.
        Apenas o programador autorizado pode aceder a estes sistemas, e apenas
        por motivos de manutenção e operação da app.
      </p>
      <p>
        As credenciais de autenticação e outras informações sensíveis são
        geridas de forma segura. A GymBroTools integra o Microsoft Entra ID
        (Azure AD) para autenticação: isto significa que a app não armazena
        palavras-passe em texto simples nas suas bases de dados, confiando na
        Microsoft a gestão segura do acesso (por exemplo, através de tokens
        OIDC/PKCE). Quaisquer tokens de autenticação são armazenados de forma
        segura no dispositivo do utilizador e não são acessíveis por outras apps.
      </p>
      <p>
        Configurámos os serviços de telemetria para minimizar os dados
        recolhidos e anonimizamos qualquer informação potencialmente pessoal. Por
        exemplo, o Application Insights não utiliza cookies na app (sendo uma
        app móvel) e remove automaticamente referências potenciais a
        identificadores pessoais nos registos.
      </p>

      <h2>9. Responsável pelo tratamento e contactos</h2>
      <p>
        O responsável pelo tratamento de dados da app GymBroTools é Marco Crupi,
        programador independente, contactável através do e-mail
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> para
        qualquer pedido relacionado com a privacidade e a proteção de dados
        pessoais.
      </p>

      <h2>10. Alterações e atualizações da Política de Privacidade</h2>
      <p>
        A presente Política de Privacidade pode ser objeto de alterações e
        atualizações ao longo do tempo, nomeadamente devido a mudanças
        regulamentares, evoluções tecnológicas ou atualizações das
        funcionalidades da app. Em caso de alterações relevantes, informaremos
        os utilizadores através de notificações na app ou outros canais
        apropriados. Recomendamos que os utilizadores consultem periodicamente
        esta política para se manterem informados sobre a forma como os dados
        pessoais são tratados.
      </p>
    </div>
  )
}
