import { Link } from 'react-router-dom'

export default function TermsEs() {
  const updated = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container terms">
      <h1>Términos y Condiciones de GymBroTools</h1>
      <p className="muted">Última actualización: {updated}</p>

      <h2>Aceptación de los Términos</h2>
      <p>
        Estos Términos y Condiciones regulan el uso de la aplicación móvil
        GymBroTools. La App es propiedad de Marco Crupi, desarrollador
        independiente. Al acceder o utilizar la App, usted declara haber leído,
        comprendido y aceptado íntegramente estos Términos. Si no está de
        acuerdo con alguna de las disposiciones aquí incluidas, le rogamos que
        no utilice la App. El uso continuado de la App implica la aceptación de
        los Términos vigentes.
      </p>
      <p>
        El uso de la App también está sujeto a la aceptación de la{' '}
        <Link to="/privacy">Política de Privacidad</Link> asociada, disponible
        por separado. La Política de Privacidad describe cómo se recopilan y
        tratan los datos personales de los usuarios. Al utilizar la App, usted
        confirma que ha revisado dicho aviso. En caso de conflicto entre estos
        Términos y la Política de Privacidad en materia de tratamiento de datos,
        prevalecerá lo dispuesto en la Política de Privacidad para los aspectos
        de privacidad.
      </p>

      <h2>Requisitos de Edad</h2>
      <p>
        La App está destinada a usuarios de 13 años o más. Al utilizar
        GymBroTools, usted declara tener al menos 13 años. El Titular no
        recopila conscientemente datos de, ni presta servicios a, menores de 13
        años. Si se detecta que un menor de 13 años ha facilitado información
        personal o está utilizando la App, el Titular podrá adoptar las medidas
        oportunas, incluida la eliminación de la cuenta asociada. Si usted tiene
        entre 13 y 18 años (o es menor de edad según la legislación de su país),
        se recomienda utilizar la App con el consentimiento y la supervisión de
        un padre, madre o tutor; no obstante, usted declara tener capacidad para
        aceptar estos Términos.
      </p>

      <h2>Descripción de la App y funcionalidades</h2>
      <p>
        GymBroTools es una aplicación móvil «offline‑first» dedicada al
        entrenamiento en gimnasio, culturismo y fitness. La App permite registrar
        los entrenamientos, configurar temporizadores, monitorizar estadísticas de
        progreso y crear planes de entrenamiento, todo ello con soporte
        multilingüe. La App puede funcionar sin conexión y sincroniza los datos
        con un backend en la nube (basado en .NET 8 y contenedorizado en Azure)
        cuando hay conexión a Internet, garantizando una experiencia fluida y
        resiliente.
      </p>
      <p>
        Para acceder a todas las funciones, debe registrarse mediante el sistema
        de autenticación integrado (gestionado a través de Microsoft Entra
        External ID). Una vez autenticado, dispondrá de una cuenta con la que
        podrá guardar de forma segura sus datos de entrenamiento. El backend
        utiliza API REST protegidas por tokens JWT y mecanismos de refresh token
        para garantizar la seguridad y confidencialidad de los datos. Usted es
        responsable de cualquier actividad realizada a través de su cuenta y debe
        mantener la confidencialidad de sus credenciales de acceso (por ejemplo,
        las de su cuenta de Microsoft). En caso de acceso no autorizado o de
        sospecha de violación de la seguridad, deberá informar de inmediato al
        Titular.
      </p>

      <h2>Propiedad Intelectual</h2>
      <p>
        Todo el contenido, software, diseño, el nombre y el logotipo de
        GymBroTools y los demás elementos presentes en la App son propiedad
        exclusiva del Titular (Marco Crupi) o de sus licenciantes y están
        protegidos por las leyes y tratados internacionales en materia de
        derechos de autor, marcas, patentes y/u otros derechos de propiedad
        intelectual. Usted reconoce que dichos derechos pertenecen al Titular y
        se compromete a no realizar ningún acto incompatible con los derechos de
        propiedad intelectual del Titular.
      </p>
      <p>
        Con la única finalidad de utilizar la App, se le concede una licencia
        personal, limitada, no exclusiva e intransferible para usar GymBroTools
        en sus propios dispositivos, de conformidad con estos Términos. Queda
        expresamente prohibido: (a) copiar, modificar, distribuir, vender o
        conceder sublicencias sobre partes de la App; (b) descompilar,
        desensamblar o realizar ingeniería inversa de la App, salvo en la medida
        en que la ley lo permita expresamente; (c) utilizar indebidamente la App
        o su contenido de forma contraria a su finalidad personal y no comercial.
        Cualquier uso de la App no autorizado por estos Términos o por la ley
        está prohibido y puede conllevar la suspensión de su cuenta y/o acciones
        legales por parte del Titular para proteger sus derechos.
      </p>

      <h2>Uso Permitido y Obligaciones del Usuario</h2>
      <p>
        Usted se compromete a utilizar la App conforme a la ley, al orden
        público y a estos Términos. En particular, al usar GymBroTools usted no
        debe:
      </p>
      <ul>
        <li>
          <strong>Usos ilegales o impropios:</strong> utilizar la App con fines
          ilegales, ilícitos o no autorizados. Esto incluye, a modo de ejemplo,
          vulnerar derechos de terceros o difundir contenidos ilícitos, ofensivos
          o que inciten a la violencia o al odio.
        </li>
        <li>
          <strong>Interferencia con el servicio:</strong> tratar de comprometer,
          eludir o interferir con el funcionamiento normal de la App, de sus
          servidores o de las redes conectadas. No debe introducir malware,
          virus, gusanos u otro código dañino en la App, ni realizar scraping,
          crawling o extracción no autorizada de datos.
        </li>
        <li>
          <strong>Accesos no autorizados:</strong> acceder o intentar acceder a
          cuentas de otros usuarios o a sistemas del Titular a los cuales no esté
          autorizado. No debe suplantar a otras personas ni falsear su identidad
          al utilizar la App.
        </li>
        <li>
          <strong>Uso comercial o no personal:</strong> explotar la App o
          cualquiera de sus partes, incluidos los contenidos multimedia sobre
          ejercicios, con fines comerciales no autorizados por el Titular. La App
          está destinada a su uso personal en el ámbito de su entrenamiento; no
          puede revender, distribuir ni proporcionar a terceros los servicios o
          contenidos de GymBroTools sin el consentimiento previo y por escrito del
          Titular.
        </li>
      </ul>
      <p>
        Usted asume la plena responsabilidad por cualquier actividad realizada a
        través de su cuenta y por cualquier consecuencia que se derive del
        incumplimiento de estas reglas de uso permitido. El Titular se reserva el
        derecho de monitorizar el uso de la App para verificar el cumplimiento de
        los Términos (en la medida permitida por la normativa aplicable en
        materia de privacidad, según lo descrito en la{' '}
        <Link to="/privacy">Política de Privacidad</Link>). En caso de
        incumplimiento, el Titular podrá adoptar las medidas oportunas, incluida
        la suspensión o el cierre de la cuenta del usuario responsable.
      </p>

      <h2>Suscripciones y Servicios de Pago</h2>
      <p>
        Actualmente, GymBroTools ofrece sus funciones básicas de forma gratuita.
        En el futuro, pueden introducirse funciones adicionales o contenidos
        premium mediante una suscripción de pago (por ejemplo, un plan mensual
        «Trainer» para entrenadores o usuarios avanzados). Si decide suscribirse
        a un plan, se aplicarán las siguientes condiciones:
      </p>
      <ul>
        <li>
          <strong>Pago y renovación:</strong> el pago de la suscripción se
          gestiona a través del marketplace que distribuye la App (por ejemplo,
          Apple App Store, Google Play Store o una plataforma equivalente)
          vinculado a su dispositivo. La suscripción se renueva mensualmente por
          defecto (salvo que se indique lo contrario al registrarse) y se renovará
          automáticamente al final de cada periodo de facturación, salvo cancelación
          por su parte según lo descrito a continuación. El importe de la
          suscripción se cargará automáticamente en cada renovación mediante el
          método de pago asociado a su cuenta en la tienda utilizada.
        </li>
        <li>
          <strong>Gestión de la suscripción:</strong> puede gestionar o cancelar
          su suscripción en cualquier momento desde la configuración de su cuenta
          en la tienda (por ejemplo, en los ajustes de su Apple ID o de su cuenta
          de Google Play). Para evitar el cargo del siguiente periodo, debe
          cancelar al menos 24 horas antes de que finalice el periodo de
          facturación vigente. En caso de cancelación, podrá seguir accediendo a
          las funciones premium hasta que termine el periodo ya pagado. Al final
          de dicho periodo, si no se renueva, su cuenta volverá al plan básico
          gratuito.
        </li>
        <li>
          <strong>Cambios de precio y modificaciones de la oferta:</strong> el
          Titular se reserva el derecho de modificar el precio de la suscripción
          o las características de los servicios ofrecidos. En caso de cambios de
          precio o modificaciones sustanciales del plan, se proporcionará un
          preaviso adecuado por los canales pertinentes (por ejemplo, un aviso en
          la App o un comunicado en el sitio web oficial). Los cambios de precio
          surtirán efecto en la renovación inmediatamente posterior a la
          comunicación del cambio. Si no está de acuerdo con las modificaciones,
          tiene derecho a cancelar la suscripción antes de que entren en vigor el
          nuevo precio o las nuevas condiciones.
        </li>
        <li>
          <strong>Reembolsos:</strong> salvo lo expresamente previsto por las
          políticas del marketplace en el que se realizó la compra o por la
          legislación aplicable de carácter imperativo, los pagos ya efectuados no
          son reembolsables. Esto significa que, por ejemplo, si cancela a mitad
          de un periodo ya pagado, normalmente podrá seguir utilizando los
          servicios premium hasta el final del periodo, pero no tendrá derecho a
          un reembolso por los días restantes. Cualquier excepción o solicitud de
          reembolso se evaluará caso por caso, de conformidad con la legislación
          aplicable y las normas de la tienda correspondiente.
        </li>
      </ul>
      <p>
        Los detalles adicionales sobre los planes de suscripción (funcionalidades
        incluidas, periodos de prueba, ofertas promocionales, etc.) se
        comunicarán en el momento de la suscripción. Si se introducen nuevos
        servicios de pago, estos Términos podrán complementarse o modificarse
        según lo indicado en la sección «Modificaciones de los Términos».
      </p>

      <h2>Limitación de Responsabilidad y Exclusión de Garantías</h2>
      <p>
        La App y todos los servicios y funcionalidades relacionados se ofrecen
        por parte del Titular «tal cual» y «según disponibilidad», sin garantía
        expresa o implícita alguna sobre su exactitud, fiabilidad, disponibilidad
        o idoneidad para satisfacer sus necesidades específicas. Si bien el
        Titular se esfuerza por mantener la App eficiente y segura, no garantiza
        que el servicio esté libre de errores o interrupciones, ni asegura que
        los defectos o errores se solucionarán dentro de plazos específicos. Usted
        reconoce que el uso de la App es bajo su exclusiva responsabilidad.
      </p>
      <p>
        <strong>Exclusión de garantías específicas:</strong> en la medida máxima
        permitida por la ley, el Titular rechaza toda garantía implícita de
        comerciabilidad, calidad satisfactoria, idoneidad para un fin particular
        y no infracción. La App es una herramienta de apoyo al entrenamiento
        personal: el Titular no proporciona asesoramiento médico ni asesoramiento
        profesional personalizado de fitness a través de ella. La información
        proporcionada (por ejemplo, estadísticas de entrenamiento o descripciones
        de ejercicios) tiene un propósito meramente indicativo y motivacional. Es
        su responsabilidad evaluar su estado físico y de salud antes de iniciar o
        modificar un programa de entrenamiento basado en los datos o
        sugerencias que ofrece la App. Se recomienda consultar a un médico o a un
        entrenador cualificado antes de comenzar nuevos ejercicios o programas,
        especialmente si existen condiciones médicas preexistentes. El Titular no
        será, en ningún caso, responsable de lesiones, daños físicos o problemas
        de salud que puedan derivarse de la actividad deportiva, incluso cuando
        usted haya confiado en información o funcionalidades ofrecidas por la
        App.
      </p>
      <p>
        <strong>Limitación de responsabilidad:</strong> en la medida permitida por
        la legislación aplicable, el Titular no será responsable frente a usted
        (ni frente a terceros) de daños directos, indirectos, incidentales,
        consecuenciales o de cualquier otra naturaleza relacionados con, o
        derivados del, uso o la imposibilidad de uso de la App o de los servicios
        relacionados. Esto incluye, a título enunciativo y no limitativo: pérdida
        de datos o beneficios, pérdida de oportunidades, interrupción del
        negocio, daños en los dispositivos u otros daños técnicos, incluso si el
        Titular ha sido advertido de la posibilidad de tales daños. En
        particular, el Titular no es responsable de fallos, indisponibilidades o
        defectos causados por factores externos a la App, como problemas de
        conexión a Internet del usuario, fallos de los dispositivos, servicios de
        terceros integrados (incluidos, a modo de ejemplo, los servicios de
        autenticación de Microsoft Entra o la infraestructura en la nube de
        Azure) o casos de fuerza mayor fuera del control razonable del Titular.
      </p>
      <p>
        Algunas jurisdicciones no permiten la exclusión de determinadas
        garantías ni la limitación de responsabilidad por daños consecuenciales o
        incidentales. En tales casos, las exclusiones y limitaciones anteriores se
        aplicarán en la medida máxima permitida por la legislación aplicable.
        Nada en estos Términos excluye o limita la responsabilidad del Titular en
        caso de dolo o negligencia grave, ni cualquier otra responsabilidad que no
        pueda excluirse o limitarse por ley.
      </p>

      <h2>Modificaciones de los Términos</h2>
      <p>
        El Titular se reserva el derecho de modificar, complementar o actualizar
        estos Términos en cualquier momento, por ejemplo, para cumplir nuevas
        disposiciones legales, adaptarse a cambios en las funcionalidades
        ofrecidas o mejorar la claridad. En caso de cambios sustanciales, el
        Titular informará con antelación a los usuarios a través de los canales
        oportunos. Según las circunstancias, estos canales pueden incluir, por
        ejemplo, un mensaje dentro de la App (ventana emergente o notificación) o
        una actualización publicada en el sitio web oficial o en la página de
        descarga de la App.
      </p>
      <p>
        Las modificaciones entrarán en vigor en la fecha de su publicación o en
        la fecha indicada en el aviso correspondiente. Es su responsabilidad
        comprobar periódicamente si hay actualizaciones de los Términos. El uso
        continuado de la App tras la entrada en vigor de las modificaciones
        supone la aceptación tácita de las nuevas condiciones. Si no está de
        acuerdo con los Términos modificados, debe dejar de utilizar la App y
        podrá, en su caso, solicitar la eliminación de su cuenta conforme a lo
        previsto. Los Términos vigentes estarán siempre accesibles desde la App
        (por ejemplo, en la sección «Términos y Condiciones») o desde el sitio
        web del Titular.
      </p>

      <h2>Duración, Suspensión y Resolución</h2>
      <p>
        Estos Términos se aplican desde el momento en que empieza a utilizar la
        App y permanecen en vigor mientras continúe utilizándola. Puede dejar de
        usar GymBroTools en cualquier momento y tiene derecho a cerrar su cuenta.
        La eliminación de la cuenta puede realizarse directamente desde la App
        (función de eliminación de cuenta en la configuración) o contactando con
        el Titular a través de los datos de contacto facilitados. La
        desactivación o supresión de la cuenta supondrá la interrupción del
        acceso a los servicios de la App y la eliminación o anonimización de sus
        datos personales, según lo dispuesto en la{' '}
        <Link to="/privacy">Política de Privacidad</Link> y en la normativa
        aplicable.
      </p>
      <p>
        El Titular se reserva el derecho de suspender temporal o definitivamente
        su acceso a la App, o de cerrar su cuenta, en los siguientes casos: (a)
        si considera que usted ha infringido total o parcialmente estos Términos
        (por ejemplo, uso ilícito o no autorizado de la App); (b) en cumplimiento
        de una solicitud de las fuerzas del orden o de otra autoridad competente;
        (c) por problemas técnicos o de seguridad imprevistos que requieran la
        suspensión del servicio; (d) en caso de cese de la actividad o cierre de
        la App por parte del Titular. Cuando sea razonablemente posible, el
        Titular le notificará previamente su intención de suspender o cerrar la
        cuenta, indicando los motivos, pero se reserva el derecho de actuar de
        inmediato y sin previo aviso cuando sea necesario para proteger sus
        intereses o la seguridad de otros usuarios.
      </p>
      <p>
        En caso de resolución de la relación contractual entre el Titular y el
        usuario (por ejemplo, a raíz de la eliminación de la cuenta por parte del
        usuario o del cierre decidido por el Titular), las disposiciones de estos
        Términos que, por su naturaleza, estén destinadas a sobrevivir a la
        terminación (como las secciones de Propiedad Intelectual, Limitación de
        Responsabilidad y Ley Aplicable) seguirán siendo de plena vigencia. La
        resolución de la cuenta del usuario no afecta a los derechos u
        obligaciones ya devengados a la fecha de la finalización, ni a cualquier
        responsabilidad por infracciones de los Términos cometidas por el usuario.
      </p>

      <h2>Ley Aplicable y Jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de Italia. Para los aspectos no
        previstos expresamente en estas condiciones, se aplicará la normativa
        vigente en Italia. Cualquier disputa o controversia derivada de la
        interpretación, validez o ejecución de estos Términos se someterá a la
        jurisdicción exclusiva del tribunal italiano competente en el lugar donde
        esté establecido el Titular (salvo que una jurisdicción distinta sea
        impuesta por normas imperativas, como en el caso de consumidores
        residentes fuera de Italia). El Titular y el usuario harán lo posible por
        resolver de forma amistosa cualquier controversia antes de acudir a la
        vía judicial.
      </p>

      <h2>Cláusulas Finales</h2>
      <p>
        Si cualquier disposición de estos Términos fuera declarada inválida, nula
        o inaplicable por un tribunal competente, dicha invalidez no afectará a
        la validez de las restantes disposiciones, que permanecerán plenamente en
        vigor. La eventual tolerancia por parte del Titular de comportamientos del
        usuario contrarios a lo previsto en estos Términos no constituirá
        renuncia a los derechos derivados de las disposiciones infringidas, ni al
        derecho a exigir el estricto cumplimiento de todos los términos aquí
        previstos. Estos Términos, junto con la{' '}
        <Link to="/privacy">Política de Privacidad</Link> referenciada,
        constituyen el acuerdo íntegro entre el usuario y el Titular en relación
        con el uso de la App, y sustituyen cualquier entendimiento o acuerdo
        previo, escrito u oral, sobre el mismo objeto.
      </p>

      <p>________________</p>

      <p>
        Última actualización: 06 de octubre de 2025. El Titular se reserva el
        derecho de actualizar periódicamente el contenido de esta página; por
        favor, verifique la fecha de última actualización para conocer la versión
        vigente de los Términos. Gracias por leer atentamente los Términos y
        Condiciones y por elegir GymBroTools. ¡Buen entrenamiento!
      </p>
    </div>
  )
}

