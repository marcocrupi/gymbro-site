export default function PrivacyWebsiteDe() {
  const updated = new Date().toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <div className="container privacy">
      <h1>Datenschutzhinweis und Cookies — Website</h1>
      <p className="muted">Zuletzt aktualisiert: {updated}</p>

      <h2>1. Geltungsbereich dieses Hinweises</h2>
      <p>
        Dieser Hinweis gilt ausschließlich für die <strong>Website</strong> von
        GymBroTools (statische Seite, gehostet auf GitHub Pages mit eigener
        Domain). Die Datenschutzinformationen für die <strong>Mobile‑App</strong>
        finden Sie auf der entsprechenden Seite: <a href="/privacy">App‑Datenschutz</a>.
      </p>

      <h2>2. Verantwortlicher und Kontakt</h2>
      <p>
        Verantwortlicher: Marco Crupi — E‑Mail: {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
      </p>

      <h2>3. Über die Website verarbeitete Datenarten</h2>
      <p>
        <strong>Browserdaten und technische Protokolle (Hosting):</strong> beim
        Besuch können Daten wie IP‑Adresse, Browser‑User‑Agent, Datum/Uhrzeit,
        angeforderte URL, Referrer sowie weitere technisch notwendige
        Informationen zur Bereitstellung und Sicherheit (z. B. Missbrauchsabwehr)
        anfallen und verarbeitet werden. Diese Daten werden durch den für die
        Website genutzten Hosting‑/CDN‑Anbieter verarbeitet.
      </p>
      <p>
        <strong>Cookies und ähnliche Technologien:</strong> die Website setzt
        <strong>keine</strong> Profiling‑Cookies und keine Tracking‑Tools von
        Drittanbietern ein. Es werden weder Pixel noch Analytics noch Social‑
        Plugins installiert. Wir verwenden ausschließlich einen lokalen
        <em>technischen Speicher</em>, um die bevorzugte Sprache zu merken:
        Schlüssel <code>"gymbro.lang"</code> im <code>localStorage</code> des
        Browsers. Diese Speicherung ist optional und kann vom Nutzer jederzeit
        über die Browsereinstellungen gelöscht werden.
      </p>
      <p>
        <strong>Formulare und freiwillige Übermittlungen:</strong> die Website
        enthält keine Kontaktformulare und keine Registrierungsbereiche. Wenn Sie
        uns per E‑Mail kontaktieren, verwenden wir die mitgeteilten Daten
        ausschließlich zur Beantwortung Ihrer Anfrage.
      </p>

      <h2>4. Zwecke und Rechtsgrundlagen</h2>
      <p>
        <strong>Bereitstellung der Website und Sicherheit</strong> (technische
        Protokolle/Hosting): Rechtsgrundlage ist das <em>berechtigte Interesse</em>
        des Verantwortlichen an einer sicheren und durchgängigen Nutzung der
        Website (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        <strong>Sprachpräferenz</strong> (gespeichert im <code>localStorage</code>):
        Rechtsgrundlage ist die <em>Erforderlichkeit zur Durchführung vor‑ bzw.
        vertraglicher Maßnahmen</em> sowie das berechtigte Interesse an einer
        konsistenten Nutzererfahrung (Art. 6 Abs. 1 lit. b und lit. f DSGVO).
        Eine Einwilligung ist nicht erforderlich, da es sich um ein rein
        technisches, nicht zum Tracking bestimmtes Mittel handelt.
      </p>

      <h2>5. Aufbewahrung</h2>
      <p>
        Die Website führt keine eigenen personenbezogenen Datenbanken. Etwaige
        technische Protokolle werden vom Hoster verwaltet und entsprechend dessen
        Vorgaben aufbewahrt. Die Sprachpräferenz verbleibt in Ihrem Browser, bis
        Sie sie manuell oder durch Löschen des Website‑Speichers entfernen.
      </p>

      <h2>6. Empfänger und Hosting</h2>
      <p>
        Die Website wird auf <strong>GitHub Pages</strong> (GitHub, Inc.)
        gehostet und kann ein Content Delivery Network (CDN) nutzen. Diese
        Anbieter verarbeiten ggf. die zur Bereitstellung und Absicherung des
        Dienstes erforderlichen technischen Daten. Weitere Informationen finden
        Sie in der {" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub‑Datenschutzerklärung
        </a>
        .
      </p>

      <h2>7. Übermittlungen in Drittländer</h2>
      <p>
        Die Hosting/CDN‑Infrastruktur kann Übermittlungen in Länder außerhalb
        der EU/des EWR beinhalten. In solchen Fällen setzen die Anbieter die in
        der DSGVO vorgesehenen Garantien um (z. B. Standardvertragsklauseln).
        Details entnehmen Sie bitte dem oben verlinkten Hinweis des Anbieters.
      </p>

      <h2>8. Rechte der betroffenen Person</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung, Widerspruch und Datenübertragbarkeit sowie das Recht,
        Beschwerde bei einer Aufsichtsbehörde einzulegen. Zur Ausübung Ihrer
        Rechte kontaktieren Sie den Verantwortlichen per E‑Mail unter {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>

      <h2>9. Sicherheit</h2>
      <p>
        Die Website ist statisch und stellt weder authentifizierte Bereiche noch
        Datenerhebungsformulare bereit. Der Hoster trifft geeignete technische
        und organisatorische Maßnahmen; der Verantwortliche wählt verlässliche
        Dienstleister aus und minimiert die verarbeiteten Daten.
      </p>

      <h2>10. Aktualisierungen</h2>
      <p>
        Dieser Hinweis kann aufgrund rechtlicher oder technischer Änderungen
        aktualisiert werden. Aktualisierte Fassungen werden auf dieser Seite
        veröffentlicht.
      </p>

      <p className="muted">
        Nützliche Links: <a href="/privacy">App‑Datenschutz</a> · {" "}
        <a href="/terms">Allgemeine Geschäftsbedingungen</a>
      </p>
    </div>
  )
}

