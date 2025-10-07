export default function PrivacyWebsiteFr() {
  const updated = new Date().toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <div className="container privacy">
      <h1>Politique de confidentialité et cookies — Site web</h1>
      <p className="muted">Dernière mise à jour : {updated}</p>

      <h2>1. Champ d’application de l’avis</h2>
      <p>
        Le présent avis s’applique exclusivement au <strong>site web</strong>
        de GymBroTools (site statique, hébergé sur GitHub Pages avec domaine
        personnalisé). Pour la confidentialité de l’<strong>application mobile</strong>,
        consultez la page dédiée : <a href="/privacy">Confidentialité de l’app</a>.
      </p>

      <h2>2. Responsable du traitement et contact</h2>
      <p>
        Responsable : Marco Crupi — E‑mail : <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
      </p>

      <h2>3. Types de données traitées via le site</h2>
      <p>
        <strong>Données de navigation et journaux techniques (hébergement) :</strong>
        lors de la visite, des données peuvent être générées et traitées, comme
        l’adresse IP, l’user‑agent du navigateur, la date/heure, l’URL demandée,
        le référent et d’autres informations techniques nécessaires à la
        fourniture du service et à la sécurité (par ex. prévention des abus).
        Ces données sont gérées par le fournisseur d’hébergement/CDN du site.
      </p>
      <p>
        <strong>Cookies et technologies similaires :</strong> le site
        <strong>n’utilise pas</strong> de cookies de profilage ni d’outils de
        suivi tiers. Aucun pixel, service d’analytics ou plugin social n’est
        installé. Nous utilisons uniquement un <em>stockage technique</em> local
        pour mémoriser la langue préférée : clé <code>"gymbro.lang"</code> dans le
        <code>localStorage</code> du navigateur. Cet enregistrement est
        facultatif et peut être supprimé à tout moment via les paramètres du
        navigateur.
      </p>
      <p>
        <strong>Formulaires et envois volontaires :</strong> le site n’inclut
        pas de formulaires de contact ni d’espaces d’inscription. Si vous nous
        contactez par e‑mail, nous utiliserons les données fournies
        exclusivement pour vous répondre.
      </p>

      <h2>4. Finalités et bases juridiques</h2>
      <p>
        <strong>Fourniture du site et sécurité</strong> (journaux techniques/
        hébergement) : base juridique : l’<em>intérêt légitime</em> du
        Responsable à garantir une expérience sûre et continue (art. 6(1)(f)
        RGPD).
      </p>
      <p>
        <strong>Préférence de langue</strong> (stockée dans le
        <code>localStorage</code>) : base juridique : la <em>nécessité
        d’exécuter des mesures précontractuelles/contractuelles</em> et l’intérêt
        légitime à fournir une expérience cohérente (art. 6(1)(b) et 6(1)(f)
        RGPD). Aucun consentement n’est requis, s’agissant d’un outil technique
        non destiné au suivi.
      </p>

      <h2>5. Conservation</h2>
      <p>
        Le site ne maintient pas de bases de données propres de données
        personnelles. Les éventuels journaux techniques sont gérés par
        l’hébergeur et conservés pendant les durées qu’il indique. La
        préférence de langue demeure dans votre navigateur jusqu’à sa
        suppression manuelle ou l’effacement du stockage du site.
      </p>

      <h2>6. Destinataires et hébergement</h2>
      <p>
        Le site est hébergé sur <strong>GitHub Pages</strong> (GitHub, Inc.) et
        peut utiliser un réseau de diffusion de contenu (CDN). Ces prestataires
        peuvent traiter les données techniques nécessaires à la prestation et à
        la sécurité du service. Davantage d’informations sont disponibles dans la
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Déclaration de confidentialité de GitHub
        </a>
        .
      </p>

      <h2>7. Transferts hors UE</h2>
      <p>
        L’infrastructure d’hébergement/CDN peut impliquer des transferts vers
        des pays hors UE/EEE. Dans ces cas, les fournisseurs appliquent les
        garanties prévues par le RGPD (par ex. Clauses Contractuelles Types).
        Pour plus de détails, consultez l’avis du fournisseur indiqué ci‑dessus.
      </p>

      <h2>8. Droits de la personne concernée</h2>
      <p>
        Vous disposez des droits d’accès, de rectification, d’effacement, de
        limitation, d’opposition, de portabilité des données, ainsi que du droit
        d’introduire une réclamation auprès d’une autorité de contrôle. Pour
        exercer vos droits, contactez le Responsable par e‑mail à l’adresse
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Le site est statique et n’expose ni zones authentifiées ni formulaires
        de collecte. L’hébergeur adopte des mesures techniques et
        organisationnelles appropriées ; le Responsable sélectionne des
        prestataires fiables et minimise les données traitées.
      </p>

      <h2>10. Mises à jour</h2>
      <p>
        Le présent avis peut être mis à jour pour refléter des évolutions
        juridiques ou techniques. Les versions mises à jour sont publiées sur
        cette page.
      </p>

      <p className="muted">
        Liens utiles : <a href="/privacy">Confidentialité de l’app</a> ·
        <a href="/terms">Termes et Conditions</a>
      </p>
    </div>
  )
}

