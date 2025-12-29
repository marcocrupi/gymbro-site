import { Link } from 'react-router-dom'

export default function TermsDe() {
  const updated = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container terms">
      <h1>Allgemeine Geschäftsbedingungen von GymBroTools</h1>
      <p className="muted">Letzte Aktualisierung: {updated}</p>

      <h2>Akzeptanz der Bedingungen</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der
        mobilen Anwendung GymBroTools. Die App ist Eigentum von Marco Crupi,
        einem unabhängigen Entwickler. Durch den Zugriff auf die App oder deren
        Nutzung erklären Sie, dass Sie diese Bedingungen vollständig gelesen,
        verstanden und akzeptiert haben. Wenn Sie eine der nachstehenden
        Bestimmungen nicht akzeptieren, nutzen Sie die App bitte nicht. Die
        fortgesetzte Nutzung der App gilt als Zustimmung zu den jeweils
        geltenden Bedingungen.
      </p>
      <p>
        Die Nutzung der App setzt zudem die Annahme der zugehörigen{' '}
        <Link to="/privacy">Datenschutzerklärung</Link> voraus, die gesondert
        verfügbar ist. Die Datenschutzerklärung beschreibt, wie personenbezogene
        Daten von Nutzern erhoben und verarbeitet werden. Mit der Nutzung der
        App bestätigen Sie, diese Hinweise zur Kenntnis genommen zu haben. Bei
        Konflikten zwischen diesen AGB und der Datenschutzerklärung im Hinblick
        auf die Datenverarbeitung hat die Datenschutzerklärung in
        Datenschutzangelegenheiten Vorrang.
      </p>

      <h2>Altersanforderungen</h2>
      <p>
        Die App richtet sich an Nutzer ab 13 Jahren. Mit der Nutzung von
        GymBroTools erklären Sie, mindestens 13 Jahre alt zu sein und diese AGB
        annehmen zu können.
      </p>
      <p>
        Der Inhaber erhebt nicht absichtlich Daten von Kindern unter 13 Jahren
        und erbringt ihnen keine Dienste. Sollte bekannt werden, dass ein Kind
        unter 13 Jahren die App nutzt, kann der Inhaber geeignete Maßnahmen
        ergreifen, einschließlich der Löschung des zugehörigen Kontos.
      </p>
      <p>
        Nutzer zwischen 13 und 17 Jahren dürfen die App frei nutzen. Es wird
        empfohlen, dass Eltern oder Erziehungsberechtigte die Nutzung
        beaufsichtigen, um eine verantwortungsvolle Verwendung zu gewährleisten.
      </p>

      <h2>Beschreibung der App und Funktionsumfang</h2>
      <p>
        GymBroTools ist eine „offline‑first“ Mobile‑App für Training im
        Fitnessstudio, Bodybuilding und Fitness. Die App ermöglicht es Ihnen,
        Trainings zu protokollieren, Timer zu setzen, Fortschrittsstatistiken zu
        verfolgen und Trainingspläne zu erstellen – mit Mehrsprachen‑Support.
        Die App funktioniert offline und synchronisiert Daten mit einem Cloud‑
        Backend (auf .NET 8 basierend und in Azure containerisiert), sobald eine
        Internetverbindung besteht, um eine flüssige und robuste Nutzung zu
        gewährleisten.
      </p>
      <p>
        Für den vollen Funktionsumfang ist eine Registrierung über das
        integrierte Authentifizierungssystem (verwaltet über Microsoft Entra
        External ID) erforderlich. Nach der Anmeldung erhalten Sie ein Konto,
        mit dem Ihre Trainingsdaten sicher gespeichert werden. Das Backend nutzt
        REST‑APIs, die durch JWT‑Zugriffstoken und Refresh‑Token geschützt sind,
        um Sicherheit und Vertraulichkeit zu gewährleisten. Sie sind für alle
        Aktivitäten über Ihr Konto verantwortlich und müssen Ihre Zugangsdaten
        (z. B. die Ihres Microsoft‑Kontos) vertraulich behandeln. Bei
        unbefugtem Zugriff oder Verdacht auf eine Sicherheitsverletzung sollten
        Sie den Inhaber unverzüglich informieren.
      </p>

      <h2>Geistiges Eigentum</h2>
      <p>
        Sämtliche Inhalte, Software, Gestaltung, der Name und das Logo von
        GymBroTools sowie weitere Elemente der App sind alleiniges Eigentum des
        Inhabers (Marco Crupi) oder seiner Lizenzgeber und durch Urheber‑,
        Marken‑, Patent‑ und/oder sonstige Rechte des geistigen Eigentums sowie
        internationale Abkommen geschützt. Sie erkennen diese Rechte an und
        verpflichten sich, keine Handlungen vorzunehmen, die mit den Rechten des
        Inhabers unvereinbar sind.
      </p>
      <p>
        Zum alleinigen Zweck der Nutzung der App wird Ihnen eine persönliche,
        beschränkte, nicht ausschließliche und nicht übertragbare Lizenz
        erteilt, GymBroTools auf Ihren eigenen Geräten gemäß diesen AGB zu
        verwenden. Es ist Ihnen ausdrücklich untersagt: (a) Teile der App zu
        kopieren, zu ändern, zu verbreiten, zu verkaufen oder unterzulizenzieren;
        (b) die App zu dekompilieren, zu disassemblieren oder einer
        Reverse‑Engineering‑Analyse zu unterziehen, außer soweit gesetzlich
        ausdrücklich zulässig; (c) die App oder ihre Inhalte in einer Weise zu
        missbrauchen, die ihrem persönlichen, nichtkommerziellen Zweck
        widerspricht. Jede Nutzung, die durch diese AGB oder das Gesetz nicht
        gestattet ist, ist verboten und kann zur Sperrung Ihres Kontos und/oder
        zu rechtlichen Schritten des Inhabers zum Schutz seiner Rechte führen.
      </p>

      <h2>Zulässige Nutzung und Pflichten des Nutzers</h2>
      <p>
        Sie verpflichten sich, die App im Einklang mit dem Gesetz, der
        öffentlichen Ordnung und diesen AGB zu nutzen. Insbesondere dürfen Sie
        bei der Nutzung von GymBroTools Folgendes nicht tun:
      </p>
      <ul>
        <li>
          <strong>Unerlaubte oder missbräuchliche Zwecke:</strong> die App für
          illegale, unrechtmäßige oder nicht autorisierte Zwecke verwenden.
          Hierzu zählt u. a. die Verletzung von Rechten Dritter oder die
          Verbreitung unzulässiger, anstößiger Inhalte oder solcher, die zu
          Gewalt oder Hass aufstacheln.
        </li>
        <li>
          <strong>Beeinträchtigung des Dienstes:</strong> versuchen, den
          ordnungsgemäßen Betrieb der App, ihrer Server oder der angeschlossenen
          Netzwerke zu kompromittieren, zu umgehen oder zu stören. Sie dürfen
          keine Malware, Viren, Würmer oder sonstigen schädlichen Code
          einschleusen und kein Scraping, Crawling oder unbefugtes Extrahieren
          von Daten vornehmen.
        </li>
        <li>
          <strong>Unbefugter Zugriff:</strong> auf Konten anderer Nutzer oder
          auf Systeme des Inhabers zugreifen oder dies versuchen, sofern hierfür
          keine Berechtigung besteht. Sie dürfen keine anderen Personen
          imitieren oder Ihre Identität bei der Nutzung der App falsch
          darstellen.
        </li>
        <li>
          <strong>Kommerzielle oder nicht persönliche Nutzung:</strong> die App
          oder Teile davon, einschließlich multimedialer Inhalte zu Übungen, zu
          kommerziellen Zwecken nutzen, die nicht vom Inhaber genehmigt sind.
          Die App ist für Ihren persönlichen Gebrauch im Rahmen Ihres Trainings
          bestimmt; ein Weiterverkauf, die Verbreitung oder die Bereitstellung
          der Dienste oder Inhalte von GymBroTools an Dritte ohne vorherige
          schriftliche Zustimmung des Inhabers ist untersagt.
        </li>
      </ul>
      <p>
        Sie tragen die volle Verantwortung für Aktivitäten über Ihr Konto und
        für alle Folgen, die sich aus Verstößen gegen diese Regeln ergeben. Der
        Inhaber behält sich das Recht vor, die Nutzung der App zu überwachen, um
        die Einhaltung dieser AGB zu prüfen (im Rahmen der geltenden
        Datenschutzgesetze, wie in der{' '}
        <Link to="/privacy">Datenschutzerklärung</Link> beschrieben). Bei
        Verstößen kann der Inhaber geeignete Maßnahmen ergreifen, einschließlich
        der Sperrung oder Schließung des Kontos des verantwortlichen Nutzers.
      </p>

      <h2>Abonnements und kostenpflichtige Dienste</h2>
      <p>
        Derzeit bietet GymBroTools die Grundfunktionen kostenlos an. Zukünftig
        können zusätzliche Funktionen oder Premium‑Inhalte im Rahmen eines
        kostenpflichtigen Abonnements eingeführt werden (z. B. ein monatlicher
        „Trainer“‑Tarif für Coaches oder fortgeschrittene Nutzer). Wenn Sie ein
        Abonnement abschließen, gelten folgende Bedingungen:
      </p>
      <ul>
        <li>
          <strong>Zahlung und Verlängerung:</strong> Die Zahlung erfolgt über
          den Marktplatz, über den die App verteilt wird (z. B. Apple App Store,
          Google Play Store oder eine gleichwertige Plattform) und der mit Ihrem
          Gerät verknüpft ist. Abonnements haben in der Regel eine monatliche
          Laufzeit (sofern bei Abschluss nichts anderes angegeben ist) und
          verlängern sich automatisch am Ende jedes Abrechnungszeitraums, sofern
          Sie nicht wie nachfolgend beschrieben kündigen. Die Gebühr wird bei
          jeder Verlängerung automatisch über die mit Ihrem Store‑Konto
          verknüpfte Zahlungsmethode abgebucht.
        </li>
        <li>
          <strong>Verwaltung des Abonnements:</strong> Sie können Ihr
          Abonnement jederzeit in den Einstellungen Ihres Store‑Kontos verwalten
          oder kündigen (z. B. in den Einstellungen Ihrer Apple‑ID oder Ihres
          Google‑Play‑Kontos). Um eine Berechnung für den nächsten Zeitraum zu
          vermeiden, müssen Sie mindestens 24 Stunden vor Ablauf des aktuellen
          Abrechnungszeitraums kündigen. Nach der Kündigung behalten Sie in der
          Regel bis zum Ende des bereits bezahlten Zeitraums Zugang zu den
          Premium‑Funktionen. Danach wird Ihr Konto auf den kostenlosen
          Basistarif zurückgestellt.
        </li>
        <li>
          <strong>Preisänderungen und Angebotsanpassungen:</strong> Der Inhaber
          behält sich das Recht vor, Abonnementpreise oder Leistungsumfang zu
          ändern. Bei Preisänderungen oder wesentlichen Anpassungen des Tarifs
          werden Sie rechtzeitig über geeignete Kanäle informiert (z. B. in‑App‑
          Hinweis oder Mitteilung auf der Website). Preisänderungen werden mit
          der unmittelbar auf die Bekanntgabe folgenden Verlängerung wirksam.
          Wenn Sie den Änderungen nicht zustimmen, können Sie das Abonnement vor
          Inkrafttreten des neuen Preises bzw. der neuen Bedingungen kündigen.
        </li>
        <li>
          <strong>Erstattungen:</strong> Soweit nicht ausdrücklich durch die
          Richtlinien des jeweiligen Marktplatzes oder zwingendes Recht
          vorgesehen, sind bereits geleistete Zahlungen nicht erstattungsfähig.
          Wenn Sie z. B. in der Mitte eines bereits bezahlten Zeitraums kündigen,
          können Sie die Premium‑Dienste in der Regel bis zum Ende dieses
          Zeitraums weiter nutzen, haben jedoch keinen Anspruch auf Erstattung
          der verbleibenden Tage. Etwaige Ausnahmen oder Erstattungsanträge
          werden im Einklang mit geltendem Recht und den Regeln des jeweiligen
          Stores von Fall zu Fall geprüft.
        </li>
      </ul>
      <p>
        Weitere Details zu Abos (eingeschlossene Funktionen, etwaige
        Testzeiträume, Promotionsangebote etc.) werden beim Abschluss des
        jeweiligen Plans mitgeteilt. Bei Einführung neuer kostenpflichtiger
        Dienste können diese AGB gemäß Abschnitt „Änderungen der Bedingungen“
        ergänzt oder angepasst werden.
      </p>

      <h2>Haftungsbeschränkung und Gewährleistungsausschluss</h2>
      <p>
        Die App sowie alle zugehörigen Dienste und Funktionen werden vom Inhaber
        „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne ausdrückliche
        oder stillschweigende Gewähr hinsichtlich Genauigkeit, Zuverlässigkeit,
        Verfügbarkeit oder Eignung für Ihre speziellen Bedürfnisse. Obwohl der
        Inhaber sich um Effizienz und Sicherheit bemüht, wird nicht
        gewährleistet, dass der Dienst fehler‑ oder unterbrechungsfrei ist oder
        dass Mängel oder Bugs innerhalb bestimmter Zeiträume behoben werden.
        Die Nutzung der App erfolgt auf eigenes Risiko.
      </p>
      <p>
        <strong>Ausschluss spezifischer Gewährleistungen:</strong> Im gesetzlich
        zulässigen Umfang lehnt der Inhaber sämtliche stillschweigenden
        Gewährleistungen ab, einschließlich Marktgängigkeit, zufriedenstellender
        Qualität, Eignung für einen bestimmten Zweck sowie Freiheit von
        Schutzrechtsverletzungen. Die App ist ein Hilfsmittel für persönliches
        Training; der Inhaber erteilt über sie keine medizinischen Ratschläge
        oder personalisierte professionelle Fitness‑Empfehlungen. Bereitgestellte
        Informationen (z. B. Trainingsstatistiken oder Beschreibungen von
        Übungen) dienen lediglich als Hinweis und Motivation. Sie sind selbst
        dafür verantwortlich, Ihre körperliche Verfassung und Gesundheit zu
        beurteilen, bevor Sie ein Trainingsprogramm auf Grundlage der in der App
        bereitgestellten Daten oder Vorschläge beginnen oder ändern. Konsultieren
        Sie nach Möglichkeit vor Beginn neuer Übungen oder Programme einen Arzt
        oder qualifizierten Trainer, insbesondere bei bestehenden
        Vorerkrankungen. Der Inhaber haftet in keinem Fall für Verletzungen,
        körperliche Schäden oder Gesundheitsprobleme, die aus sportlicher
        Betätigung resultieren, auch wenn Sie sich auf Informationen oder
        Funktionen der App stützen.
      </p>
      <p>
        <strong>Haftungsbeschränkung:</strong> Soweit gesetzlich zulässig,
        haftet der Inhaber Ihnen (oder Dritten) gegenüber nicht für direkte,
        indirekte, beiläufige, Folge‑ oder sonstige Schäden im Zusammenhang mit
        der Nutzung bzw. der Unmöglichkeit der Nutzung der App oder der
        zugehörigen Dienste. Dies umfasst u. a. Daten‑ oder Gewinnverlust,
        entgangene Chancen, Betriebsunterbrechungen, Schäden an Geräten oder
        sonstige technische Schäden, selbst wenn der Inhaber auf die
        Möglichkeit solcher Schäden hingewiesen wurde. Insbesondere haftet der
        Inhaber nicht für Störungen, Nichtverfügbarkeit oder Mängel, die durch
        Faktoren außerhalb der App verursacht werden, wie z. B.
        Internetverbindungsprobleme des Nutzers, Geräteausfälle, integrierte
        Dienste Dritter (einschließlich, beispielhaft, Microsoft Entra
        Authentifizierungsdienste oder Azure‑Cloud‑Infrastruktur) oder Fälle
        höherer Gewalt außerhalb des zumutbaren Einflussbereichs des Inhabers.
      </p>
      <p>
        Manche Rechtsordnungen erlauben keinen Ausschluss bestimmter
        Gewährleistungen oder keine Beschränkung der Haftung für Folge‑ oder
        Nebenschäden. In diesen Fällen gelten die vorstehenden Ausschlüsse und
        Beschränkungen im maximal gesetzlich zulässigen Umfang. Nichts in
        diesen AGB schließt die Haftung des Inhabers für Vorsatz oder grobe
        Fahrlässigkeit aus oder beschränkt sie, ebenso wenig sonstige Haftung,
        die gesetzlich nicht ausgeschlossen oder beschränkt werden kann.
      </p>

      <h2>Änderungen der Bedingungen</h2>
      <p>
        Der Inhaber behält sich vor, diese AGB jederzeit zu ändern, zu
        ergänzen oder zu aktualisieren, z. B. um neuen gesetzlichen Vorgaben zu
        entsprechen, Anpassungen an angebotenen Funktionen vorzunehmen oder die
        Klarheit zu verbessern. Bei wesentlichen Änderungen informiert der
        Inhaber die Nutzer im Voraus über geeignete Kanäle. Je nach Situation
        kann dies eine In‑App‑Mitteilung (Pop‑up oder Benachrichtigung) oder ein
        Hinweis auf der Website bzw. der Download‑Seite der App sein.
      </p>
      <p>
        Änderungen treten am Tag ihrer Veröffentlichung oder am im Hinweis
        genannten Datum in Kraft. Sie sind dafür verantwortlich, sich
        regelmäßig über Aktualisierungen zu informieren. Die fortgesetzte
        Nutzung der App nach Inkrafttreten der Änderungen gilt als stillschweigende
        Zustimmung. Wenn Sie den geänderten AGB nicht zustimmen, müssen Sie die
        Nutzung der App einstellen und können ggf. die Löschung Ihres Kontos
        beantragen. Die jeweils aktuelle Fassung ist in der App (z. B. im
        Bereich „Allgemeine Geschäftsbedingungen“) oder auf der Website des
        Inhabers abrufbar.
      </p>

      <h2>Laufzeit, Aussetzung und Beendigung</h2>
      <p>
        Diese AGB gelten ab dem Zeitpunkt, an dem Sie die App nutzen, und
        bleiben in Kraft, solange Sie sie verwenden. Sie können GymBroTools
        jederzeit nicht mehr nutzen und haben das Recht, Ihr Konto zu
        schließen. Die Kontoschließung kann direkt in der App (Funktion
        „Konto löschen“ in den Einstellungen) oder durch Kontaktaufnahme mit dem
        Inhaber über die angegebenen Kontaktdaten erfolgen. Die Deaktivierung
        oder Löschung des Kontos beendet den Zugriff auf die Dienste der App und
        führt zur Entfernung oder Anonymisierung Ihrer personenbezogenen Daten,
        wie in der{' '}
        <Link to="/privacy">Datenschutzerklärung</Link> und dem geltenden Recht
        vorgesehen.
      </p>
      <p>
        Der Inhaber kann Ihren Zugriff auf die App vorübergehend oder dauerhaft
        aussetzen oder Ihr Konto schließen, wenn: (a) er der Ansicht ist, dass
        Sie diese AGB ganz oder teilweise verletzt haben (z. B. unrechtmäßige
        oder nicht autorisierte Nutzung der App); (b) einer behördlichen oder
        polizeilichen Anordnung Folge zu leisten ist; (c) unvorhergesehene
        technische oder Sicherheitsprobleme eine Aussetzung erfordern; (d) der
        Geschäftsbetrieb eingestellt oder die App eingestellt wird. Soweit
        zumutbar, informiert der Inhaber im Voraus über beabsichtigte
        Maßnahmen und deren Gründe, behält sich jedoch vor, in Situationen, in
        denen dies zum Schutz eigener Interessen oder der Sicherheit anderer
        Nutzer erforderlich ist, ohne Vorankündigung zu handeln.
      </p>
      <p>
        Bei Beendigung der vertraglichen Beziehung zwischen Inhaber und Nutzer
        (z. B. nach Kontolöschung durch den Nutzer oder Schließung durch den
        Inhaber) bleiben solche Bestimmungen dieser AGB wirksam, die ihrem
        Wesen nach fortgelten sollen (u. a. die Abschnitte Geistiges Eigentum,
        Haftungsbeschränkung, Anwendbares Recht). Die Beendigung des Kontos
        berührt nicht Rechte oder Pflichten, die bis zum Beendigungszeitpunkt
        entstanden sind, noch etwaige Haftung für zuvor begangene Verstöße.
      </p>

      <h2>Anwendbares Recht und Gerichtsstand</h2>
      <p>
        Diese AGB unterliegen dem Recht der Italienischen Republik. Soweit hier
        nicht ausdrücklich geregelt, gelten die in Italien maßgeblichen
        Rechtsvorschriften. Streitigkeiten aus oder im Zusammenhang mit der
        Auslegung, Gültigkeit oder Durchführung dieser AGB unterliegen der
        ausschließlichen Zuständigkeit des sachlich zuständigen italienischen
        Gerichts am Sitz des Inhabers (sofern nicht zwingende Vorschriften –
        etwa für Verbraucher außerhalb Italiens – etwas anderes vorsehen). Der
        Inhaber und der Nutzer werden sich nach Kräften bemühen, etwaige
        Streitigkeiten einvernehmlich zu lösen, bevor rechtliche Schritte
        eingeleitet werden.
      </p>

      <h2>Schlussbestimmungen</h2>
      <p>
        Sollte eine Bestimmung dieser AGB von einem zuständigen Gericht als
        ungültig, nichtig oder undurchsetzbar erachtet werden, bleibt die
        Wirksamkeit der übrigen Bestimmungen unberührt; diese gelten weiterhin
        in vollem Umfang. Ein etwaiges Dulden von Verstößen durch den Inhaber
        stellt keinen Verzicht auf daraus resultierende Rechte dar und keinen
        Verzicht auf die Durchsetzung der übrigen Bestimmungen. Diese AGB bilden
        zusammen mit der in Bezug genommenen{' '}
        <Link to="/privacy">Datenschutzerklärung</Link> die gesamte Vereinbarung
        zwischen dem Nutzer und dem Inhaber in Bezug auf die Nutzung der App und
        ersetzen frühere Abreden oder Vereinbarungen, schriftlich oder mündlich,
        zum selben Gegenstand.
      </p>

      <p>________________</p>

      <p>
        Letzte Aktualisierung: 06. Oktober 2025. Der Inhaber behält sich vor,
        den Inhalt dieser Seite von Zeit zu Zeit zu aktualisieren; prüfen Sie
        bitte das Datum der letzten Aktualisierung, um die aktuell gültige
        Fassung der AGB zu erfahren. Vielen Dank für das sorgfältige Lesen der
        Allgemeinen Geschäftsbedingungen und dafür, dass Sie GymBroTools gewählt
        haben. Viel Erfolg beim Training!
      </p>
    </div>
  )
}

