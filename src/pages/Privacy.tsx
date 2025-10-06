export default function Privacy() {
  const updated = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container privacy">
      <h1>Privacy Policy</h1>
      <p className="muted">Ultimo aggiornamento: {updated}</p>

      <p>
        Questa informativa descrive come l'applicazione <strong>GymBroTools</strong> gestisce i
        dati degli utenti.
      </p>

      <h2>Raccolta dei dati</h2>
      <p>
        L'app non richiede la creazione di un account e non raccoglie dati personali
        identificabili. Le configurazioni dei timer e le preferenze restano salvate
        esclusivamente sul dispositivo dell'utente.
      </p>

      <h2>Dati diagnostici</h2>
      <p>
        In caso di crash o malfunzionamenti, il Play Store può inviare a noi rapporti
        anonimi contenenti informazioni tecniche (versione dispositivo/OS, stack degli errori)
        utili a migliorare la stabilità dell'app. Questi dati non permettono
        l'identificazione dell'utente.
      </p>

      <h2>Permessi</h2>
      <p>
        L'app può utilizzare notifiche e vibrazione per segnalazioni del timer. Tali
        permessi sono facoltativi e possono essere revocati in qualsiasi momento dalle
        impostazioni di sistema.
      </p>

      <h2>Conservazione</h2>
      <p>
        I dati locali restano sul dispositivo finché l'utente non disinstalla l'app o
        cancella manualmente i dati dalle impostazioni.
      </p>

      <h2>Minori</h2>
      <p>
        L'app è destinata a un pubblico generale e non raccoglie intenzionalmente dati di
        minori.
      </p>

      <h2>Contatti</h2>
      <p>
        Per domande o richieste sulla privacy è possibile scrivere a
        <a href="mailto:your-email@example.com"> your-email@example.com</a>.
        Sostituisci l'indirizzo con quello reale prima della pubblicazione.
      </p>

      <h2>Modifiche</h2>
      <p>
        Potremmo aggiornare questa informativa in futuro. Le modifiche saranno pubblicate su
        questa pagina.
      </p>
    </div>
  )
}
