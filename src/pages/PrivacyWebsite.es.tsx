export default function PrivacyWebsiteEs() {
  const updated = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <div className="container privacy">
      <h1>Aviso de Privacidad y Cookies — Sitio web</h1>
      <p className="muted">Última actualización: {updated}</p>

      <h2>1. Ámbito del aviso</h2>
      <p>
        Este aviso se aplica exclusivamente al <strong>sitio web</strong> de
        GymBroTools (sitio estático, alojado en GitHub Pages con dominio
        personalizado). Para la privacidad de la <strong>app móvil</strong>,
        consulta la página dedicada: <a href="/privacy">Privacidad de la app</a>.
      </p>

      <h2>2. Responsable del tratamiento y contacto</h2>
      <p>
        Responsable: Marco Crupi — Correo: {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
      </p>

      <h2>3. Tipos de datos tratados a través del sitio</h2>
      <p>
        <strong>Datos de navegación y registros técnicos (hosting):</strong>
        durante la visita pueden generarse y tratarse datos como la dirección
        IP, el <em>user‑agent</em> del navegador, la fecha/hora, la URL
        solicitada, el <em>referrer</em> y otra información técnica necesaria
        para la prestación y seguridad (p. ej., prevención de abusos). Estos
        datos son gestionados por el proveedor de alojamiento/CDN utilizado por
        el sitio.
      </p>
      <p>
        <strong>Cookies y tecnologías similares:</strong> el sitio <strong>no</strong>
        utiliza cookies de perfilado ni herramientas de seguimiento de terceros.
        No se instalan píxeles, sistemas de analítica ni plugins sociales. Solo
        usamos un <em>almacenamiento técnico</em> local para recordar el idioma
        preferido: clave <code>"gymbro.lang"</code> en el <code>localStorage</code>
        del navegador. Este guardado es opcional y el usuario puede borrarlo en
        cualquier momento desde la configuración del navegador.
      </p>
      <p>
        <strong>Formularios y envíos voluntarios:</strong> el sitio no incluye
        formularios de contacto ni áreas de registro. Si nos contactas por
        correo electrónico, utilizaremos los datos facilitados únicamente para
        responder.
      </p>

      <h2>4. Finalidades y bases jurídicas</h2>
      <p>
        <strong>Prestación del sitio y seguridad</strong> (registros técnicos/
        hosting): base jurídica el <em>interés legítimo</em> del Responsable en
        garantizar una experiencia segura y continua del sitio (art. 6(1)(f)
        GDPR).
      </p>
      <p>
        <strong>Preferencia de idioma</strong> (almacenada en {" "}
        <code>localStorage</code>): base jurídica la <em>necesidad de ejecutar
        medidas precontractuales/contractuales</em> y el interés legítimo en
        ofrecer una experiencia coherente (art. 6(1)(b) y 6(1)(f) GDPR). No se
        requiere consentimiento por tratarse de una herramienta técnica no
        destinada al seguimiento.
      </p>

      <h2>5. Conservación</h2>
      <p>
        El sitio no mantiene bases de datos propias de datos personales. Los
        eventuales registros técnicos son gestionados por el proveedor de
        alojamiento y se conservan durante los plazos indicados por dicho
        proveedor. La preferencia de idioma permanece en tu navegador hasta que
        la elimines manualmente o borres el almacenamiento del sitio.
      </p>

      <h2>6. Destinatarios y alojamiento</h2>
      <p>
        El sitio está alojado en <strong>GitHub Pages</strong> (GitHub, Inc.) y
        puede utilizar una red de distribución de contenidos (CDN). Estos
        proveedores pueden tratar los datos técnicos necesarios para prestar el
        servicio y garantizar su seguridad. Encontrarás más información en la
        {" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Declaración de Privacidad de GitHub
        </a>
        .
      </p>

      <h2>7. Transferencias fuera de la UE</h2>
      <p>
        La infraestructura del alojamiento/CDN puede implicar transferencias a
        países fuera de la UE/EEE. En tales casos, los proveedores aplican las
        garantías previstas por el GDPR (p. ej., Cláusulas Contractuales
        Tipo). Para más detalles, consulta el aviso del proveedor indicado
        anteriormente.
      </p>

      <h2>8. Derechos del interesado</h2>
      <p>
        Tienes derecho de acceso, rectificación, supresión, limitación,
        oposición y portabilidad, así como a presentar una reclamación ante la
        autoridad de control competente. Para ejercer tus derechos, contacta con
        el Responsable por correo electrónico en {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        El sitio es estático y no expone áreas autenticadas ni formularios de
        recogida de datos. El proveedor de alojamiento adopta medidas técnicas y
        organizativas adecuadas; el Responsable selecciona proveedores fiables y
        minimiza los datos tratados.
      </p>

      <h2>10. Actualizaciones</h2>
      <p>
        Este aviso puede actualizarse para reflejar cambios legales o técnicos.
        Las versiones actualizadas se publican en esta misma página.
      </p>

      <p className="muted">
        Enlaces útiles: <a href="/privacy">Privacidad de la app</a> · {" "}
        <a href="/terms">Términos y Condiciones</a>
      </p>
    </div>
  )
}

