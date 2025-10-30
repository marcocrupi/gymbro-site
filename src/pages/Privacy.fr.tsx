export default function PrivacyFr() {
  const updated = new Date().toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="container privacy">
      <h1>Politique de confidentialité de l’app GymBroTools</h1>
      <p className="muted">Dernière mise à jour: {updated}</p>

      <h2>1. Introduction et champ d’application</h2>
      <p>
        GymBroTools est une application mobile de fitness disponible dans le
        monde entier. La présente Politique de confidentialité décrit comment
        GymBroTools collecte, utilise et protège les données personnelles des
        utilisateurs. L’app est développée et gérée par un développeur
        indépendant (et non une entreprise) et s’engage à préserver la
        confidentialité des données de tous les utilisateurs.
      </p>
      <p>
        <strong>IMPORTANT:</strong> l’app n’est pas destinée aux enfants de
        moins de 13 ans. Au premier lancement, il est demandé à l’utilisateur
        d’indiquer son année de naissance; si l’utilisateur a moins de 13 ans,
        l’accès à l’app est refusé et aucune donnée n’est collectée ni traitée.
        Seuls les utilisateurs âgés de 13 ans ou plus peuvent utiliser
        GymBroTools et accepter la présente Politique de confidentialité.
      </p>
      <p>
        GymBroTools ne collecte pas sciemment de données personnelles auprès
        d’enfants de moins de 13 ans. Si nous apprenons que des données
        concernant un enfant de moins de 13 ans ont été recueillies sans le
        consentement vérifiable des parents ou du tuteur, nous supprimerons ces
        données dans les plus brefs délais. Les utilisateurs ou les
        parents/tuteurs qui estiment qu’un mineur nous a communiqué des
        informations personnelles peuvent nous contacter à tout moment pour en
        demander la suppression immédiate.
      </p>
      <p>
        La présente politique s’applique à tous les services proposés via
        l’application GymBroTools.
      </p>

      <h2>2. Types de données collectées</h2>
      <p>
        Nous ne collectons pas de données personnellement identifiables, sauf ce
        qui est strictement nécessaire au fonctionnement de l’app. En
        particulier, GymBroTools collecte les catégories de données suivantes:
      </p>
      <p>
        <strong>Données fournies par l’utilisateur:</strong> informations que
        l’utilisateur saisit volontairement, telles que les données
        d’inscription (p. ex. e-mail ou nom d’utilisateur) et les détails des
        entraînements (séries, répétitions, charges). Ces données servent à
        créer le compte et à permettre à l’utilisateur d’enregistrer et de
        consulter ses entraînements. Les informations saisies restent privées,
        visibles uniquement par l’utilisateur et ne sont pas partagées avec
        d’autres utilisateurs ni avec des tiers, en dehors de ce qui est décrit
        dans la présente politique. Important: GymBroTools ne demande ni ne
        collecte aucune donnée personnelle « sensible » ou biologique, telle que
        des données biométriques, des informations de santé, des photos, la
        localisation GPS, les contacts ou d’autres données non nécessaires à
        l’utilisation de l’app.
      </p>
      <p>
        <strong>Données techniques d’utilisation (télémétrie):</strong> l’app
        utilise Microsoft Application Insights pour collecter automatiquement
        des données techniques anonymes relatives à l’usage et au fonctionnement
        de l’application. Ces informations incluent, par exemple, les journaux
        d’erreurs, des métriques de performance, des données sur l’appareil
        (modèle, système d’exploitation) et des événements techniques généraux
        (p. ex. chargement d’un écran ou appel d’API). Cette télémétrie ne
        contient pas de données personnelles identifiables: noms, e‑mails,
        adresses ou contenus personnels des utilisateurs ne sont pas
        enregistrés. Nous avons configuré la télémétrie pour exclure les
        informations potentiellement identifiantes (p. ex. URL complètes,
        adresses e‑mail, identifiants d’utilisateur) et ne collecter que les
        données utiles pour garantir la stabilité et la sécurité de l’app.
        Application Insights est toujours actif pour surveiller l’état de
        l’application et est configuré avec un échantillonnage limité (en
        production) afin de minimiser la quantité de données collectées.
      </p>
      

      <h2>3. Finalités du traitement</h2>
      <p>
        Nous traitons les données collectées pour les finalités suivantes, dans
        le respect des principes de licéité et de minimisation des données:
      </p>
      <p>
        <strong>Fourniture du service et des fonctionnalités de l’app:</strong>
        nous utilisons les données fournies par l’utilisateur (p. ex. compte et
        données d’entraînement) pour lui permettre de s’inscrire, d’accéder à
        son profil, d’enregistrer des exercices et de consulter des
        statistiques. Ce traitement est essentiel au fonctionnement de
        GymBroTools et à la fourniture des fonctionnalités demandées (p. ex.
        synchronisation des entraînements entre appareils en mode
        offline‑first).
      </p>
      <p>
        <strong>
          Amélioration de la stabilité, de la sécurité et des performances:
        </strong>{" "}
        les données techniques collectées via Application Insights sont
        utilisées exclusivement pour surveiller l’état de l’app, identifier les
        bugs, prévenir les plantages, analyser les performances et garantir la
        sécurité du service. Ces informations nous aident à corriger les
        erreurs, optimiser l’infrastructure et assurer un fonctionnement fiable
        sur différents appareils.
      </p>
      
      <p>
        <strong>Communications d’assistance:</strong> les coordonnées de
        contact (telles que l’e‑mail fourni lors de l’inscription) peuvent être
        utilisées pour des communications de service strictement liées à l’app,
        par exemple pour répondre aux demandes de support technique ou envoyer
        des avis importants sur le fonctionnement de l’app. GymBroTools n’envoie
        pas de newsletters promotionnelles ni de communications marketing non
        sollicitées.
      </p>
      <p>
        Les données ne sont jamais utilisées à des fins de profilage commercial,
        de publicité de tiers ou de prises de décision automatisées produisant
        des effets juridiques à l’égard de l’utilisateur. Tout traitement est
        limité aux finalités décrites ci‑dessus.
      </p>

      <h2>4. Base juridique du traitement</h2>
      <p>
        Nous traitons les données personnelles des utilisateurs uniquement
        lorsqu’il existe une base légale prévue par la réglementation applicable
        (Règlement UE 2016/679 « RGPD » et lois équivalentes dans d’autres
        juridictions). En lien avec les finalités ci‑dessus, les bases
        juridiques sont:
      </p>
      <p>
        <strong>Exécution d’un contrat ou mesures précontractuelles:</strong>
        pour les données fournies directement par l’utilisateur (telles que les
        données de compte et d’entraînement), le traitement est nécessaire pour
        fournir le service demandé. Lorsqu’un utilisateur crée un compte et
        utilise GymBroTools, une relation contractuelle implicite est établie:
        ses données sont traitées afin de permettre l’utilisation de l’app et de
        ses fonctionnalités (art. 6(1)(b) RGPD). Sans ces données, nous ne
        pourrions pas fournir l’inscription, l’enregistrement des exercices et
        d’autres fonctionnalités clés de l’app.
      </p>
      <p>
        <strong>Intérêt légitime:</strong> le traitement des données techniques
        de télémétrie via Application Insights repose sur l’intérêt légitime du
        développeur (art. 6(1)(f) RGPD). Cet intérêt consiste à assurer la
        stabilité, la sécurité et l’amélioration continue du service, au
        bénéfice du développeur comme des utilisateurs. Nous avons évalué que ce
        traitement, limité à des données techniques anonymes, ne porte pas
        atteinte aux droits et libertés des utilisateurs (notamment grâce à
        l’absence d’informations personnellement identifiables). L’app exige de
        toute façon l’acceptation des Conditions et de la Confidentialité lors
        de l’installation, rendant les utilisateurs conscients de cette
        télémétrie de base. L’utilisateur a le droit de s’y opposer pour des
        raisons tenant à sa situation particulière (voir la section Droits), en
        tenant compte du fait que la télémétrie est fondamentale pour prévenir
        les dysfonctionnements et protéger les données.
      </p>
      
      <p>
        En plus de ces bases principales, GymBroTools peut traiter des données
        personnelles pour se conformer aux obligations légales applicables
        (art. 6(1)(c) RGPD) ou pour protéger les intérêts vitaux des
        utilisateurs ou d’autres personnes (cas rares, art. 6(1)(d)), bien que
        ces circonstances ne se présentent pas en pratique dans l’usage
        ordinaire de l’app.
      </p>

      <h2>5. Modalités de traitement et durée de conservation</h2>
      <p>
        Nous traitons les données personnelles des utilisateurs principalement
        sous forme électronique et automatisée, en adoptant des mesures de
        sécurité appropriées pour prévenir les accès non autorisés, la
        divulgation ou l’altération des données. Les données sont stockées sur
        des serveurs sécurisés (p. ex. infrastructure cloud Microsoft Azure) et
        protégées au moyen de techniques de chiffrement et de contrôle d’accès.
        Le développeur unique de GymBroTools est la seule personne ayant un
        accès direct aux données aux fins d’exploitation de l’app et traite ces
        données de manière strictement confidentielle. Aucun autre personnel ou
        tiers n’accède aux données personnelles, à l’exception des services
        externes mentionnés (Microsoft) qui agissent comme prestataires
        techniques tel que décrit.
      </p>
      <p>
        Nous conservons les données uniquement pendant la durée nécessaire pour
        atteindre les finalités pour lesquelles elles ont été collectées, après
        quoi nous procédons à leur suppression ou à leur anonymisation. Vous
        trouverez ci‑dessous les durées de conservation spécifiques pour chaque
        type de données:
      </p>
      <p>
        <strong>Données de compte et d’entraînement:</strong> les informations
        fournies par l’utilisateur (p. ex. e‑mail d’inscription, nom
        d’utilisateur, séries/répétitions/charges enregistrées) sont conservées
        tant que le compte reste actif. En pratique, ces données demeurent
        stockées tant que l’utilisateur continue d’utiliser l’app et maintient
        son compte actif, afin de lui permettre d’accéder à son historique
        d’entraînements. L’utilisateur peut toujours modifier ou supprimer des
        données individuelles (p. ex. supprimer un entraînement) directement
        depuis l’app. Il peut également demander la suppression complète de son
        compte à tout moment (voir Droits des utilisateurs) ; dans ce cas,
        toutes les données personnelles associées au compte seront
        définitivement supprimées de nos systèmes dans un court délai technique.
        Des données limitées peuvent être conservées au‑delà de la suppression
        uniquement sous forme agrégée ou anonyme, ou pour respecter des
        obligations légales (p. ex. journaux de sécurité), mais pas de manière à
        identifier l’utilisateur.
      </p>
      <p>
        <strong>Télémétrie technique (Application Insights):</strong> les
        données collectées automatiquement sur les erreurs et performances via
        Application Insights sont conservées pour une durée maximale de
        90 jours. Cette durée est conforme aux paramètres standards de la
        plateforme et permet de disposer d’un historique récent pour l’analyse
        et le débogage, sans conserver les informations plus longtemps que
        nécessaire. Passé environ 90 jours, les journaux et télémétries plus
        anciens sont automatiquement supprimés ou écrasés. Dans tous les cas,
        s’agissant de données anonymes, il n’est pas possible de remonter à un
        utilisateur spécifique, et leur suppression est effectuée conformément
        aux politiques de conservation de Microsoft Azure Application Insights.
      </p>
      
      <p>
        <strong>Transferts de données à l’étranger:</strong> les données
        personnelles collectées par GymBroTools peuvent être transférées et
        traitées dans des pays situés en dehors de l’Espace économique européen
        (EEE), en particulier lorsque les serveurs des fournisseurs cloud
        utilisés — tels que Microsoft Azure — sont localisés hors de l’EEE. Dans
        ces cas, nous veillons à la mise en place de garanties appropriées pour
        la protection des données, telles que l’utilisation de Clauses
        Contractuelles Types approuvées par la Commission européenne ou d’autres
        instruments juridiques prévus par la législation applicable, afin de
        garantir un niveau de protection équivalent à celui exigé par le RGPD.
      </p>
      <p>
        À l’issue des périodes indiquées ci‑dessus, les données sont supprimées
        de manière sécurisée ou anonymisées de façon irréversible (de sorte
        qu’elles ne puissent plus être associées à un utilisateur). Rappelons
        que l’utilisateur peut toujours demander la suppression anticipée de ses
        données personnelles, et GymBroTools donnera suite à ces demandes dans
        les délais prévus par la loi (voir Droits des utilisateurs).
      </p>

      <h2>6. Droits des utilisateurs</h2>
      <p>
        Les utilisateurs de GymBroTools, en tant que personnes concernées,
        disposent d’un certain nombre de droits en matière de protection des
        données personnelles. En particulier, l’utilisateur peut, à tout moment,
        exercer les droits suivants:
      </p>
      <p>
        <strong>Droit d’accès:</strong> droit d’obtenir la confirmation que des
        données personnelles le concernant sont traitées ou non et, le cas
        échéant, d’accéder à ces données ainsi qu’aux informations sur les
        finalités, les catégories de données traitées, les destinataires, la
        durée de conservation et l’existence des autres droits énumérés ici. En
        pratique, l’utilisateur peut demander une copie de ses données en notre
        possession et des informations sur leur utilisation.
      </p>
      <p>
        <strong>Droit de rectification:</strong> droit d’obtenir la correction
        des données personnelles inexactes le concernant et de faire compléter
        les données incomplètes. L’utilisateur peut corriger ses données
        directement dans l’app lorsque c’est possible (p. ex. données du compte)
        ou en nous contactant pour les mises à jour.
      </p>
      <p>
        <strong>Droit à l’effacement (« droit à l’oubli »):</strong> droit
        d’obtenir la suppression des données personnelles le concernant
        lorsqu’elles ne sont plus nécessaires aux finalités pour lesquelles
        elles ont été collectées ou lorsque le consentement est retiré (lorsque
        le traitement est fondé sur le consentement), sous réserve des
        obligations légales pouvant imposer une conservation. En pratique,
        l’utilisateur peut demander la suppression de son compte et des données
        personnelles associées ; à la suite de la demande, les données seront
        définitivement supprimées de nos systèmes dans un bref délai technique.
      </p>
      <p>
        <strong>Droit à la limitation du traitement:</strong> droit d’obtenir
        la limitation du traitement des données personnelles dans certaines
        circonstances (p. ex. lorsque l’exactitude des données est contestée ou
        lorsque le traitement est illicite et que l’utilisateur, plutôt que la
        suppression, demande la limitation).
      </p>
      <p>
        <strong>Droit à la portabilité des données:</strong> droit de recevoir
        les données personnelles le concernant, qu’il nous a fournies, dans un
        format structuré, couramment utilisé et lisible par machine, et de
        transmettre ces données à un autre responsable lorsque cela est
        techniquement possible et que le traitement est fondé sur le
        consentement ou un contrat.
      </p>
      <p>
        <strong>Droit d’opposition:</strong> droit de s’opposer, pour des
        raisons tenant à sa situation particulière, aux traitements fondés sur
        l’intérêt légitime (tels que la télémétrie technique via Application
        Insights).
      </p>
      <p>
        <strong>Droit d’introduire une réclamation:</strong> si l’utilisateur
        estime que le traitement de ses données est contraire à la
        réglementation sur la protection des données, il a le droit d’introduire
        une réclamation auprès de l’autorité de contrôle compétente. Pour les
        utilisateurs de l’Union européenne, l’autorité chef de file est le
        Garante per la Protezione dei Dati Personali italien (ou une autre
        autorité locale compétente selon le pays de résidence de l’utilisateur).
        Nous invitons toutefois les utilisateurs à nous contacter en premier
        lieu pour toute question ou demande, afin de pouvoir résoudre la
        question à l’amiable.
      </p>
      <p>
        GymBroTools ne vend pas, et n’a pas l’intention de vendre, les données
        personnelles des utilisateurs au sens du California Consumer Privacy Act
        (CCPA). Les utilisateurs de Californie peuvent exercer leurs droits en
        écrivant à{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>
      <p>
        Pour exercer leurs droits, les utilisateurs peuvent nous contacter à
        tout moment à l’adresse{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>. Les
        demandes seront traitées dans les délais prévus par la loi (en général
        sous 30 jours, délai prolongeable en cas de demandes complexes) et sans
        frais pour l’utilisateur, sauf demandes manifestement infondées ou
        excessives.
      </p>

      <h2>7. Sécurité et protection des données</h2>
      <p>
        La sécurité des données de nos utilisateurs est une priorité. Nous avons
        mis en place des mesures techniques et organisationnelles appropriées
        pour protéger les données personnelles contre tout accès non autorisé,
        divulgation indue, altération ou destruction. En particulier:
      </p>
      <p>
        Toutes les communications entre l’app GymBroTools et le serveur ont lieu
        via le protocole sécurisé HTTPS, garantissant que les données transmises
        (comme les identifiants d’authentification ou les mises à jour
        d’entraînements) sont chiffrées en transit et ne peuvent pas être
        interceptées par des tiers.
      </p>
      <p>
        Les données des utilisateurs (y compris celles du compte et des
        exercices) sont stockées sur des serveurs cloud sécurisés fournis par
        Microsoft Azure. Ces serveurs bénéficient des mesures de sécurité
        avancées de Microsoft, telles que le chiffrement des données au repos,
        des pare‑feu, des systèmes de prévention d’intrusion et une surveillance
        continue des vulnérabilités. Seul le développeur autorisé peut accéder à
        ces systèmes, et uniquement pour des besoins de maintenance et
        d’exploitation de l’app.
      </p>
      <p>
        Les identifiants d’authentification et autres informations sensibles
        sont gérés de manière sécurisée. GymBroTools intègre Microsoft Entra ID
        (Azure AD) pour l’authentification: l’app n’enregistre donc pas de mots
        de passe en clair dans ses bases de données et s’appuie sur Microsoft
        pour la gestion sécurisée des accès (p. ex. via des jetons OIDC/PKCE).
        Tout jeton d’authentification est stocké de manière sécurisée sur
        l’appareil de l’utilisateur et n’est pas accessible par d’autres apps.
      </p>
      <p>
        Nous avons configuré les services de télémétrie afin de minimiser les
        données collectées et nous anonymisons toute information potentiellement
        personnelle. Par exemple, Application Insights n’utilise pas de cookies
        dans l’app (s’agissant d’une app mobile) et supprime automatiquement les
        références potentielles à des identifiants personnels dans les journaux.
      </p>

      <h2>8. Responsable du traitement et contact</h2>
      <p>
        Le responsable du traitement des données pour l’app GymBroTools est
        Marco Crupi, développeur indépendant, joignable à l’adresse{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> pour
        toute demande relative à la confidentialité et à la protection des
        données personnelles.
      </p>

      <h2>
        9. Modifications et mises à jour de la présente Politique de
        confidentialité
      </h2>
      <p>
        La présente Politique de confidentialité peut faire l’objet de
        modifications et de mises à jour au fil du temps, notamment en raison de
        changements réglementaires, d’évolutions technologiques ou de mises à
        jour des fonctionnalités de l’app. En cas de modifications importantes,
        nous informerons les utilisateurs via une notification in‑app ou par
        d’autres canaux appropriés. Nous invitons les utilisateurs à consulter
        régulièrement cette politique afin de rester informés sur la manière
        dont les données personnelles sont traitées.
      </p>
    </div>
  );
}
