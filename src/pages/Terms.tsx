export default function Terms() {
  const updated = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container terms">
      <h1>Termini e Condizioni</h1>
      <p className="muted">Ultimo aggiornamento: {updated}</p>

      <p>
        Questi Termini e Condizioni regolano l'uso dell'applicazione
        <strong> GymBroTools</strong>. Utilizzando l'app, accetti integralmente i presenti
        termini. Questa pagina è un placeholder: sostituisci il contenuto con la
        versione definitiva prima della pubblicazione.
      </p>

      <h2>Uso dell'app</h2>
      <p>L'app è fornita "così com'è" senza garanzie di alcun tipo.</p>

      <h2>Limitazione di responsabilità</h2>
      <p>Gli autori non sono responsabili per danni indiretti o conseguenti.</p>

      <h2>Contatti</h2>
      <p>
        Per richieste sui termini: <a href="mailto:your-email@example.com">your-email@example.com</a>.
      </p>
    </div>
  )
}

