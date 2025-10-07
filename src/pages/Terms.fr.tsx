import { Link } from 'react-router-dom'

export default function TermsFr() {
  const updated = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container terms">
      <h1>Conditions Générales d’Utilisation de GymBroTools</h1>
      <p className="muted">Dernière mise à jour : {updated}</p>

      <h2>Acceptation des Conditions</h2>
      <p>
        Les présentes Conditions Générales d’Utilisation (les « Conditions »)
        régissent l’utilisation de l’application mobile GymBroTools. L’App
        appartient à Marco Crupi, développeur indépendant. En accédant à l’App
        ou en l’utilisant, vous reconnaissez avoir lu, compris et accepté
        l’intégralité des présentes Conditions. Si vous n’acceptez pas l’une des
        dispositions ci‑après, veuillez ne pas utiliser l’App. L’utilisation
        continue de l’App vaut acceptation des Conditions en vigueur.
      </p>
      <p>
        L’utilisation de l’App est également soumise à l’acceptation de la{' '}
        <Link to="/privacy">Politique de Confidentialité</Link> associée,
        disponible séparément. La Politique de Confidentialité décrit la façon
        dont les données personnelles des utilisateurs sont collectées et
        traitées. En utilisant l’App, vous confirmez avoir pris connaissance de
        cet avis. En cas de conflit entre les présentes Conditions et la
        Politique de Confidentialité en matière de traitement des données, la
        Politique de Confidentialité prévaut pour les aspects de confidentialité.
      </p>

      <h2>Conditions d’âge</h2>
      <p>
        L’App s’adresse aux personnes âgées de 13 ans ou plus. En utilisant
        GymBroTools, vous déclarez avoir au moins 13 ans. Le Titulaire ne
        collecte sciemment aucune donnée concernant les enfants de moins de
        13 ans et ne leur fournit pas de services. S’il apparaît qu’un enfant de
        moins de 13 ans a transmis des informations personnelles ou utilise
        l’App, le Titulaire peut prendre les mesures appropriées, y compris la
        suppression du compte associé. Si vous avez entre 13 et 18 ans (ou êtes
        mineur au regard de la loi de votre pays), il est recommandé d’utiliser
        l’App avec le consentement et sous la supervision d’un parent ou
        tuteur ; vous déclarez néanmoins avoir la capacité d’accepter les
        présentes Conditions.
      </p>

      <h2>Description de l’App et fonctionnalités</h2>
      <p>
        GymBroTools est une application mobile « offline‑first » dédiée à
        l’entraînement en salle, au bodybuilding et au fitness. Elle vous permet
        de suivre vos séances, de définir des minuteries, de suivre vos
        statistiques de progression et de créer des programmes d’entraînement,
        le tout avec prise en charge multilingue. L’App fonctionne hors ligne et
        synchronise les données avec un backend cloud (basé sur .NET 8, conteneurisé sur Azure)
        dès qu’une connexion Internet est disponible, pour une expérience fluide
        et résiliente.
      </p>
      <p>
        Pour accéder à l’ensemble des fonctionnalités, vous devez vous inscrire
        via le système d’authentification intégré (géré via Microsoft Entra
        External ID). Une fois authentifié, vous disposez d’un compte permettant
        d’enregistrer en toute sécurité vos données d’entraînement. Le backend
        utilise des API REST protégées par des jetons d’accès JWT et des refresh
        tokens, afin d’assurer la sécurité et la confidentialité des données.
        Vous êtes responsable de toute activité réalisée via votre compte et
        devez conserver la confidentialité de vos identifiants (par exemple,
        ceux de votre compte Microsoft). En cas d’accès non autorisé ou de
        suspicion d’atteinte à la sécurité, veuillez en informer rapidement le
        Titulaire.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus, logiciels, éléments de design, nom et logo
        GymBroTools, ainsi que tout autre élément de l’App, sont la propriété
        exclusive du Titulaire (Marco Crupi) ou de ses éventuels licenciés et
        sont protégés par les lois et traités internationaux relatifs au droit
        d’auteur, aux marques, aux brevets et/ou à d’autres droits de propriété
        intellectuelle. Vous reconnaissez que ces droits appartiennent au
        Titulaire et vous vous engagez à ne poser aucun acte incompatible avec
        ces droits.
      </p>
      <p>
        Aux seules fins d’utiliser l’App, il vous est accordé une licence
        personnelle, limitée, non exclusive et non transférable pour utiliser
        GymBroTools sur vos propres appareils, conformément aux présentes
        Conditions. Il vous est expressément interdit : (a) de copier,
        modifier, distribuer, vendre ou concéder sous‑licence des parties de
        l’App ; (b) de décompiler, désassembler ou procéder à de l’ingénierie
        inverse de l’App, sauf dans les limites prévues par la loi ; (c) de
        détourner l’App ou ses contenus d’un usage personnel et non commercial.
        Tout usage non autorisé par les présentes Conditions ou par la loi est
        interdit et peut entraîner la suspension de votre compte et/ou des
        actions en justice par le Titulaire pour la protection de ses droits.
      </p>

      <h2>Utilisation autorisée et obligations de l’utilisateur</h2>
      <p>
        Vous vous engagez à utiliser l’App conformément à la loi, à l’ordre
        public et aux présentes Conditions. En particulier, il vous est interdit :
      </p>
      <ul>
        <li>
          <strong>Usages illégaux ou inappropriés :</strong> utiliser l’App à des
          fins illégales, illicites ou non autorisées. Cela inclut, à titre
          d’exemple, toute atteinte aux droits de tiers ou la diffusion de
          contenus illicites, offensants ou incitant à la violence ou à la haine.
        </li>
        <li>
          <strong>Interférence avec le service :</strong> tenter de compromettre,
          de contourner ou d’entraver le fonctionnement normal de l’App, de ses
          serveurs ou des réseaux qui y sont connectés. Vous ne devez pas
          introduire de malware, virus, vers ou tout autre code nuisible, ni
          effectuer de scraping, crawling ou extraction non autorisée de données.
        </li>
        <li>
          <strong>Accès non autorisés :</strong> accéder ou tenter d’accéder aux
          comptes d’autres utilisateurs ou aux systèmes du Titulaire auxquels
          vous n’êtes pas autorisé. Vous ne devez pas usurper l’identité d’autrui
          ni mentir sur votre identité lors de l’utilisation de l’App.
        </li>
        <li>
          <strong>Utilisation commerciale ou non personnelle :</strong> exploiter
          l’App ou l’une de ses parties, y compris les contenus multimédias sur
          les exercices, à des fins commerciales non autorisées par le Titulaire.
          L’App est destinée à un usage personnel dans le cadre de votre
          entraînement ; il est interdit de revendre, distribuer ou fournir à des
          tiers les services ou contenus de GymBroTools sans l’accord écrit
          préalable du Titulaire.
        </li>
      </ul>
      <p>
        Vous assumez l’entière responsabilité de toute activité réalisée via
        votre compte et de toute conséquence découlant d’une violation des
        règles ci‑dessus. Le Titulaire se réserve le droit de surveiller
        l’utilisation de l’App afin de vérifier le respect des Conditions (dans
        la mesure permise par la législation applicable en matière de
        confidentialité, comme décrit dans la{' '}
        <Link to="/privacy">Politique de Confidentialité</Link>). En cas de
        violation, le Titulaire peut prendre les mesures appropriées, y compris
        la suspension ou la fermeture du compte de l’utilisateur fautif.
      </p>

      <h2>Abonnements et services payants</h2>
      <p>
        Les fonctionnalités de base de GymBroTools sont actuellement proposées
        gratuitement. À l’avenir, des fonctionnalités supplémentaires ou des
        contenus premium pourront être proposés via un abonnement payant (par
        exemple, un forfait mensuel « Trainer » pour les coachs ou utilisateurs
        avancés). Si vous choisissez de souscrire, les conditions suivantes
        s’appliquent :
      </p>
      <ul>
        <li>
          <strong>Paiement et renouvellement :</strong> le paiement de
          l’abonnement s’effectue via la plateforme de distribution de l’App
          (par ex. Apple App Store, Google Play Store ou plateforme équivalente)
          liée à votre appareil. L’abonnement est, sauf indication contraire, à
          renouvellement mensuel automatique à la fin de chaque période, sauf
          résiliation de votre part comme indiqué ci‑dessous. Le montant est
          débité automatiquement à chaque renouvellement, via le moyen de
          paiement associé à votre compte sur la plateforme concernée.
        </li>
        <li>
          <strong>Gestion de l’abonnement :</strong> vous pouvez gérer ou
          annuler votre abonnement à tout moment depuis les paramètres de votre
          compte sur la plateforme (par exemple, les paramètres de votre Apple ID
          ou de votre compte Google Play). Pour éviter d’être facturé pour la
          période suivante, vous devez annuler au moins 24 heures avant la fin de
          la période en cours. En cas d’annulation, vous conservez l’accès aux
          fonctionnalités premium jusqu’à l’échéance de la période déjà payée.
          À cette échéance, à défaut de renouvellement, votre compte repasse au
          plan gratuit de base.
        </li>
        <li>
          <strong>Modification des prix et de l’offre :</strong> le Titulaire se
          réserve le droit de modifier le prix ou les caractéristiques des
          services proposés par abonnement. En cas de modification substantielle
          ou de changement de tarif, un préavis adéquat sera fourni via des
          canaux appropriés (p. ex. un avis in‑app ou une communication sur le
          site officiel). Les changements de prix prennent effet au
          renouvellement suivant la communication. Si vous n’acceptez pas les
          changements, vous avez le droit d’annuler votre abonnement avant
          l’entrée en vigueur du nouveau prix ou des nouvelles conditions.
        </li>
        <li>
          <strong>Remboursements :</strong> sauf disposition expresse de la
          plateforme d’achat ou de la loi impérative applicable, les paiements
          effectués ne sont pas remboursables. Ainsi, si vous annulez au milieu
          d’une période déjà réglée, vous pourrez généralement continuer à
          bénéficier des services premium jusqu’à la fin de la période, sans
          droit à remboursement pour les jours restants. Toute exception ou
          demande de remboursement sera évaluée au cas par cas, conformément à
          la loi applicable et aux règles de la plateforme concernée.
        </li>
      </ul>
      <p>
        Des détails supplémentaires sur les forfaits (fonctionnalités incluses,
        éventuelles périodes d’essai, offres promotionnelles, etc.) seront
        communiqués lors de la souscription. En cas d’introduction de nouveaux
        services payants, les présentes Conditions pourront être complétées ou
        modifiées comme indiqué dans la section « Modifications des Conditions » ci‑dessous.
      </p>

      <h2>Limitation de responsabilité et absence de garanties</h2>
      <p>
        L’App et l’ensemble des services et fonctionnalités associés sont fournis
        par le Titulaire « en l’état » et « selon disponibilité », sans aucune
        garantie expresse ou implicite quant à leur exactitude, fiabilité,
        disponibilité ou adéquation à vos besoins spécifiques. Bien que le
        Titulaire s’efforce d’assurer l’efficacité et la sécurité de l’App, il
        ne garantit pas l’absence d’erreurs ou d’interruptions, ni la correction
        des défauts ou bugs dans des délais spécifiques. Vous reconnaissez que
        l’utilisation de l’App se fait à vos risques.
      </p>
      <p>
        <strong>Exclusion de garanties spécifiques :</strong> dans les limites
        permises par la loi, le Titulaire décline toute garantie implicite de
        qualité marchande, qualité satisfaisante, adéquation à un usage
        particulier et absence de contrefaçon. L’App est un outil d’appui à
        l’entraînement personnel ; le Titulaire ne fournit pas, via celle‑ci, de
        conseils médicaux ni de conseils professionnels personnalisés en
        matière de fitness. Les informations fournies (par exemple, statistiques
        d’entraînement ou descriptions d’exercices) ont un but indicatif et
        motivationnel. Il vous appartient d’évaluer votre état physique et de
        santé avant de commencer ou de modifier un programme d’entraînement basé
        sur des données ou suggestions fournies par l’App. Il est recommandé de
        consulter un médecin ou un coach qualifié avant de débuter de nouveaux
        exercices ou programmes, notamment en présence de conditions médicales
        préexistantes. Le Titulaire ne saurait en aucun cas être responsable des
        blessures, dommages corporels ou problèmes de santé pouvant résulter de
        l’activité sportive, même si vous vous êtes fondé sur des informations
        ou fonctionnalités proposées par l’App.
      </p>
      <p>
        <strong>Limitation de responsabilité :</strong> dans la mesure permise
        par la loi applicable, le Titulaire ne pourra être tenu responsable à
        votre égard (ou à l’égard de tiers) de tout dommage direct, indirect,
        accessoire, consécutif ou autre, lié à l’utilisation ou à l’impossibilité
        d’utiliser l’App ou les services associés. Cela inclut notamment la
        perte de données ou de bénéfices, la perte d’opportunités, les
        interruptions d’activité, les dommages aux appareils ou autres dommages
        techniques, même si le Titulaire a été informé de la possibilité de tels
        dommages. En particulier, le Titulaire n’est pas responsable des
        dysfonctionnements, indisponibilités ou défauts causés par des facteurs
        externes à l’App, tels que les problèmes de connexion Internet de
        l’utilisateur, les pannes d’appareils, les services tiers intégrés (y
        compris, à titre d’exemple, les services d’authentification Microsoft
        Entra ou l’infrastructure cloud Azure) ou les cas de force majeure
        indépendants de la volonté raisonnable du Titulaire.
      </p>
      <p>
        Certaines juridictions n’autorisent pas l’exclusion de certaines
        garanties ni la limitation de responsabilité pour les dommages
        consécutifs ou accessoires. Le cas échéant, les exclusions et
        limitations ci‑dessus s’appliquent dans la mesure maximale autorisée par
        la loi. Rien dans les présentes n’exclut ni ne limite la responsabilité
        du Titulaire en cas de dol ou de faute lourde, ni toute autre
        responsabilité qui ne peut être exclue ou limitée par la loi.
      </p>

      <h2>Modifications des Conditions</h2>
      <p>
        Le Titulaire se réserve le droit de modifier, compléter ou mettre à jour
        les présentes Conditions à tout moment, par exemple pour se conformer à
        de nouvelles exigences légales, adapter les fonctionnalités proposées ou
        améliorer la clarté. En cas de modification substantielle, le Titulaire
        informera les utilisateurs à l’avance via des canaux appropriés. Selon
        les circonstances, ces canaux peuvent inclure, par exemple, un message
        in‑app (fenêtre contextuelle ou notification) ou une mise à jour publiée
        sur le site officiel ou la page de téléchargement de l’App.
      </p>
      <p>
        Les modifications prennent effet à la date de publication ou à la date
        indiquée dans l’avis. Il vous incombe de vérifier périodiquement la
        présence de mises à jour. Votre utilisation continue de l’App après
        l’entrée en vigueur des modifications vaut acceptation tacite des
        nouvelles conditions. Si vous n’êtes pas d’accord avec les Conditions
        modifiées, vous devez cesser d’utiliser l’App et pouvez, le cas échéant,
        demander la suppression de votre compte selon les modalités prévues. Les
        Conditions en vigueur restent accessibles depuis l’App (rubrique dédiée
        « Termes & Conditions ») ou sur le site du Titulaire.
      </p>

      <h2>Durée, suspension et résiliation</h2>
      <p>
        Les présentes Conditions s’appliquent à compter du début de votre
        utilisation de l’App et restent en vigueur tant que vous continuez à
        l’utiliser. Vous pouvez cesser d’utiliser GymBroTools à tout moment et
        avez le droit de clôturer votre compte. La clôture peut être effectuée
        directement depuis l’App (fonction de suppression du compte dans les
        paramètres) ou en contactant le Titulaire aux coordonnées fournies. La
        désactivation ou suppression du compte met fin à l’accès aux services de
        l’App et entraîne la suppression ou l’anonymisation de vos données
        personnelles, conformément à la{' '}
        <Link to="/privacy">Politique de Confidentialité</Link> et à la loi
        applicable.
      </p>
      <p>
        Le Titulaire se réserve le droit de suspendre temporairement ou
        définitivement votre accès à l’App, ou de clôturer votre compte, dans
        les cas suivants : (a) s’il estime que vous avez violé tout ou partie
        des présentes Conditions (par ex. utilisation illicite ou non autorisée
        de l’App) ; (b) en exécution d’une demande des forces de l’ordre ou
        d’une autorité compétente ; (c) en raison de problèmes techniques ou de
        sécurité imprévus nécessitant la suspension du service ; (d) en cas de
        cessation d’activité ou de fermeture de l’App par le Titulaire. Lorsque
        cela est raisonnablement possible, le Titulaire vous informera
        préalablement de son intention de suspendre ou de clôturer votre compte,
        en indiquant les raisons, mais se réserve le droit d’agir sans préavis
        lorsque cela est nécessaire pour protéger ses intérêts ou la sécurité
        des autres utilisateurs.
      </p>
      <p>
        En cas de résiliation de la relation contractuelle entre le Titulaire et
        l’utilisateur (par exemple, à la suite de la suppression du compte par
        l’utilisateur ou d’une fermeture décidée par le Titulaire), les
        dispositions qui, par leur nature, doivent survivre à la résiliation
        (notamment les sections Propriété intellectuelle, Limitation de
        responsabilité et Droit applicable) continuent de s’appliquer. La
        résiliation du compte de l’utilisateur n’affecte pas les droits ou
        obligations déjà nés à la date de résiliation, ni toute responsabilité
        pour des violations antérieures des Conditions.
      </p>

      <h2>Droit applicable et juridiction</h2>
      <p>
        Les présentes Conditions sont régies par les lois de l’Italie. Pour les
        aspects non expressément prévus, les lois italiennes en vigueur
        s’appliquent. Tout litige relatif à l’interprétation, la validité ou
        l’exécution des présentes Conditions relève de la compétence exclusive
        du tribunal italien compétent au lieu d’établissement du Titulaire (sauf
        si une juridiction différente est imposée par des règles impératives,
        notamment pour les consommateurs résidant hors d’Italie). Le Titulaire
        et l’utilisateur s’efforceront de résoudre à l’amiable tout différend
        avant toute action judiciaire.
      </p>

      <h2>Dispositions finales</h2>
      <p>
        Si une disposition des présentes Conditions est jugée invalide, nulle ou
        inapplicable par un tribunal compétent, cette invalidité n’affecte pas
        la validité des autres dispositions, qui demeurent pleinement en vigueur.
        Toute tolérance du Titulaire à l’égard de comportements de l’utilisateur
        en violation des présentes Conditions ne constitue pas une renonciation
        à ses droits, ni au droit d’exiger l’exécution stricte de toutes les
        stipulations prévues. Les présentes Conditions, conjointement avec la{' '}
        <Link to="/privacy">Politique de Confidentialité</Link> à laquelle il
        est fait référence, constituent l’intégralité de l’accord entre
        l’utilisateur et le Titulaire concernant l’usage de l’App et remplacent
        tout accord ou entente antérieur, écrit ou oral, portant sur le même
        objet.
      </p>

      <p>________________</p>

      <p>
        Dernière mise à jour : 06 octobre 2025. Le Titulaire se réserve le
        droit de mettre à jour périodiquement le contenu de cette page ; merci
        de vérifier la date de mise à jour pour connaître la version en cours
        des Conditions. Merci d’avoir lu attentivement ces Conditions
        d’Utilisation et d’avoir choisi GymBroTools. Bon entraînement !
      </p>
    </div>
  )
}

