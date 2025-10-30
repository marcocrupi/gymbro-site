export default function PrivacyDe() {
  const updated = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container privacy">
      <h1>Datenschutzerklärung der GymBroTools App</h1>
      <p className="muted">Letzte Aktualisierung: {updated}</p>

      <h2>1. Einleitung und Geltungsbereich</h2>
      <p>
        GymBroTools ist eine mobile Fitness‑App, die weltweit verfügbar ist. Diese
        Datenschutzerklärung beschreibt, wie GymBroTools personenbezogene Daten
        der Nutzerinnen und Nutzer erhebt, verwendet und schützt. Die App wird
        von einer einzelnen, unabhängigen Entwicklerin bzw. einem einzelnen,
        unabhängigen Entwickler (nicht von einem Unternehmen) entwickelt und
        betrieben und ist dem Schutz der Privatsphäre aller Nutzer verpflichtet.
      </p>
      <p>
        <strong>WICHTIG:</strong> Die App ist nicht für Kinder unter 13 Jahren
        bestimmt. Beim ersten Start werden Nutzer nach ihrem Geburtsjahr gefragt;
        wenn sie jünger als 13 Jahre sind, wird der Zugriff auf die App
        verweigert und es werden keine Daten erhoben oder verarbeitet. Nur
        Nutzer ab 13 Jahren dürfen GymBroTools verwenden und diese
        Datenschutzerklärung akzeptieren.
      </p>
      <p>
        GymBroTools erfasst wissentlich keine personenbezogenen Daten von
        Kindern unter 13 Jahren. Sollten wir Kenntnis davon erlangen, dass Daten
        eines Kindes unter 13 Jahren ohne überprüfbare Zustimmung der Eltern bzw.
        Erziehungsberechtigten erhoben wurden, werden wir diese Daten so schnell
        wie möglich löschen. Nutzer oder Eltern/Erziehungsberechtigte, die
        glauben, dass uns ein Minderjähriger personenbezogene Informationen
        übermittelt hat, können uns jederzeit kontaktieren, um deren umgehende
        Löschung zu verlangen.
      </p>
      <p>
        Diese Erklärung gilt für alle über die GymBroTools‑App angebotenen
        Dienste.
      </p>

      <h2>2. Arten der erhobenen Daten</h2>
      <p>
        Wir erheben keine personenbezogenen Daten, die eine Identifizierung
        ermöglichen, außer soweit dies für den Betrieb der App unbedingt
        erforderlich ist. Insbesondere erfasst GymBroTools folgende Kategorien
        von Daten:
      </p>
      <p>
        <strong>Vom Nutzer bereitgestellte Daten:</strong> Informationen, die
        der Nutzer freiwillig eingibt, z. B. Registrierungsdaten (E‑Mail oder
        Benutzername) und Trainingsdetails (Sätze, Wiederholungen, Gewichte).
        Diese Daten dienen der Erstellung des Kontos und ermöglichen es dem
        Nutzer, seine Trainings zu speichern und einzusehen. Die eingegebenen
        Informationen bleiben privat, sind nur für den Nutzer selbst sichtbar
        und werden nicht mit anderen Nutzern oder Dritten geteilt, außer wie in
        dieser Erklärung beschrieben. Wichtig: GymBroTools verlangt oder erfasst
        keine „sensiblen“ personenbezogenen oder biologischen Daten, wie
        biometrische Daten, Gesundheitsdaten, Fotos, GPS‑Standort, Kontakte oder
        andere für die Nutzung der App nicht erforderliche Informationen.
      </p>
      <p>
        <strong>Technische Nutzungsdaten (Telemetrie):</strong> Die App nutzt
        Microsoft Application Insights, um automatisch anonyme technische Daten
        zur Nutzung und zum Betrieb der App zu sammeln. Dazu gehören z. B.
        Fehlermeldungen, Leistungsmetriken, Gerätedaten (Modell, Betriebssystem)
        und allgemeine technische Ereignisse (z. B. Laden eines Bildschirms oder
        ein API‑Aufruf). Diese Telemetrie enthält keine personenbezogenen Daten:
        Es werden keine Namen, E‑Mails, Adressen oder persönliche Inhalte der
        Nutzer erfasst. Wir haben die Telemetrie so konfiguriert, dass
        potenziell identifizierende Informationen (z. B. vollständige URLs,
        E‑Mail‑Adressen, Benutzer‑IDs) ausgeschlossen werden und nur Daten
        gesammelt werden, die für Stabilität und Sicherheit der App erforderlich
        sind. Application Insights ist stets aktiv, um den Zustand der
        Anwendung zu überwachen, und ist (in Produktion) mit begrenztem
        Sampling konfiguriert, um die erhobene Datenmenge zu minimieren.
      </p>
      

      <h2>3. Zwecke der Verarbeitung</h2>
      <p>
        Wir verarbeiten die erhobenen Daten zu folgenden Zwecken, im Einklang
        mit den Grundsätzen der Rechtmäßigkeit und Datenminimierung:
      </p>
      <p>
        <strong>Bereitstellung des Dienstes und der App‑Funktionen:</strong>
        Wir verwenden die vom Nutzer bereitgestellten Daten (z. B. Konto‑ und
        Trainingsdaten), um eine Registrierung zu ermöglichen, den Zugriff auf
        das Profil zu gestatten, Übungen zu speichern und Statistiken
        anzuzeigen. Diese Verarbeitung ist für die Funktionsfähigkeit von
        GymBroTools unerlässlich und dient der Bereitstellung der gewünschten
        Funktionen (z. B. Synchronisierung von Trainings zwischen Geräten im
        offline‑first Betrieb).
      </p>
      <p>
        <strong>Verbesserung von Stabilität, Sicherheit und Leistung:</strong>
        technische Daten, die über Application Insights erfasst werden, werden
        ausschließlich genutzt, um den Zustand der App zu überwachen, Fehler zu
        identifizieren, Abstürze zu verhindern, Leistung zu analysieren und die
        Sicherheit des Dienstes zu gewährleisten. Diese Informationen helfen uns,
        Fehler zu beheben, die Infrastruktur zu optimieren und einen
        zuverlässigen Betrieb auf verschiedenen Geräten sicherzustellen.
      </p>
      
      <p>
        <strong>Support‑Kommunikation:</strong> Kontaktdaten (z. B. die bei der
        Registrierung angegebene E‑Mail) können für strikt
        dienstbezogene Mitteilungen verwendet werden, etwa um auf Supportanfragen
        zu antworten oder wichtige Hinweise zum Betrieb der App zu versenden.
        GymBroTools versendet keine Werbenewsletter und keine unaufgeforderten
        Marketingnachrichten.
      </p>
      <p>
        Daten werden niemals zu Zwecken des kommerziellen Profilings, für
        Werbung Dritter oder für automatisierte Entscheidungen verwendet, die
        rechtliche Wirkung gegenüber dem Nutzer entfalten. Jede Verarbeitung
        beschränkt sich auf die oben beschriebenen Zwecke.
      </p>

      <h2>4. Rechtsgrundlagen der Verarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, wenn eine Rechtsgrundlage
        nach geltendem Recht (EU‑Verordnung 2016/679 „DSGVO“ und gleichwertige
        Gesetze in anderen Rechtsordnungen) besteht. In Bezug auf die obigen
        Zwecke sind dies:
      </p>
      <p>
        <strong>Vertragserfüllung oder vorvertragliche Maßnahmen:</strong> Für
        Daten, die der Nutzer direkt bereitstellt (z. B. Konto‑ und
        Trainingsdaten), ist die Verarbeitung notwendig, um den gewünschten
        Dienst zu erbringen. Wenn ein Nutzer ein Konto erstellt und GymBroTools
        verwendet, besteht ein konkludentes Vertragsverhältnis: Die Daten werden
        verarbeitet, um die Nutzung der App und ihrer Funktionen zu ermöglichen
        (Art. 6 Abs. 1 lit. b DSGVO). Ohne diese Daten könnten wir Registrierung,
        Speicherung von Übungen und andere zentrale Funktionen nicht anbieten.
      </p>
      <p>
        <strong>Berechtigtes Interesse:</strong> Die Verarbeitung technischer
        Telemetriedaten über Application Insights beruht auf dem berechtigten
        Interesse des Entwicklers (Art. 6 Abs. 1 lit. f DSGVO). Dieses Interesse
        besteht in der Sicherstellung von Stabilität, Sicherheit und stetiger
        Verbesserung des Dienstes – zum Vorteil sowohl des Entwicklers als auch
        der Nutzer. Wir haben bewertet, dass diese Verarbeitung, beschränkt auf
        anonyme technische Daten, die Rechte und Freiheiten der Nutzer nicht
        beeinträchtigt (auch wegen des Verzichts auf personenbezogene
        Identifikatoren). Die App verlangt bei der Installation die Annahme von
        Nutzungsbedingungen und Datenschutzerklärung, wodurch Nutzer über diese
        Grundtelemetrie informiert werden. Nutzer haben das Recht, aus Gründen,
        die sich aus ihrer besonderen Situation ergeben, Widerspruch einzulegen
        (siehe Abschnitt Rechte), wobei zu berücksichtigen ist, dass Telemetrie
        grundlegend ist, um Fehlfunktionen zu verhindern und Daten zu schützen.
      </p>
      
      <p>
        Zusätzlich kann GymBroTools personenbezogene Daten verarbeiten, um
        gesetzlichen Pflichten nachzukommen (Art. 6 Abs. 1 lit. c DSGVO) oder um
        lebenswichtige Interessen von Nutzern oder Dritten zu schützen (seltene
        Fälle, Art. 6 Abs. 1 lit. d), auch wenn solche Umstände im üblichen
        Betrieb der App praktisch nicht auftreten.
      </p>

      <h2>5. Verarbeitungsmethoden und Aufbewahrungsdauer</h2>
      <p>
        Wir verarbeiten personenbezogene Daten überwiegend in elektronischer und
        automatisierter Form und treffen angemessene Sicherheitsmaßnahmen, um
        unbefugten Zugriff, Offenlegung oder Veränderung zu verhindern. Daten
        werden auf sicheren Servern gespeichert (z. B. Cloud‑Infrastruktur von
        Microsoft Azure) und durch Verschlüsselung und Zugriffskontrollen
        geschützt. Der alleinige Entwickler von GymBroTools ist die einzige
        Person mit direktem Zugriff auf die Daten für den App‑Betrieb und
        behandelt diese streng vertraulich. Weitere Personen oder Dritte erhalten
        keinen Zugriff, abgesehen von den genannten externen Diensten
        (Microsoft), die als technische Dienstleister gemäß dieser Beschreibung
        agieren.
      </p>
      <p>
        Wir bewahren Daten nur so lange auf, wie es zur Erreichung der Zwecke,
        für die sie erhoben wurden, erforderlich ist, und löschen oder anonymisieren
        sie anschließend. Nachfolgend die spezifischen Aufbewahrungsfristen:
      </p>
      <p>
        <strong>Konto‑ und Trainingsdaten:</strong> Vom Nutzer bereitgestellte
        Informationen (z. B. Registrierungs‑E‑Mail, Benutzername,
        gespeicherte Sätze/Wiederholungen/Gewichte) werden so lange aufbewahrt,
        wie das Konto aktiv ist. Praktisch bleiben diese Daten gespeichert,
        solange die App genutzt und das Konto aktiv gehalten wird, damit der
        Nutzer auf seine Trainingshistorie zugreifen kann. Der Nutzer kann
        einzelne Daten jederzeit ändern oder löschen (z. B. ein Training
        entfernen) und außerdem die vollständige Kontolöschung verlangen (siehe
        Rechte der Nutzer). In diesem Fall werden alle personenbezogenen Daten
        innerhalb kurzer technischer Frist dauerhaft aus unseren Systemen
        gelöscht. Begrenzte Daten können darüber hinaus nur in aggregierter oder
        anonymer Form oder zur Erfüllung gesetzlicher Pflichten (z. B.
        Sicherheitsprotokolle) aufbewahrt werden – jedoch nicht in einer Form,
        die den Nutzer identifiziert.
      </p>
      <p>
        <strong>Technische Telemetriedaten (Application Insights):</strong> Über
        Application Insights automatisch erfasste Fehler‑ und Leistungsdaten
        werden maximal 90 Tage gespeichert. Diese Frist entspricht den
        Standardeinstellungen der Plattform und dient dazu, einen aktuellen
        Verlauf für Analyse und Debugging vorzuhalten, ohne Informationen länger
        als nötig aufzubewahren. Nach rund 90 Tagen werden ältere Protokolle und
        Telemetriedaten automatisch gelöscht oder überschrieben. Da es sich um
        anonyme Daten handelt, ist eine Zuordnung zu einem bestimmten Nutzer
        nicht möglich; die Löschung erfolgt gemäß den Aufbewahrungsrichtlinien
        von Microsoft Azure Application Insights.
      </p>
      
      <p>
        <strong>Datenübermittlungen ins Ausland:</strong> Die von GymBroTools
        erhobenen personenbezogenen Daten können in Länder außerhalb des
        Europäischen Wirtschaftsraums (EWR) übertragen und dort verarbeitet
        werden, insbesondere wenn sich Server der genutzten Cloud‑Anbieter – wie
        Microsoft Azure – außerhalb des EWR befinden. In solchen Fällen stellen
        wir sicher, dass geeignete Garantien bestehen, etwa EU‑Standardvertragsklauseln
        oder andere gesetzlich vorgesehene Instrumente, um ein
        Schutzniveau zu gewährleisten, das dem der DSGVO entspricht.
      </p>
      <p>
        Nach Ablauf der genannten Fristen werden Daten sicher gelöscht oder
        irreversibel anonymisiert, sodass sie keinem Nutzer mehr zugeordnet
        werden können. Nutzer können jederzeit die vorzeitige Löschung ihrer
        personenbezogenen Daten verlangen, und GymBroTools wird solchen Anfragen
        innerhalb der gesetzlichen Fristen nachkommen (siehe Rechte der Nutzer).
      </p>

      <h2>6. Rechte der Nutzer</h2>
      <p>
        Nutzer von GymBroTools haben als betroffene Personen verschiedene Rechte
        im Bereich des Datenschutzes. Insbesondere können sie jederzeit die
        folgenden Rechte ausüben:
      </p>
      <p>
        <strong>Auskunftsrecht:</strong> Recht auf Bestätigung, ob
        personenbezogene Daten verarbeitet werden, und, falls ja, auf Auskunft
        über diese Daten sowie Informationen zu Zwecken, Kategorien, Empfängern,
        Speicherdauer und den weiteren hier aufgeführten Rechten. Praktisch
        bedeutet dies, dass Nutzer eine Kopie ihrer bei uns gespeicherten Daten
        und Informationen über deren Verwendung anfordern können.
      </p>
      <p>
        <strong>Recht auf Berichtigung:</strong> Recht auf Berichtigung
        unrichtiger personenbezogener Daten und Vervollständigung unvollständiger
        Daten. Nutzer können ihre Daten, soweit möglich, direkt in der App
        korrigieren (z. B. Kontodaten) oder uns für Aktualisierungen
        kontaktieren.
      </p>
      <p>
        <strong>Recht auf Löschung („Recht auf Vergessenwerden“):</strong> Recht
        auf Löschung personenbezogener Daten, wenn sie für die Zwecke, für die
        sie erhoben wurden, nicht mehr erforderlich sind oder wenn eine
        Einwilligung widerrufen wurde (sofern die Verarbeitung auf Einwilligung
        beruht), vorbehaltlich gesetzlicher Aufbewahrungspflichten. In der
        Praxis können Nutzer die Löschung ihres Kontos und der zugehörigen
        personenbezogenen Daten verlangen; anschließend werden die Daten innerhalb
        kurzer technischer Frist dauerhaft aus unseren Systemen gelöscht.
      </p>
      <p>
        <strong>Recht auf Einschränkung der Verarbeitung:</strong> Recht, die
        Verarbeitung in bestimmten Fällen einschränken zu lassen (z. B. wenn die
        Richtigkeit bestritten wird oder die Verarbeitung unrechtmäßig ist und
        statt Löschung die Einschränkung verlangt wird).
      </p>
      <p>
        <strong>Recht auf Datenübertragbarkeit:</strong> Recht, die sie
        betreffenden personenbezogenen Daten, die sie uns bereitgestellt haben,
        in einem strukturierten, gängigen und maschinenlesbaren Format zu
        erhalten und diese Daten an einen anderen Verantwortlichen zu
        übermitteln, sofern technisch möglich und die Verarbeitung auf
        Einwilligung oder Vertrag beruht.
      </p>
      <p>
        <strong>Widerspruchsrecht:</strong> Recht, aus Gründen, die sich aus der
        besonderen Situation des Nutzers ergeben, der Verarbeitung auf Grundlage
        berechtigten Interesses (z. B. technische Telemetrie über Application
        Insights) zu widersprechen.
      </p>
      <p>
        <strong>Recht auf Beschwerde:</strong> Wenn Nutzer annehmen, dass die
        Verarbeitung ihrer Daten gegen Datenschutzrecht verstößt, haben sie das
        Recht, Beschwerde bei der zuständigen Aufsichtsbehörde einzulegen. Für
        Nutzer in der Europäischen Union ist die federführende Behörde die
        italienische Datenschutzbehörde („Garante per la Protezione dei Dati
        Personali“) oder eine andere zuständige lokale Behörde je nach
        Wohnsitzland. Wir empfehlen, sich zunächst direkt an uns zu wenden, damit
        wir Anliegen einvernehmlich klären können.
      </p>
      <p>
        GymBroTools verkauft personenbezogene Daten der Nutzer nicht und beabsichtigt
        dies auch nicht, wie im California Consumer Privacy Act (CCPA)
        definiert. Nutzer aus Kalifornien können ihre Rechte geltend machen, indem
        sie an <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
        schreiben.
      </p>
      <p>
        Zur Ausübung ihrer Rechte können Nutzer uns jederzeit unter
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
        kontaktieren. Anfragen werden innerhalb der gesetzlich vorgesehenen
        Fristen beantwortet (in der Regel innerhalb von 30 Tagen, verlängerbar
        bei komplexen Anfragen) und sind für Nutzer kostenlos, sofern Anfragen
        nicht offensichtlich unbegründet oder exzessiv sind.
      </p>

      <h2>7. Datensicherheit und Schutz</h2>
      <p>
        Die Sicherheit der Daten unserer Nutzer hat für uns Priorität. Wir haben
        angemessene technische und organisatorische Maßnahmen implementiert, um
        personenbezogene Daten vor unbefugtem Zugriff, unzulässiger Offenlegung,
        Veränderung oder Zerstörung zu schützen. Insbesondere:
      </p>
      <p>
        Sämtliche Kommunikation zwischen der GymBroTools‑App und dem Server
        erfolgt über HTTPS und stellt sicher, dass übertragene Daten (z. B.
        Anmeldedaten oder Trainingsaktualisierungen) während der Übertragung
        verschlüsselt sind und nicht von Dritten abgefangen werden können.
      </p>
      <p>
        Nutzerdaten (einschließlich Konto‑ und Übungsdaten) werden auf sicheren
        Cloud‑Servern von Microsoft Azure gespeichert. Diese Server profitieren
        von den fortschrittlichen Sicherheitsmaßnahmen von Microsoft, wie
        Verschlüsselung ruhender Daten, Firewalls, Systemen zur
        Eindringungserkennung und kontinuierlicher Schwachstellenüberwachung.
        Zugriff haben ausschließlich autorisierte Entwickler und nur zu Zwecken
        der Wartung und des Betriebs der App.
      </p>
      <p>
        Anmeldedaten und andere sensible Informationen werden sicher gehandhabt.
        GymBroTools integriert Microsoft Entra ID (Azure AD) für die
        Authentifizierung: Die App speichert daher keine Passwörter im Klartext
        in ihren Datenbanken, sondern stützt sich auf Microsoft für ein sicheres
        Zugriffsmanagement (z. B. über OIDC/PKCE‑Tokens). Etwaige
        Authentifizierungs‑Tokens werden sicher auf dem Gerät des Nutzers
        gespeichert und sind für andere Apps nicht zugänglich.
      </p>
      <p>
        Wir haben die Telemetriedienste so konfiguriert, dass die erhobenen
        Daten minimiert und potenziell personenbezogene Informationen anonymisiert
        werden. Application Insights verwendet in der App keine Cookies (es
        handelt sich um eine mobile App) und entfernt automatisch mögliche
        Verweise auf personenbezogene Identifikatoren in Protokollen.
      </p>

      <h2>8. Verantwortlicher und Kontakt</h2>
      <p>
        Verantwortlich für die Datenverarbeitung der GymBroTools‑App ist Marco
        Crupi, unabhängiger Entwickler, erreichbar unter
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> für
        sämtliche Anfragen zum Thema Datenschutz.
      </p>

      <h2>9. Änderungen und Aktualisierungen dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung kann im Laufe der Zeit angepasst und
        aktualisiert werden, etwa aufgrund gesetzlicher Änderungen,
        technologischer Entwicklungen oder Funktionsupdates der App. Bei
        wesentlichen Änderungen informieren wir die Nutzer über Hinweise in der
        App oder über andere geeignete Kanäle. Wir empfehlen, diese Erklärung
        regelmäßig zu prüfen, um auf dem Laufenden zu bleiben, wie
        personenbezogene Daten verarbeitet werden.
      </p>
    </div>
  )
}
