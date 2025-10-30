export default function PrivacyEs() {
  const updated = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="container privacy">
      <h1>Política de Privacidad de la app GymBroTools</h1>
      <p className="muted">Última actualización: {updated}</p>

      <h2>1. Introducción y ámbito de aplicación</h2>
      <p>
        GymBroTools es una aplicación móvil de fitness disponible a nivel
        mundial. La presente Política de Privacidad describe cómo GymBroTools
        recopila, utiliza y protege los datos personales de los usuarios. La app
        es desarrollada y gestionada por un único desarrollador independiente
        (no por una empresa) y se compromete a salvaguardar la privacidad de
        todos los usuarios.
      </p>
      <p>
        <strong>IMPORTANTE:</strong> la app no está destinada a menores de 13
        años. En el primer inicio se solicita al usuario indicar su año de
        nacimiento; si resulta menor de 13 años, se le deniega el acceso a la
        app y no se recoge ni se trata ningún dato. Solo los usuarios de 13 años
        o más pueden utilizar GymBroTools y aceptar la presente Política de
        Privacidad.
      </p>
      <p>
        GymBroTools no recopila intencionadamente datos personales de menores de
        13 años. Si llegáramos a tener conocimiento de que se han recogido datos
        de un menor de 13 años sin el consentimiento verificable de sus padres o
        tutores, procederemos a eliminar dichos datos lo antes posible. Los
        usuarios o los padres/tutores que consideren que un menor nos ha
        proporcionado información personal pueden contactarnos en cualquier
        momento para solicitar su eliminación inmediata.
      </p>
      <p>
        Esta política se aplica a todos los servicios ofrecidos a través de la
        app GymBroTools.
      </p>

      <h2>2. Tipos de datos recopilados</h2>
      <p>
        No recopilamos datos personales identificables salvo lo estrictamente
        necesario para el funcionamiento de la app. En particular, GymBroTools
        recopila las siguientes categorías de datos:
      </p>
      <p>
        <strong>Datos facilitados por el usuario:</strong> información que el
        usuario introduce voluntariamente, como los datos de registro (p. ej.,
        correo electrónico o nombre de usuario) y los detalles de los
        entrenamientos (series, repeticiones, pesos). Estos datos sirven para
        crear la cuenta y permitir al usuario guardar y consultar sus
        entrenamientos. La información introducida permanece privada, visible
        solo para el propio usuario y no se comparte con otros usuarios ni con
        terceros, salvo lo descrito en esta política. Importante: GymBroTools no
        solicita ni recopila ningún dato personal «sensible» o biológico, como
        datos biométricos, información sanitaria, fotos, ubicación GPS,
        contactos u otros datos no necesarios para el uso de la app.
      </p>
      <p>
        <strong>Datos técnicos de uso (telemetría):</strong> la app utiliza
        Microsoft Application Insights para recopilar automáticamente datos
        técnicos anónimos sobre el uso y el funcionamiento de la aplicación.
        Esta información incluye, por ejemplo, registros de errores, métricas de
        rendimiento, datos del dispositivo (como modelo y sistema operativo) y
        eventos técnicos generales (p. ej., carga de una pantalla o llamada a
        una API). Esta telemetría no contiene datos personales identificables:
        no se registran nombres, correos, direcciones ni contenidos personales
        de los usuarios. Hemos configurado la telemetría para excluir
        información potencialmente identificable (p. ej., URLs completas,
        direcciones de correo, ID de usuario) y recopilar solo los datos útiles
        para garantizar la estabilidad y la seguridad de la app. Application
        Insights está siempre activo para monitorizar el estado de la aplicación
        y se configura con un muestreo limitado (en producción) para minimizar
        la cantidad de datos recopilados.
      </p>
      

      <h2>3. Finalidad del tratamiento</h2>
      <p>
        Tratamos los datos recopilados para las siguientes finalidades, de
        conformidad con los principios de licitud y minimización:
      </p>
      <p>
        <strong>Prestar el servicio y las funciones de la app:</strong> usamos
        los datos facilitados por el usuario (p. ej., cuenta y datos de
        entrenamientos) para permitirle registrarse, acceder a su perfil,
        guardar ejercicios y visualizar estadísticas. Este tratamiento es
        esencial para el funcionamiento de GymBroTools y para ofrecer las
        funciones solicitadas (p. ej., sincronizar los entrenamientos entre
        dispositivos en modo offline‑first).
      </p>
      <p>
        <strong>Mejorar la estabilidad, la seguridad y el rendimiento:</strong>
        los datos técnicos recopilados mediante Application Insights se utilizan
        exclusivamente para monitorizar el estado de la app, identificar
        errores, prevenir bloqueos, analizar el rendimiento y garantizar la
        seguridad del servicio. Esta información nos ayuda a corregir errores,
        optimizar la infraestructura y asegurar que la app funcione de forma
        fiable en distintos dispositivos.
      </p>
      
      <p>
        <strong>Comunicaciones de soporte:</strong> los datos de contacto (como
        el correo facilitado durante el registro) podrán utilizarse para
        comunicaciones de servicio estrictamente relacionadas con la app, por
        ejemplo para responder a solicitudes de soporte técnico o enviar avisos
        importantes sobre su funcionamiento. GymBroTools no envía boletines
        promocionales ni comunicaciones de marketing no solicitadas.
      </p>
      <p>
        Los datos nunca se utilizan para fines de perfilado comercial,
        publicidad de terceros ni decisiones automatizadas que produzcan efectos
        jurídicos sobre el usuario. Todo tratamiento se realiza dentro de los
        límites de las finalidades descritas.
      </p>

      <h2>4. Base jurídica del tratamiento</h2>
      <p>
        Tratamos los datos personales de los usuarios únicamente cuando existe
        una base jurídica que lo permita conforme a la normativa aplicable
        (Reglamento UE 2016/679 «GDPR» y leyes equivalentes en otras
        jurisdicciones). En relación con las finalidades anteriores, las bases
        jurídicas son:
      </p>
      <p>
        <strong>Ejecución de un contrato o medidas precontractuales:</strong>
        para los datos facilitados directamente por el usuario (como datos de la
        cuenta y de entrenamientos), el tratamiento es necesario para prestar el
        servicio solicitado. Cuando el usuario crea una cuenta y utiliza
        GymBroTools, se establece una relación contractual implícita: sus datos
        se tratan para permitir el uso de la app y sus funciones (art. 6(1)(b)
        GDPR). Sin estos datos no podríamos ofrecer el registro, el guardado de
        ejercicios y otras funciones clave de la app.
      </p>
      <p>
        <strong>Interés legítimo:</strong> el tratamiento de la telemetría
        técnica mediante Application Insights se basa en el interés legítimo del
        desarrollador (art. 6(1)(f) GDPR). Dicho interés consiste en garantizar
        la estabilidad, la seguridad y la mejora continua del servicio, en
        beneficio tanto del desarrollador como de los usuarios. Hemos evaluado
        que este tratamiento, limitado a datos técnicos anónimos, no vulnera los
        derechos y libertades de los usuarios (también gracias a la ausencia de
        información personal identificable). La app, además, requiere aceptar
        los Términos y la Privacidad en la instalación, haciendo que los
        usuarios sean conscientes de esta telemetría básica. El usuario tiene
        derecho a oponerse por motivos relacionados con su situación particular
        (véase la sección Derechos), teniendo en cuenta que la telemetría es
        fundamental para prevenir fallos y proteger los datos.
      </p>
      
      <p>
        Además de estas bases principales, GymBroTools puede tratar datos
        personales para cumplir eventuales obligaciones legales aplicables (art.
        6(1)(c) GDPR) o para proteger intereses vitales de los usuarios u otros
        (supuestos poco frecuentes, art. 6(1)(d)), aunque en la práctica estas
        circunstancias no se presentan en el uso ordinario de la app.
      </p>

      <h2>5. Modalidades del tratamiento y plazos de conservación</h2>
      <p>
        Tratamos los datos personales de los usuarios principalmente en forma
        electrónica y automatizada, adoptando medidas de seguridad adecuadas
        para evitar accesos no autorizados, divulgación o alteración de los
        datos. Los datos se almacenan en servidores seguros (p. ej.,
        infraestructura cloud de Microsoft Azure) y se protegen mediante
        técnicas de cifrado y control de accesos. El único desarrollador de
        GymBroTools es la única persona con acceso directo a los datos para la
        gestión de la app y trata dichos datos con estricta confidencialidad. No
        hay otros encargados o personal tercero que acceda a los datos
        personales, salvo los servicios externos mencionados (Microsoft) que
        actúan como proveedores técnicos según lo descrito.
      </p>
      <p>
        Conservamos los datos únicamente durante el tiempo necesario para
        alcanzar las finalidades para las que fueron recogidos, tras lo cual
        procedemos a eliminarlos o a anonimizar-los. A continuación indicamos
        los plazos de conservación específicos para cada tipo de dato:
      </p>
      <p>
        <strong>Datos de cuenta y de entrenamientos:</strong> la información
        facilitada por el usuario (p. ej., correo de registro, nombre de
        usuario, series/repeticiones/pesos guardados) se conserva durante todo
        el tiempo en que la cuenta permanezca activa. En la práctica, estos
        datos se mantienen mientras el usuario continúe utilizando la app y
        mantenga su cuenta activa, de forma que pueda acceder a su historial de
        entrenamientos. El usuario puede modificar o borrar datos individuales
        en cualquier momento (p. ej., eliminar un entrenamiento) directamente
        desde la app. Además, puede solicitar la eliminación completa de su
        cuenta en cualquier momento (véase Derechos de los usuarios): en tal
        caso, todos los datos personales asociados a la cuenta se eliminarán de
        forma permanente de nuestros sistemas en un breve plazo técnico. Podrán
        conservarse datos limitados tras la eliminación solo de forma agregada o
        anónima, o para cumplir obligaciones legales (p. ej., registros de
        seguridad), pero no de manera que permitan identificar al usuario.
      </p>
      <p>
        <strong>Datos de telemetría técnica (Application Insights):</strong> los
        datos recopilados automáticamente sobre errores y rendimiento mediante
        Application Insights se conservan por un período máximo de 90 días. Este
        límite de conservación se ajusta a la configuración estándar de la
        plataforma y permite disponer de un histórico reciente para análisis y
        depuración, sin conservar información más tiempo del necesario.
        Transcurridos aproximadamente 90 días, los registros y telemetrías más
        antiguos se eliminan o sobrescriben automáticamente. En todo caso, al
        tratarse de datos anónimos, no es posible remontarse a un usuario
        específico a partir de esta información, y su eliminación se realiza de
        conformidad con las políticas de retención de Microsoft Azure
        Application Insights.
      </p>
      
      <p>
        <strong>Transferencia de datos al extranjero:</strong> los datos
        personales recogidos por GymBroTools pueden ser transferidos y tratados
        en países fuera del Espacio Económico Europeo (EEE), en particular
        cuando los servidores de los proveedores de servicios cloud utilizados —
        como Microsoft Azure— estén ubicados fuera del EEE. En estos casos,
        garantizamos la adopción de las salvaguardias adecuadas para la
        protección de los datos, como el uso de Cláusulas Contractuales Tipo
        aprobadas por la Comisión Europea u otros instrumentos legales previstos
        por la normativa aplicable, con el fin de garantizar un nivel de
        protección equivalente al exigido por el GDPR.
      </p>
      <p>
        Al término de los periodos arriba indicados, los datos se eliminan de
        forma segura o se anonimizan de manera irreversible (de modo que ya no
        puedan asociarse a un usuario). Recordamos que el usuario puede
        solicitar siempre la eliminación anticipada de sus datos personales, y
        GymBroTools atenderá dichas solicitudes dentro de los plazos previstos
        por la ley (véase Derechos de los usuarios).
      </p>

      <h2>6. Derechos de los usuarios</h2>
      <p>
        Los usuarios de GymBroTools, en su calidad de interesados, gozan de una
        serie de derechos en materia de protección de datos personales. En
        particular, el usuario podrá ejercer en cualquier momento los siguientes
        derechos:
      </p>
      <p>
        <strong>Derecho de acceso:</strong> derecho a obtener confirmación de si
        se está tratando o no datos personales que le conciernen y, en tal caso,
        a acceder a dichos datos junto con información sobre las finalidades,
        las categorías de datos tratados, los destinatarios, el periodo de
        conservación y la existencia de los demás derechos aquí enumerados. En
        la práctica, el usuario puede solicitar una copia de sus datos en
        nuestro poder y información sobre cómo los utilizamos.
      </p>
      <p>
        <strong>Derecho de rectificación:</strong> derecho a obtener la
        corrección de los datos personales inexactos que le conciernan y a que
        se completen los datos incompletos. El usuario puede corregir sus datos
        directamente en la app cuando sea posible (p. ej., datos de la cuenta) o
        contactándonos para su actualización.
      </p>
      <p>
        <strong>Derecho de supresión («derecho al olvido»):</strong> derecho a
        obtener la eliminación de los datos personales que le conciernan cuando
        ya no sean necesarios para los fines para los que se recogieron o cuando
        retire el consentimiento (cuando el tratamiento se base en el
        consentimiento), con sujeción a las obligaciones legales que puedan
        exigir su conservación. En la práctica, el usuario puede solicitar la
        eliminación de su cuenta y de los datos personales asociados; tras la
        solicitud, los datos se borrarán de forma permanente de nuestros
        sistemas en un breve plazo técnico.
      </p>
      <p>
        <strong>Derecho a la limitación del tratamiento:</strong> derecho a
        obtener la limitación del tratamiento de los datos personales en
        determinadas circunstancias (p. ej., cuando se impugne la exactitud o el
        tratamiento sea ilícito y el usuario, en lugar de la supresión, solicite
        la limitación).
      </p>
      <p>
        <strong>Derecho a la portabilidad de los datos:</strong> derecho a
        recibir los datos personales que le incumban, que nos haya facilitado,
        en un formato estructurado, de uso común y lectura mecánica, y a
        transmitir dichos datos a otro responsable cuando sea técnicamente
        posible y el tratamiento esté basado en el consentimiento o en un
        contrato.
      </p>
      <p>
        <strong>Derecho de oposición:</strong> derecho a oponerse, por motivos
        relacionados con su situación particular, al tratamiento basado en el
        interés legítimo (como la telemetría técnica mediante Application
        Insights).
      </p>
      <p>
        <strong>Derecho a presentar una reclamación:</strong> si el usuario
        considera que el tratamiento de sus datos vulnera la normativa de
        protección de datos, tiene derecho a presentar una reclamación ante la
        autoridad de control competente. Para los usuarios de la Unión Europea,
        la autoridad principal es el Garante para la Protección de Datos
        Personales de Italia (o la autoridad local competente según el país de
        residencia del usuario). No obstante, invitamos a los usuarios a que se
        dirijan primero a nosotros para cualquier duda o solicitud, a fin de
        poder resolver la cuestión de manera amistosa.
      </p>
      <p>
        GymBroTools no vende, ni tiene intención de vender, los datos personales
        de los usuarios según la definición de la California Consumer Privacy
        Act (CCPA). Los usuarios de California pueden ejercer sus derechos
        escribiendo a{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>
      <p>
        Para ejercer sus derechos, el usuario puede contactarnos en cualquier
        momento a través del correo electrónico{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>. Las
        solicitudes se atenderán dentro de los plazos previstos por la ley
        (normalmente en un plazo de 30 días, prorrogable en caso de solicitudes
        complejas) y sin coste para el usuario, salvo solicitudes
        manifiestamente infundadas o excesivas.
      </p>

      <h2>7. Seguridad y protección de los datos</h2>
      <p>
        La seguridad de los datos de los usuarios es una prioridad. Hemos
        implementado medidas técnicas y organizativas adecuadas para proteger
        los datos personales frente a accesos no autorizados, divulgación
        indebida, alteración o destrucción. En particular:
      </p>
      <p>
        Todas las comunicaciones entre la app GymBroTools y el servidor se
        realizan a través del protocolo seguro HTTPS, garantizando que los datos
        transmitidos (como las credenciales de autenticación o las
        actualizaciones de entrenamientos) estén cifrados durante la transmisión
        y no puedan ser interceptados por terceros.
      </p>
      <p>
        Los datos de los usuarios (incluidos los de la cuenta y los ejercicios)
        se almacenan en servidores cloud seguros proporcionados por Microsoft
        Azure. Estos servidores se benefician de las medidas de seguridad
        avanzadas de Microsoft, como el cifrado de los datos en reposo,
        cortafuegos, sistemas de prevención de intrusiones y monitorización
        continua de vulnerabilidades. Solo el desarrollador autorizado puede
        acceder a estos sistemas y únicamente por motivos relacionados con el
        mantenimiento y la gestión de la app.
      </p>
      <p>
        Las credenciales de autenticación y otra información sensible se
        gestionan de forma segura. GymBroTools integra Microsoft Entra ID (Azure
        AD) para la autenticación: esto significa que la app no almacena
        contraseñas en texto claro en sus bases de datos, confiando en Microsoft
        la gestión segura del acceso (p. ej., mediante tokens OIDC/PKCE).
        Cualesquiera tokens de autenticación se almacenan de forma segura en el
        dispositivo del usuario y no son accesibles por otras apps.
      </p>
      <p>
        Hemos configurado los servicios de telemetría para minimizar los datos
        recogidos y anonimizamos cualquier información potencialmente personal.
        Por ejemplo, Application Insights no utiliza cookies en la app (al ser
        una app móvil) y elimina automáticamente posibles referencias a
        identificadores personales en los registros.
      </p>

      <h2>8. Responsable del tratamiento y contacto</h2>
      <p>
        El responsable del tratamiento de datos de la app GymBroTools es Marco
        Crupi, desarrollador independiente, contactable en el correo{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> para
        cualquier solicitud relativa a la privacidad y la protección de datos
        personales.
      </p>

      <h2>
        9. Modificaciones y actualizaciones de esta Política de Privacidad
      </h2>
      <p>
        La presente Política de Privacidad puede estar sujeta a cambios y
        actualizaciones con el tiempo, también como consecuencia de cambios
        normativos, evoluciones tecnológicas o actualizaciones de las
        funcionalidades de la app. En caso de cambios relevantes, informaremos a
        los usuarios mediante una comunicación dentro de la app u otros canales
        adecuados. Recomendamos a los usuarios consultar periódicamente esta
        política para mantenerse informados sobre el tratamiento de sus datos
        personales.
      </p>
    </div>
  );
}
