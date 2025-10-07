export default function PrivacyWebsite() {
  const updated = new Date().toLocaleDateString("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="container privacy">
      <h1>Informativa Privacy e Cookie — Sito web</h1>
      <p className="muted">Ultimo aggiornamento: {updated}</p>

      <h2>1. Oggetto dell'informativa</h2>
      <p>
        Questa informativa riguarda esclusivamente il <strong>sito web</strong>{" "}
        di GymBroTools (statico, ospitato su GitHub Pages, con dominio
        personalizzato). Per la privacy dell'<strong>app mobile</strong> si veda
        la pagina dedicata: <a href="/privacy">Privacy dell'app</a>.
      </p>

      <h2>2. Titolare del trattamento e contatti</h2>
      <p>
        Titolare: Marco Crupi — Email:{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
      </p>

      <h2>3. Tipi di dati trattati tramite il sito</h2>
      <p>
        <strong>Dati di navigazione e log tecnici (hosting):</strong> durante la
        visita potrebbero essere generati e trattati dati come indirizzo IP,
        user‑agent del browser, data/ora, URL richiesto, referrer e informazioni
        tecniche necessarie all'erogazione e alla sicurezza (ad es. prevenzione
        abusi). Tali dati sono gestiti dall'hosting/CDN utilizzati per il sito.
      </p>
      <p>
        <strong>Cookie e tecnologie simili:</strong> il sito{" "}
        <strong>non</strong> utilizza cookie di profilazione o strumenti di
        tracciamento di terze parti. Non vengono installati pixel, analytics o
        social plugin. Usiamo esclusivamente uno <em>storage tecnico</em> locale
        per ricordare la lingua preferita: chiave <code>"gymbro.lang"</code> in{" "}
        <code>localStorage</code> del browser. Tale salvataggio è facoltativo e
        può essere cancellato dall'utente in qualsiasi momento tramite le
        impostazioni del browser.
      </p>
      <p>
        <strong>Moduli e conferimenti volontari:</strong> il sito non include
        moduli di contatto né aree di registrazione. Se ci contatti via email,
        useremo i dati da te forniti esclusivamente per rispondere.
      </p>

      <h2>4. Finalità e basi giuridiche</h2>
      <p>
        <strong>Erogazione del sito e sicurezza</strong> (log tecnici/hosting):
        base giuridica <em>legittimo interesse</em> del Titolare a garantire la
        fruizione sicura e continua del sito (art. 6.1.f GDPR).
      </p>
      <p>
        <strong>Preferenza lingua</strong> (memorizzata in{" "}
        <code>localStorage</code>): base giuridica{" "}
        <em>necessità di esecuzione di misure precontrattuali/contrattuali</em>{" "}
        e legittimo interesse a fornire un'esperienza coerente (art. 6.1.b e
        6.1.f GDPR). Non è richiesto consenso in quanto si tratta di uno
        strumento tecnico non finalizzato al tracciamento.
      </p>

      <h2>5. Conservazione</h2>
      <p>
        Il sito non mantiene banche dati proprie di dati personali. Gli
        eventuali log tecnici sono gestiti dall'hosting e conservati per i tempi
        indicati dal relativo fornitore. La preferenza lingua resta nel tuo
        browser fino alla sua cancellazione manuale o alla pulizia dello
        storage.
      </p>

      <h2>6. Destinatari e hosting</h2>
      <p>
        Il sito è ospitato su <strong>GitHub Pages</strong> (GitHub, Inc.) e può
        utilizzare una rete di distribuzione di contenuti (CDN). Tali soggetti
        possono trattare i dati tecnici necessari a erogare il servizio e a
        garantirne la sicurezza. Maggiori informazioni sono disponibili nella{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Informativa privacy di GitHub
        </a>
        .
      </p>

      <h2>7. Trasferimenti extra‑UE</h2>
      <p>
        L'infrastruttura dell'hosting/CDN può comportare trasferimenti verso
        Paesi extra‑UE/SEE. In tali casi, i fornitori applicano le misure
        previste dal GDPR (ad es. Clausole Contrattuali Standard). Per dettagli,
        consulta l'informativa del fornitore indicata sopra.
      </p>

      <h2>8. Diritti dell'interessato</h2>
      <p>
        Hai diritto di accesso, rettifica, cancellazione, limitazione,
        opposizione, portabilità, nonché a proporre reclamo all'Autorità
        Garante. Per esercitare i diritti, contatta il Titolare via email a{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>

      <h2>9. Sicurezza</h2>
      <p>
        Il sito è statico e non espone aree autenticare o raccolte dati.
        L'hosting adotta misure tecniche e organizzative idonee; il Titolare
        seleziona fornitori affidabili e minimizza i dati trattati.
      </p>

      <h2>10. Aggiornamenti</h2>
      <p>
        L'informativa può essere aggiornata per adeguamenti normativi o tecnici.
        Le versioni aggiornate sono pubblicate su questa pagina.
      </p>

      <p className="muted">
        Collegamenti utili: <a href="/privacy">Privacy dell'app</a> ·{" "}
        <a href="/terms">Termini e Condizioni</a>
      </p>
    </div>
  );
}
