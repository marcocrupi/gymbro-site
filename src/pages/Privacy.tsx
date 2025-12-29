export default function Privacy() {
  const updated = new Date().toLocaleDateString("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="container privacy">
      <h1>Informativa Privacy del’app GymBroTools</h1>
      <p className="muted">Ultimo aggiornamento: {updated}</p>

      <h2>1. Introduzione e Ambito di Applicazione</h2>
      <p>
        GymBroTools è un'applicazione mobile per il fitness disponibile a
        livello globale. La presente Privacy Policy descrive come GymBroTools
        raccoglie, utilizza e protegge i dati personali degli utenti. L'app è
        sviluppata e gestita da un singolo sviluppatore privato (non da
        un'azienda) e si impegna a tutelare la privacy di tutti gli utenti.
      </p>
      <p>
        <strong>IMPORTANTE:</strong> l'app è destinata a utenti di età pari o
        superiore a 13 anni. L'utilizzo dell'app da parte di minori di 13 anni
        non è consentito.
      </p>
      <p>
        Questa informativa si applica a tutti i servizi offerti tramite l'app
        GymBroTools.
      </p>

      <h2>2. Minori</h2>
      <p>
        <strong>Minori di 13 anni:</strong> GymBroTools non è destinata a minori
        di 13 anni e non raccogliamo intenzionalmente dati personali di bambini
        sotto tale età. Se un genitore o tutore ritiene che un minore di 13 anni
        abbia fornito dati personali attraverso l'app, è invitato a contattarci
        immediatamente a{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> per
        richiederne la cancellazione.
      </p>
      <p>
        <strong>Utenti tra 13 e 17 anni:</strong> gli utenti minorenni (13-17
        anni) possono utilizzare l'app. Si consiglia la supervisione di un
        genitore o tutore, che può aiutare a garantire un utilizzo responsabile
        dell'applicazione.
      </p>

      <h2>3. Tipologie di Dati Raccolti</h2>
      <p>
        Non raccogliamo dati personali identificativi salvo quanto strettamente
        necessario per il funzionamento dell’app. In particolare, GymBroTools
        raccoglie le seguenti tipologie di dati:
      </p>
      <p>
        <strong>Dati forniti dall’utente:</strong> informazioni che l’utente
        inserisce volontariamente, come ad esempio i dati di registrazione (es.
        email o username) e i dettagli degli allenamenti (serie, ripetizioni,
        pesi sollevati). Questi dati servono a creare l’account e a permettere
        all’utente di salvare e consultare i propri allenamenti. Le informazioni
        inserite rimangono private, visibili solo all’utente stesso e non
        vengono condivise con altri utenti o terze parti esterne a quanto
        descritto in questa policy. Importante: GymBroTools non richiede né
        raccoglie alcun dato personale “sensibile” o biologico, come dati
        biometrici, informazioni sanitarie, foto, posizione GPS, contatti o
        altri dati non necessari all’uso dell’app.
      </p>
      <p>
        <strong>Dati tecnici di utilizzo (telemetria):</strong> l’app utilizza
        Microsoft Application Insights per raccogliere automaticamente dati
        tecnici anonimi sull’utilizzo e sul funzionamento dell’app. Queste
        informazioni includono ad esempio log di errori, metriche di
        performance, dati di dispositivo (come modello, sistema operativo) e
        eventi tecnici generali (ad es. caricamento di una schermata o chiamata
        API). Tale telemetria non contiene dati personali identificativi: non
        vengono registrati nomi, email, indirizzi o contenuti personali degli
        utenti. Abbiamo configurato la telemetria in modo da escludere
        informazioni potenzialmente identificative (ad es. URL completi,
        indirizzi email, ID utente) e raccogliere solo dati utili a garantire
        stabilità e sicurezza dell’app. Application Insights è sempre attivo per
        monitorare lo stato dell’applicazione ed è impostato con un
        campionamento limitato (in produzione) per ridurre al minimo la quantità
        di dati raccolti.
      </p>
      

      <h2>4. Finalità del Trattamento</h2>
      <p>
        Trattiamo i dati raccolti per le seguenti finalità, in modo conforme ai
        principi di liceità e minimizzazione:
      </p>
      <p>
        <strong>Fornire il servizio e funzionalità dell’app:</strong>{" "}
        utilizziamo i dati forniti dall’utente (ad es. account e dati degli
        allenamenti) per permettere all’utente di registrarsi, accedere al
        proprio profilo, salvare gli esercizi e visualizzare statistiche. Questo
        trattamento dei dati è essenziale per il funzionamento di GymBroTools e
        per offrire all’utente le funzionalità richieste (es. sincronizzare i
        propri allenamenti tra dispositivi in modalità offline-first).
      </p>
      <p>
        <strong>Migliorare stabilità, sicurezza e prestazioni:</strong> i dati
        tecnici raccolti tramite Application Insights vengono utilizzati
        esclusivamente per monitorare lo stato dell’app, individuare bug,
        prevenire crash, analizzare le performance e garantire la sicurezza del
        servizio. Queste informazioni ci aiutano a correggere errori,
        ottimizzare l’infrastruttura e assicurare che l’app funzioni in modo
        affidabile su diversi dispositivi.
      </p>
      
      <p>
        <strong>Comunicazioni di supporto:</strong> eventualmente, i dati di
        contatto (come l’email fornita in fase di registrazione) potranno essere
        utilizzati per comunicazioni di servizio strettamente legate all’app, ad
        esempio per rispondere a richieste di supporto tecnico o inviare avvisi
        importanti sul funzionamento dell’app. GymBroTools non invia newsletter
        promozionali né comunicazioni di marketing non richieste.
      </p>
      <p>
        Si precisa che i dati non vengono mai utilizzati per finalità di
        profilazione a fini commerciali, pubblicitari di terze parti o decisioni
        automatizzate che producano effetti giuridici sull’utente. Ogni
        trattamento avviene nei limiti delle finalità sopra descritte.
      </p>

      <h2>5. Base Giuridica del Trattamento</h2>
      <p>
        Trattiamo i dati personali degli utenti solo se esiste una base legale
        che lo consenta secondo le normative applicabili (Regolamento UE
        2016/679 “GDPR” e leggi equivalenti in altre giurisdizioni). In
        relazione alle finalità sopra esposte, le basi giuridiche sono:
      </p>
      <p>
        <strong>Esecuzione di un contratto o misure precontrattuali:</strong>{" "}
        per i dati forniti direttamente dall’utente (come dati account e
        allenamenti) il trattamento è necessario per fornire il servizio
        richiesto. Quando l’utente crea un account e utilizza GymBroTools, si
        instaura un rapporto contrattuale implicito: i suoi dati vengono
        processati per poter utilizzare l’app e le sue funzionalità (art.
        6(1)(b) GDPR). Senza questi dati non potremmo fornire le funzioni di
        registrazione, salvataggio degli esercizi e altre caratteristiche chiave
        dell’app.
      </p>
      <p>
        <strong>Legittimo interesse:</strong> il trattamento dei dati di
        telemetria tecnica tramite Application Insights si basa sul legittimo
        interesse dello sviluppatore (art. 6(1)(f) GDPR). Tale interesse
        legittimo consiste nell’assicurare stabilità, sicurezza e miglioramento
        continuo del servizio, a beneficio sia dello sviluppatore che degli
        utenti. Abbiamo valutato che questo trattamento, limitato a dati anonimi
        e tecnici, non lede i diritti e le libertà degli utenti (anche grazie
        all’assenza di informazioni personali identificative). L’app richiede
        comunque l’accettazione di Termini e Privacy all’installazione, rendendo
        gli utenti consapevoli di questa telemetria di base. L’utente ha il
        diritto di opporsi per motivi relativi alla sua situazione particolare
        (vedi sezione Diritti), tenendo conto che la telemetria è fondamentale
        per prevenire malfunzionamenti e proteggere i dati.
      </p>
      
      <p>
        Oltre a queste basi principali, GymBroTools può trattare dati personali
        per adempiere eventuali obblighi di legge applicabili (art. 6(1)(c)
        GDPR) o per tutelare interessi vitali degli utenti o altri (ipotesi
        rare, art. 6(1)(d)), anche se in pratica queste circostanze non si
        presentano nell’uso ordinario dell’app.
      </p>

      <h2>6. Modalità del Trattamento e Durata di Conservazione dei Dati</h2>
      <p>
        Trattiamo i dati personali degli utenti in forma prevalentemente
        elettronica e automatizzata, adottando misure di sicurezza adeguate a
        prevenire accessi non autorizzati, divulgazione o alterazione dei dati.
        I dati sono conservati su server sicuri (es. infrastrutture cloud
        Microsoft Azure) e protetti mediante tecniche di crittografia e
        controllo degli accessi. Lo sviluppatore unico di GymBroTools è l’unico
        ad avere accesso diretto ai dati a fini di gestione dell’app, e tratta
        tali dati in modo strettamente confidenziale. Non sono presenti altri
        incaricati o personale terzo che accede ai dati personali, salvo i
        servizi esterni menzionati (Microsoft) che agiscono come fornitori
        tecnici secondo quanto descritto.
      </p>
      <p>
        Conserviamo i dati solo per il tempo necessario a raggiungere le
        finalità per cui sono stati raccolti, dopodiché provvediamo a
        cancellarli o ad anonimizzarli. Di seguito le durate specifiche di
        conservazione per ciascuna tipologia di dato:
      </p>
      <p>
        <strong>Dati account e dati degli allenamenti:</strong> le informazioni
        fornite dall’utente (es. email di registrazione, nome utente,
        serie/ripetizioni/pesi salvati) sono conservate per tutta la durata
        dell’attivazione dell’account. In pratica, tali dati restano memorizzati
        finché l’utente continua ad usare l’app e mantiene il proprio account
        attivo, in modo da permettergli di accedere al suo storico di
        allenamenti. L’utente ha sempre la possibilità di modificare o
        cancellare singoli dati (ad es. eliminare un allenamento) direttamente
        dall’app. Inoltre, può richiedere in qualsiasi momento la cancellazione
        completa dell’account (vedi Diritti dell’utente): in tal caso tutti i
        dati personali associati all’account saranno eliminati in modo
        permanente dai nostri sistemi entro tempi tecnici brevi. Potrebbero
        essere conservati dati limitati oltre la cancellazione solo in forma
        aggregata o anonima, o per obblighi di legge (es. log di sicurezza), ma
        non in modo da identificare l’utente.
      </p>
      <p>
        <strong>Dati di telemetria tecnica (Application Insights):</strong> i
        dati raccolti automaticamente su errori e performance tramite
        Application Insights sono conservati per un periodo massimo di 90
        giorni. Questo limite di conservazione è in linea con le impostazioni
        standard della piattaforma e serve a disporre di uno storico recente per
        analisi e debugging, senza mantenere informazioni più a lungo del
        necessario. Trascorso circa 90 giorni, i log e le telemetrie più vecchie
        vengono cancellati o sovrascritti automaticamente. In qualunque caso,
        trattandosi di dati anonimi, non è possibile risalire a un utente
        specifico da queste informazioni, e la loro eliminazione avviene in
        conformità alle policy di retention di Microsoft Azure Application
        Insights.
      </p>
      
      <p>
        <strong>Trasferimento di dati all’estero:</strong> i dati personali
        raccolti da GymBroTools possono essere trasferiti e trattati in Paesi al
        di fuori dello Spazio Economico Europeo (SEE), in particolare laddove
        risiedano i server dei fornitori di servizi cloud utilizzati, come
        Microsoft Azure. In tali casi, ci assicuriamo che siano adottate
        adeguate garanzie per la protezione dei dati, come l’adozione di
        clausole contrattuali standard approvate dalla Commissione Europea o
        altri strumenti legali previsti dalla normativa applicabile, al fine di
        garantire un livello di protezione equivalente a quello previsto dal
        GDPR.
      </p>
      <p>
        Allo scadere dei periodi sopra indicati, i dati vengono cancellati in
        modo sicuro oppure resi anonimi in modo irreversibile (così che non
        siano più associabili a un utente). Ricordiamo che l’utente può sempre
        richiedere la cancellazione anticipata dei propri dati personali, e
        GymBroTools darà seguito a tali richieste nei tempi previsti dalla legge
        (vedi sezione Diritti degli utenti).
      </p>

      <h2>7. Diritti degli Utenti</h2>
      <p>
        Gli utenti di GymBroTools, in qualità di interessati, godono di una
        serie di diritti in materia di protezione dei dati personali. In
        particolare, l’utente potrà in qualsiasi momento esercitare i seguenti
        diritti:
      </p>
      <p>
        <strong>Diritto di accesso:</strong> diritto di ottenere la conferma che
        sia o meno in corso un trattamento di dati personali che lo riguardano
        e, in tal caso, di ottenere l’accesso a tali dati insieme ad
        informazioni su finalità, categorie di dati trattati, destinatari,
        periodo di conservazione e sull’esistenza degli altri diritti qui
        elencati. In pratica, l’utente può richiedere una copia dei propri dati
        in nostro possesso e informazioni su come li utilizziamo.
      </p>
      <p>
        <strong>Diritto di rettifica:</strong> diritto di far correggere o
        aggiornare dati personali inesatti o incompleti che lo riguardano.
        GymBroTools consente all’utente di modificare alcuni dati (ad esempio
        aggiornare il nome utente) direttamente dalle impostazioni. In
        alternativa, l’utente può contattare il supporto per richiedere la
        correzione di eventuali informazioni errate nei nostri sistemi.
      </p>
      <p>
        <strong>Diritto alla cancellazione (“diritto all’oblio”):</strong>{" "}
        diritto di ottenere la cancellazione dei dati personali che lo
        riguardano, se sussistono i presupposti (ad es. dati non più necessari
        rispetto alle finalità, revoca del consenso su cui si basava il
        trattamento, opposizione al trattamento di legittimo interesse,
        trattamento illecito, obbligo legale di cancellazione). In contesti
        ordinari, l’utente può eliminare autonomamente il proprio account
        attraverso l’apposita funzione nell’app: ciò comporterà la rimozione
        permanente di tutti i dati personali (allenamenti inclusi) associati a
        quell’account, salvo dove la conservazione sia imposta per legge. Se la
        cancellazione tramite app non fosse possibile, l’utente può fare
        richiesta al supporto e provvederemo a cancellare i dati manualmente.
      </p>
      <p>
        <strong>Diritto di limitazione del trattamento:</strong> diritto di
        ottenere il congelamento del trattamento dei propri dati in determinate
        circostanze (ad es. se l’utente contesta l’esattezza dei dati o la
        legittimità del trattamento), per il tempo necessario alle verifiche del
        caso. In pratica, su richiesta dell’utente, possiamo sospendere
        temporaneamente ogni utilizzo dei dati (salvo la sola conservazione)
        finché la questione non sia risolta.
      </p>
      <p>
        <strong>Diritto alla portabilità dei dati:</strong> diritto di ricevere
        in formato strutturato, di uso comune e leggibile da dispositivo
        automatico i dati personali forniti dall’utente, e di trasmettere tali
        dati a un altro titolare del trattamento senza impedimenti. Su
        richiesta, forniremo all’utente un estratto dei dati principali del suo
        account (es. elenco degli allenamenti registrati) in un formato
        elettronico facilmente consultabile, così che possa riutilizzarli
        altrove. Se tecnicamente fattibile, potremo anche – su richiesta
        dell’utente – trasferire i dati direttamente a un diverso servizio
        indicato dall’utente.
      </p>
      <p>
        <strong>Diritto di opposizione:</strong> diritto di opporsi in qualsiasi
        momento, per motivi connessi alla sua situazione particolare, al
        trattamento dei dati personali basato sul legittimo interesse. Nel caso
        di GymBroTools, ciò si applica soprattutto alla telemetria tecnica
        raccolta per legittimo interesse: l’utente ha il diritto di opporsi a
        questo trattamento se ritiene che la sua situazione personale lo
        richieda. In tal caso, salvo che vi siano motivi legittimi cogenti per
        continuare il trattamento (ad es. la necessità di garantire la sicurezza
        del servizio), ci asterremo dal trattare ulteriormente i dati di
        telemetria riferiti a quell’utente. Nota: Poiché la telemetria tecnica è
        raccolta in forma anonima e senza identificatori personali,
        l’opposizione potrà essere esercitata in forma generale (ad es.
        disinstallando l’app o contattandoci per trovare soluzioni tecniche di
        opt-out).
      </p>
      <p>
        <strong>Diritto di reclamo:</strong> qualora l’utente ritenga che il
        trattamento dei suoi dati avvenga in violazione della normativa sulla
        protezione dei dati, ha il diritto di proporre reclamo all’autorità di
        controllo competente. Per gli utenti nell’Unione Europea, l’autorità
        principale è il Garante per la Protezione dei Dati Personali italiano (o
        altro autorità locale competente in base al paese di residenza
        dell’utente). Invitiamo comunque gli utenti a rivolgersi prima a noi per
        qualsiasi dubbio o richiesta, in modo da poter risolvere amichevolmente
        la questione.
      </p>
      <p>
        GymBroTools non vende, né intende vendere, i dati personali degli utenti
        come previsto dal California Consumer Privacy Act (CCPA). Gli utenti
        della California possono esercitare i loro diritti scrivendo a{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>
      <p>
        Per esercitare i propri diritti, l’utente può contattarci in qualsiasi
        momento attraverso l’email{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>. Le
        richieste saranno evase entro i termini previsti dalla legge (di norma
        entro 30 giorni, prorogabili in caso di richieste complesse) e senza
        oneri a carico dell’utente, salvo richieste manifestamente infondate o
        eccessive.
      </p>

      <h2>8. Sicurezza e Protezione dei Dati</h2>
      <p>
        La sicurezza dei dati degli utenti è per noi una priorità. Abbiamo messo
        in atto misure tecniche e organizzative adeguate per proteggere i dati
        personali da accessi non autorizzati, divulgazione indebita, alterazione
        o distruzione. In particolare:
      </p>
      <p>
        Tutte le comunicazioni tra l’app GymBroTools e il server avvengono
        tramite protocollo sicuro HTTPS, garantendo che i dati trasmessi (come
        le credenziali di autenticazione o gli aggiornamenti degli allenamenti)
        siano crittografati durante il trasferimento e non intercettabili da
        terzi.
      </p>
      <p>
        I dati degli utenti (inclusi i dati degli account e degli esercizi) sono
        conservati su server cloud sicuri, forniti da Microsoft Azure. Questi
        server beneficiano delle misure di sicurezza avanzate di Microsoft, come
        la crittografia dei dati a riposo, firewall, sistemi di prevenzione
        delle intrusioni e monitoraggio costante delle vulnerabilità. Solo lo
        sviluppatore autorizzato può accedere a questi sistemi e solo per motivi
        legati alla manutenzione e gestione dell’app.
      </p>
      <p>
        Le credenziali di autenticazione e altre informazioni sensibili sono
        gestite in modo sicuro. GymBroTools integra il servizio Microsoft Entra
        ID (Azure AD) per l’autenticazione: ciò significa che l’app non
        memorizza password in chiaro nei propri database, affidando a Microsoft
        la gestione sicura dell’accesso (es. tramite token OIDC/PKCE). Eventuali
        token di autenticazione sono conservati in modo sicuro sul dispositivo
        dell’utente e non sono accessibili ad altre app.
      </p>
      <p>
        Abbiamo configurato i servizi di telemetria in modo da minimizzare i
        dati raccolti e anonimizziamo qualunque potenziale informazione
        personale. Ad esempio, Application Insights non utilizza cookie nell’app
        (essendo un’app mobile) e rimuove automaticamente eventuali riferimenti
        a identificatori personali nei log.
      </p>

      <h2>9. Titolare del Trattamento e Contatti</h2>
      <p>
        Il titolare del trattamento dei dati per l’app GymBroTools è Marco
        Crupi, sviluppatore indipendente, contattabile all’indirizzo email{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> per
        ogni richiesta relativa a privacy e protezione dei dati personali.
      </p>

      <h2>10. Modifiche e aggiornamenti della Privacy Policy</h2>
      <p>
        La presente Privacy Policy può essere soggetta a modifiche e
        aggiornamenti nel tempo, anche in conseguenza di cambiamenti normativi,
        evoluzioni tecnologiche o aggiornamenti delle funzionalità dell’app. In
        caso di modifiche rilevanti, informeremo gli utenti attraverso apposita
        comunicazione in-app o altri canali appropriati. Invitiamo gli utenti a
        consultare periodicamente questa informativa per restare aggiornati
        sulle modalità di trattamento dei dati personali.
      </p>
    </div>
  );
}
