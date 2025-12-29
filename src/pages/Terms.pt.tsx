import { Link } from 'react-router-dom'

export default function TermsPt() {
  const updated = new Date().toLocaleDateString('pt-PT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container terms">
      <h1>Termos e Condições da GymBroTools</h1>
      <p className="muted">Última atualização: {updated}</p>

      <h2>Aceitação dos Termos</h2>
      <p>
        Os presentes Termos e Condições regulam a utilização da aplicação móvel
        GymBroTools. A App é propriedade de Marco Crupi, programador
        independente. Ao aceder ou utilizar a App, declara que leu, compreendeu
        e aceita integralmente estes Termos. Se não concordar com alguma das
        disposições abaixo, não utilize a App. A utilização contínua da App
        implica a aceitação da versão dos Termos em vigor.
      </p>
      <p>
        O uso da App está igualmente sujeito à aceitação da respetiva{' '}
        <Link to="/privacy">Política de Privacidade</Link>, disponível em
        separado. A Política de Privacidade descreve como são recolhidos e
        tratados os dados pessoais dos utilizadores. Ao utilizar a App,
        confirma que tomou conhecimento desse aviso. Em caso de conflito entre
        estes Termos e a Política de Privacidade relativamente ao tratamento de
        dados, prevalecerá a Política de Privacidade no que respeita à
        confidencialidade e proteção de dados.
      </p>

      <h2>Requisitos de Idade</h2>
      <p>
        A App destina‑se a utilizadores com 13 anos ou mais. Ao utilizar a
        GymBroTools, declara ter pelo menos 13 anos e possuir a capacidade de
        aceitar estes Termos.
      </p>
      <p>
        O Titular não recolhe intencionalmente dados, nem presta serviços, a
        menores de 13 anos. Caso se verifique que um menor de 13 anos está a
        utilizar a App, o Titular poderá adotar as medidas adequadas, incluindo
        a eliminação da conta associada.
      </p>
      <p>
        Os utilizadores de 13 a 17 anos podem utilizar livremente a App.
        Recomenda-se a supervisão de um pai ou tutor para garantir uma
        utilização responsável.
      </p>

      <h2>Descrição da App e Funcionalidades</h2>
      <p>
        A GymBroTools é uma aplicação móvel «offline‑first» dedicada ao treino
        de ginásio, ao culturismo e ao fitness. A App permite registar treinos,
        definir temporizadores, acompanhar estatísticas de progresso e criar
        planos de treino, tudo com suporte multilingue. A App pode funcionar sem
        ligação e sincroniza os dados com um backend na cloud (baseado em .NET 8
        e contenedorizado no Azure) sempre que exista ligação à Internet,
        assegurando uma experiência fluida e resiliente.
      </p>
      <p>
        Para aceder a todas as funcionalidades, deve registar‑se através do
        sistema de autenticação integrado (gerido por Microsoft Entra External
        ID). Uma vez autenticado, obtém uma conta com a qual pode guardar os
        seus dados de treino com segurança. O backend utiliza APIs REST
        protegidas por tokens JWT e mecanismos de refresh tokens para garantir a
        segurança e a confidencialidade dos dados. É responsável por qualquer
        atividade realizada através da sua conta e deve manter confidenciais as
        credenciais de acesso (por exemplo, as do seu conta Microsoft). Em caso
        de acesso não autorizado ou suspeita de violação de segurança, deverá
        informar de imediato o Titular.
      </p>

      <h2>Propriedade Intelectual</h2>
      <p>
        Todos os conteúdos, software, design, o nome e o logótipo GymBroTools e
        os demais elementos presentes na App são propriedade exclusiva do
        Titular (Marco Crupi) ou dos seus licenciantes e estão protegidos pelas
        leis e tratados internacionais em matéria de direitos de autor, marcas,
        patentes e/ou outros direitos de propriedade intelectual. Reconhece que
        tais direitos pertencem ao Titular e compromete‑se a não praticar atos
        incompatíveis com os direitos de propriedade intelectual do Titular.
      </p>
      <p>
        Para o exclusivo fim de utilizar a App, é‑lhe concedida uma licença
        pessoal, limitada, não exclusiva e intransmissível para usar a
        GymBroTools nos seus próprios dispositivos, de acordo com estes Termos.
        É expressamente proibido: (a) copiar, modificar, distribuir, vender ou
        sublicenciar partes da App; (b) descompilar, desassemblar ou proceder a
        engenharia reversa da App, salvo na medida expressamente permitida por
        lei; (c) utilizar indevidamente a App ou os seus conteúdos de modo não
        conforme com a sua finalidade pessoal e não comercial. Qualquer
        utilização da App não autorizada por estes Termos ou pela lei é
        proibida e poderá resultar na suspensão da sua conta e/ou em ações
        legais pelo Titular para proteção dos seus direitos.
      </p>

      <h2>Utilização Permitida e Obrigações do Utilizador</h2>
      <p>
        Compromete‑se a utilizar a App em conformidade com a lei, a ordem
        pública e estes Termos. Em particular, ao utilizar a GymBroTools é
        proibido:
      </p>
      <ul>
        <li>
          <strong>Usos ilegais ou indevidos:</strong> utilizar a App para fins
          ilegais, ilícitos ou não autorizados. Isto inclui, a título de
          exemplo, a violação de direitos de terceiros ou a difusão de conteúdos
          ilícitos, ofensivos ou que incitem à violência ou ao ódio.
        </li>
        <li>
          <strong>Interferência com o serviço:</strong> tentar comprometer,
          contornar ou interferir com o funcionamento normal da App, dos
          servidores ou das redes a ela ligadas. Não deve introduzir malware,
          vírus, worms ou qualquer outro código nocivo na App, nem realizar
          scraping, crawling ou extração não autorizada de dados.
        </li>
        <li>
          <strong>Acessos não autorizados:</strong> aceder, ou tentar aceder, a
          contas de outros utilizadores ou a sistemas do Titular aos quais não
          esteja autorizado. Não deve personificar terceiros nem declarar falsamente
          a sua identidade na utilização da App.
        </li>
        <li>
          <strong>Utilização comercial ou não pessoal:</strong> explorar a App
          ou qualquer das suas partes, incluindo conteúdos multimédia sobre
          exercícios, para fins comerciais não autorizados pelo Titular. A App é
          destinada ao uso pessoal no âmbito do seu treino; é proibido revender,
          distribuir ou disponibilizar a terceiros os serviços ou conteúdos da
          GymBroTools sem o consentimento prévio e escrito do Titular.
        </li>
      </ul>
      <p>
        Assume total responsabilidade por qualquer atividade realizada através
        da sua conta e por quaisquer consequências decorrentes da violação das
        regras de utilização permitida. O Titular reserva‑se o direito de
        monitorizar a utilização da App para verificar o cumprimento dos Termos
        (nos limites permitidos pela legislação aplicável em matéria de
        privacidade, conforme descrito na{' '}
        <Link to="/privacy">Política de Privacidade</Link>). Em caso de
        violação, o Titular poderá adotar as medidas que considere adequadas,
        incluindo a suspensão ou o encerramento da conta do utilizador em causa.
      </p>

      <h2>Subscrições e Serviços Pagos</h2>
      <p>
        A GymBroTools oferece atualmente as funcionalidades básicas de forma
        gratuita. No futuro, poderão ser introduzidas funcionalidades adicionais
        ou conteúdos premium através de uma subscrição paga (por exemplo, um
        plano mensal «Trainer» para coaches ou utilizadores avançados). Caso opte
        por subscrever um plano, aplicam‑se as seguintes condições:
      </p>
      <ul>
        <li>
          <strong>Pagamento e renovação:</strong> o pagamento da subscrição é
          efetuado através do marketplace de distribuição da App (por exemplo,
          Apple App Store, Google Play Store ou plataforma equivalente) associado
          ao seu dispositivo. A subscrição tem, salvo indicação em contrário no
          ato de adesão, periodicidade mensal e renova‑se automaticamente no fim
          de cada período, salvo cancelamento por sua parte conforme descrito
          abaixo. O valor será debitado automaticamente a cada renovação, através
          do método de pagamento associado à sua conta na loja utilizada.
        </li>
        <li>
          <strong>Gestão da subscrição:</strong> pode gerir ou cancelar a sua
          subscrição a qualquer momento nas definições da sua conta na loja (por
          exemplo, nas definições do seu Apple ID ou da sua conta Google Play).
          Para evitar a cobrança do período seguinte, deverá cancelar com pelo
          menos 24 horas de antecedência relativamente ao término do período em
          curso. Em caso de cancelamento, poderá continuar a aceder às
          funcionalidades premium até ao fim do período já pago. No término
          desse período, se não for renovado, a sua conta reverterá para o plano
          gratuito básico.
        </li>
        <li>
          <strong>Alteração de preços e da oferta:</strong> o Titular reserva‑se
          o direito de alterar o preço da subscrição ou as características dos
          serviços incluídos. Em caso de alteração de preço ou de modificações
          substanciais do plano, será dado um aviso prévio adequado através dos
          canais apropriados (por exemplo, um aviso na App ou no site oficial).
          As alterações de preço produzem efeitos no momento da renovação
          imediatamente seguinte à comunicação. Se não concordar com as
          alterações, tem o direito de cancelar a subscrição antes da entrada em
          vigor do novo preço ou das novas condições.
        </li>
        <li>
          <strong>Reembolsos:</strong> salvo o que esteja expressamente previsto
          pelas políticas da plataforma de compra ou pela lei aplicável de
          caráter imperativo, os pagamentos já efetuados não são reembolsáveis.
          Isto significa que, por exemplo, se cancelar a subscrição a meio de um
          período já pago, em regra poderá continuar a usufruir dos serviços
          premium até ao final desse período, mas não terá direito a reembolso
          pelos dias remanescentes. Quaisquer exceções ou pedidos de reembolso
          serão avaliados caso a caso, em conformidade com a lei aplicável e as
          regras da loja em causa.
        </li>
      </ul>
      <p>
        Detalhes adicionais sobre os planos de subscrição (funcionalidades
        incluídas, períodos de teste, ofertas promocionais, etc.) serão
        comunicados no momento da adesão. Em caso de introdução de novos
        serviços pagos, estes Termos poderão ser complementados ou alterados,
        conforme indicado na secção «Alterações dos Termos» abaixo.
      </p>

      <h2>Limitação de Responsabilidade e Exclusão de Garantias</h2>
      <p>
        A App e todos os serviços e funcionalidades associados são fornecidos
        pelo Titular «tal como estão» e «consoante a disponibilidade», sem
        qualquer garantia expressa ou implícita quanto à sua exatidão,
        fiabilidade, disponibilidade ou adequação às suas necessidades
        específicas. Embora o Titular se esforce por manter a App eficiente e
        segura, não garante que o serviço esteja isento de erros ou
        interrupções, nem assegura que eventuais defeitos ou bugs sejam
        corrigidos em prazos específicos. Reconhece que utiliza a App por sua
        conta e risco.
      </p>
      <p>
        <strong>Exclusão de garantias específicas:</strong> nos limites
        permitidos por lei, o Titular rejeita quaisquer garantias implícitas de
        comerciabilidade, qualidade satisfatória, adequação a um fim específico
        e não infração. A App é uma ferramenta de apoio ao treino pessoal: o
        Titular não fornece através dela aconselhamento médico, nem aconselhamento
        profissional personalizado de fitness. As informações fornecidas (por
        exemplo, estatísticas de treino ou descrições de exercícios) têm um fim
        meramente indicativo e motivacional. É da sua responsabilidade avaliar o
        seu estado físico e de saúde antes de iniciar ou modificar um programa
        de treino com base em dados ou sugestões fornecidos pela App. Recomenda‑se
        consultar um médico ou um treinador qualificado antes de iniciar novos
        exercícios ou programas, sobretudo na presença de condições médicas
        pré‑existentes. O Titular não será, em caso algum, responsável por
        lesões, danos físicos ou problemas de saúde decorrentes da atividade
        desportiva realizada por si, ainda que tenha confiado em informações ou
        funcionalidades oferecidas pela App.
      </p>
      <p>
        <strong>Limitação de responsabilidade:</strong> na medida permitida pela
        legislação aplicável, o Titular não poderá ser responsabilizado perante
        si (ou perante terceiros) por quaisquer danos diretos, indiretos,
        incidentais, consequenciais ou de outra natureza, relacionados com ou
        decorrentes da utilização, ou impossibilidade de utilização, da App ou
        dos serviços associados. Tal inclui, nomeadamente, a perda de dados ou
        de lucros, perda de oportunidades, interrupção de atividade, danos em
        dispositivos ou outros danos técnicos, mesmo que o Titular tenha sido
        alertado para a possibilidade de tais danos. Em particular, o Titular
        não é responsável por avarias, indisponibilidades ou defeitos causados
        por fatores externos à App, como problemas de ligação à Internet do
        utilizador, falhas de dispositivos, serviços de terceiros integrados
        (incluindo, a título de exemplo, os serviços de autenticação Microsoft
        Entra ou a infraestrutura cloud Azure) ou casos de força maior fora do
        controlo razoável do Titular.
      </p>
      <p>
        Algumas jurisdições não permitem a exclusão de determinadas garantias ou
        a limitação de responsabilidade por danos consequenciais ou incidentais.
        Nesses casos, as exclusões e limitações acima aplicam‑se na medida máxima
        permitida pela lei aplicável. Nada nestes Termos exclui ou limita a
        responsabilidade do Titular em caso de dolo ou negligência grave, nem
        quaisquer outras responsabilidades que não possam ser excluídas ou
        limitadas por lei.
      </p>

      <h2>Alterações dos Termos</h2>
      <p>
        O Titular reserva‑se o direito de modificar, complementar ou atualizar
        estes Termos a qualquer momento, por exemplo para cumprir novas
        disposições legais, adaptar‑se a alterações nas funcionalidades
        disponibilizadas ou melhorar a clareza. Em caso de alteração material,
        o Titular informará os utilizadores com antecedência através dos canais
        adequados. Consoante as circunstâncias, estes canais podem incluir, por
        exemplo, uma mensagem na App (janela pop‑up ou notificação) ou uma
        atualização publicada no site oficial ou na página de descarga da App.
      </p>
      <p>
        As alterações produzirão efeitos na data da sua publicação ou na data
        indicada no respetivo aviso. É da sua responsabilidade verificar
        periodicamente a existência de atualizações. A utilização contínua da
        App após a entrada em vigor das alterações implica a aceitação tácita
        das novas condições. Se não concordar com os Termos alterados, deverá
        cessar a utilização da App e poderá, se aplicável, solicitar a
        eliminação da sua conta conforme previsto. A versão atual dos Termos
        estará sempre acessível através da App (por exemplo, na secção «Termos e
        Condições») ou no site do Titular.
      </p>

      <h2>Duração, Suspensão e Resolução</h2>
      <p>
        Estes Termos aplicam‑se a partir do momento em que começa a utilizar a
        App e mantêm‑se em vigor enquanto continuar a utilizá‑la. Pode deixar de
        utilizar a GymBroTools a qualquer momento e tem o direito de encerrar a
        sua conta. A eliminação da conta pode ser efetuada diretamente na App
        (função de eliminação de conta nas definições) ou contactando o Titular
        através dos contactos fornecidos. A desativação ou eliminação da conta
        implicará a interrupção do acesso aos serviços da App e a remoção ou
        anonimização dos seus dados pessoais, conforme previsto na{' '}
        <Link to="/privacy">Política de Privacidade</Link> e na legislação
        aplicável.
      </p>
      <p>
        O Titular reserva‑se o direito de suspender temporária ou
        definitivamente o seu acesso à App, ou de encerrar a sua conta, nos
        seguintes casos: (a) se entender que violou, no todo ou em parte, estes
        Termos (por exemplo, utilização ilícita ou não autorizada da App); (b)
        em cumprimento de pedido das autoridades policiais ou de outra
        autoridade competente; (c) por problemas técnicos ou de segurança
        imprevistos que exijam a suspensão do serviço; (d) em caso de
        cessação da atividade ou de encerramento da App por parte do Titular.
        Sempre que razoavelmente possível, o Titular fornecerá um aviso prévio
        da intenção de suspender ou encerrar a conta, indicando as razões, mas
        reserva‑se o direito de atuar de imediato e sem aviso quando tal seja
        necessário para proteger os seus interesses ou a segurança de outros
        utilizadores.
      </p>
      <p>
        Em caso de resolução da relação contratual entre o Titular e o
        utilizador (por exemplo, na sequência da eliminação da conta pelo
        utilizador ou de encerramento decidido pelo Titular), as disposições que
        pela sua natureza devam subsistir à cessação (nomeadamente as secções
        Propriedade Intelectual, Limitação de Responsabilidade e Lei
        Aplicável) continuarão a produzir efeitos. A resolução da conta do
        utilizador não prejudica quaisquer direitos ou obrigações já vencidos à
        data da cessação, nem quaisquer responsabilidades por violações dos
        Termos cometidas pelo utilizador.
      </p>

      <h2>Lei Aplicável e Jurisdição</h2>
      <p>
        Estes Termos são regidos pelas leis de Itália. Para o que não esteja
        expressamente previsto, aplicam‑se as leis em vigor em Itália. Quaisquer
        litígios resultantes da interpretação, validade ou execução destes
        Termos são submetidos à jurisdição exclusiva do tribunal italiano
        competente no local onde o Titular está estabelecido (salvo se uma
        jurisdição diferente for imposta por normas imperativas, como no caso de
        consumidores residentes fora de Itália). O Titular e o utilizador
        envidarão esforços razoáveis para resolver amigavelmente quaisquer
        litígios antes de recorrer aos meios judiciais.
      </p>

      <h2>Disposições Finais</h2>
      <p>
        Se alguma disposição destes Termos for considerada inválida, nula ou
        inaplicável por um tribunal competente, tal invalidade não afetará a
        validade das restantes disposições, que permanecerão plenamente em
        vigor. Qualquer tolerância do Titular perante comportamentos do
        utilizador em violação destes Termos não constitui renúncia aos direitos
        decorrentes das disposições violadas, nem ao direito de exigir o
        cumprimento integral de todos os termos aqui previstos. Estes Termos,
        juntamente com a{' '}
        <Link to="/privacy">Política de Privacidade</Link> referenciada,
        constituem o acordo integral entre o utilizador e o Titular relativo à
        utilização da App, substituindo qualquer entendimento ou acordo
        anterior, escrito ou oral, sobre a mesma matéria.
      </p>

      <p>________________</p>

      <p>
        Última atualização: 06 de outubro de 2025. O Titular reserva‑se o
        direito de atualizar periodicamente o conteúdo desta página; verifique a
        data de última atualização para conhecer a versão em vigor dos Termos.
        Obrigado por ler atentamente estes Termos e Condições e por escolher a
        GymBroTools. Bom treino!
      </p>
    </div>
  )
}

