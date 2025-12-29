import { Link } from 'react-router-dom'

export default function TermsEn() {
  const updated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div className="container terms">
      <h1>GymBroTools Terms and Conditions</h1>
      <p className="muted">Last updated: {updated}</p>

      <h2>Acceptance of the Terms</h2>
      <p>
        These Terms and Conditions govern your use of the GymBroTools mobile
        application. The App is owned by Marco Crupi, an independent developer.
        By accessing or using the App, you acknowledge that you have read,
        understood, and agree to be bound by these Terms in full. If you do not
        agree to any provision herein, please do not use the App. Continued use
        of the App constitutes acceptance of the then-current Terms.
      </p>
      <p>
        Use of the App is also subject to acceptance of the associated{' '}
        <Link to="/privacy">Privacy Policy</Link>, available separately. The
        Privacy Policy describes how users’ personal data is collected and
        processed. By using the App, you confirm that you have reviewed that
        notice. In case of conflict between these Terms and the Privacy Policy
        regarding data processing, the Privacy Policy prevails for privacy
        matters.
      </p>

      <h2>Age Requirements</h2>
      <p>
        The App is intended for users aged 13 or older. By using GymBroTools,
        you represent that you are at least 13 years old and that you have the
        capacity to accept these Terms.
      </p>
      <p>
        The Owner does not intentionally collect data from, nor provide services
        to, children under 13. If it comes to our attention that a child under
        13 is using the App, the Owner may take appropriate action, including
        deletion of the associated account.
      </p>
      <p>
        Users between 13 and 17 years of age may freely use the App. Parental or
        guardian supervision is recommended to ensure responsible use.
      </p>

      <h2>App Description and Features</h2>
      <p>
        GymBroTools is an offline‑first mobile application dedicated to gym
        training, bodybuilding, and fitness. The App lets you track workouts,
        set timers, monitor progress statistics, and create workout plans, all
        with multi‑language support. The App can operate offline and syncs data
        with a cloud backend (based on .NET 8 containerized on Azure) whenever
        an internet connection is available, ensuring a smooth and resilient
        experience.
      </p>
      <p>
        To access all features, you must register through the integrated
        authentication system (managed via Microsoft Entra External ID). Once
        authenticated, you obtain an account that securely stores your workout
        data. The backend uses REST APIs protected by JWT access tokens and
        refresh tokens to ensure data security and confidentiality. You are
        responsible for any activity carried out through your account and must
        keep your access credentials confidential (e.g., the credentials of your
        Microsoft account). In case of unauthorized access or suspected security
        breach, you should promptly notify the Owner.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, software, design, the GymBroTools name and logo, and other
        elements within the App are the exclusive property of the Owner (Marco
        Crupi) or their licensors and are protected by copyright, trademark,
        patent, and/or other intellectual property laws and international
        treaties. You acknowledge that these rights remain vested in the Owner
        and agree not to take any action inconsistent with the Owner’s
        intellectual property rights.
      </p>
      <p>
        Solely to use the Application, you are granted a personal, limited,
        non‑exclusive, and non‑transferable license to use GymBroTools on your
        own devices, in accordance with these Terms. You are expressly
        prohibited from: (a) copying, modifying, distributing, selling, or
        sublicensing parts of the App; (b) decompiling, disassembling, or
        reverse‑engineering the App, except to the extent expressly permitted by
        law; (c) misusing the App or its content in any way that is inconsistent
        with its intended personal, non‑commercial purpose. Any use of the App
        not authorized by these Terms or by law is prohibited and may result in
        suspension of your account and/or legal action by the Owner to protect
        their rights.
      </p>

      <h2>Permitted Use and User Obligations</h2>
      <p>
        You agree to use the App in compliance with the law, public order, and
        these Terms. In particular, when using GymBroTools you must not:
      </p>
      <ul>
        <li>
          <strong>Illegal or improper uses:</strong> use the App for illegal,
          unlawful, or unauthorized purposes. This includes, by way of example,
          using it to infringe third‑party rights or to disseminate unlawful or
          offensive content, or content that incites violence or hatred.
        </li>
        <li>
          <strong>Service interference:</strong> attempt to compromise, bypass,
          or interfere with the normal operation of the App, its servers, or the
          networks connected to it. You must not introduce malware, viruses,
          worms, or any other harmful code into the App, nor perform scraping,
          crawling, or other unauthorized extraction of data.
        </li>
        <li>
          <strong>Unauthorized access:</strong> access, or attempt to access,
          other users’ accounts or Owner systems to which you are not
          authorized. You must not impersonate others or misrepresent your
          identity when using the App.
        </li>
        <li>
          <strong>Commercial or non‑personal use:</strong> exploit the App or
          any of its parts, including multimedia content about exercises, for
          commercial purposes not authorized by the Owner. The App is intended
          for your personal use in the context of your training; you may not
          resell, distribute, or provide GymBroTools services or content to
          third parties without the Owner’s prior written consent.
        </li>
      </ul>
      <p>
        You assume full responsibility for any activity carried out through your
        account and for any consequences arising from violation of these rules
        on permitted use. The Owner reserves the right to monitor use of the App
        to verify compliance with the Terms (to the extent allowed by applicable
        privacy laws, as described in the{' '}
        <Link to="/privacy">Privacy Policy</Link>). In the event of a
        violation, the Owner may take appropriate measures, including
        suspension or closure of the offending user’s account.
      </p>

      <h2>Subscriptions and Paid Services</h2>
      <p>
        GymBroTools currently offers its basic features free of charge. In the
        future, additional features or premium content may be introduced via a
        paid subscription (for example, a monthly “Trainer” plan for coaches or
        advanced users). If you choose to subscribe to a plan, the following
        conditions apply:
      </p>
      <ul>
        <li>
          <strong>Payment and renewal:</strong> Subscription payments are
          processed through the marketplace distributing the App (e.g., Apple
          App Store, Google Play Store, or an equivalent platform) linked to
          your device. Subscriptions renew monthly by default (unless otherwise
          stated at sign‑up) and will automatically renew at the end of each
          billing period unless you cancel as described below. The subscription
          fee will be charged automatically at each renewal through the payment
          method associated with your store account.
        </li>
        <li>
          <strong>Managing your subscription:</strong> You can manage or cancel
          your subscription at any time from your store account settings (for
          example, via your Apple ID or Google Play account settings). To avoid
          being charged for the next period, you must cancel at least 24 hours
          before the end of the current billing period. After cancellation, you
          may continue to access premium features until the end of the period
          already paid. At the end of that period, if not renewed, your account
          will revert to the free basic plan.
        </li>
        <li>
          <strong>Price changes and offer modifications:</strong> The Owner
          reserves the right to change subscription pricing or the features of
          the subscription services. In case of price changes or substantial
          modifications to the plan, adequate advance notice will be provided
          through appropriate channels (for example, an in‑app notice or a
          message on the official website). Price changes take effect upon the
          renewal immediately following the communication of the change. If you
          do not agree to the changes, you have the right to cancel your
          subscription before the new price or conditions take effect.
        </li>
        <li>
          <strong>Refunds:</strong> Except as expressly provided by the
          marketplace through which the purchase was made or by non‑waivable
          applicable law, payments already made are non‑refundable. This means
          that, for example, if you cancel in the middle of a period you have
          already paid for, you may generally continue to use the premium
          services until the end of the period but will not be entitled to a
          refund for the remaining days. Any exceptions or refund requests will
          be evaluated on a case‑by‑case basis, in accordance with applicable
          law and the rules of the relevant store.
        </li>
      </ul>
      <p>
        Additional details about subscription plans (such as included features,
        any free trial periods, promotional offers, etc.) will be communicated
        at the time you subscribe. If new paid services are introduced, these
        Terms may be supplemented or amended as described in the “Changes to the
        Terms” section below.
      </p>

      <h2>Limitation of Liability and Disclaimer of Warranties</h2>
      <p>
        The App and all related services and features are provided by the Owner
        “as is” and “as available,” without any express or implied warranty as
        to their accuracy, reliability, availability, or fitness for your
        particular needs. While the Owner strives to keep the App efficient and
        secure, the Owner does not warrant that the service will be error‑free
        or uninterrupted, nor that any defects or bugs will be corrected within
        specific timeframes. You acknowledge that use of the App is at your own
        risk.
      </p>
      <p>
        <strong>Disclaimer of specific warranties:</strong> To the maximum
        extent permitted by law, the Owner disclaims all implied warranties of
        merchantability, satisfactory quality, fitness for a particular purpose,
        and non‑infringement. The App is a tool to support personal training:
        the Owner does not provide medical advice or personalized professional
        fitness advice through it. Information provided (for example, workout
        statistics or exercise descriptions) is for indicative and motivational
        purposes only. You are solely responsible for assessing your physical
        and health condition before starting or modifying any training program
        based on data or suggestions provided by the App. You should consult a
        physician or qualified trainer before starting new exercises or training
        programs, especially if you have pre‑existing medical conditions. The
        Owner will not, in any case, be liable for injuries, physical damage, or
        health issues arising from sports activity undertaken by you, even when
        relying on information or features offered by the App.
      </p>
      <p>
        <strong>Limitation of liability:</strong> To the extent permitted by
        applicable law, the Owner will not be liable to you (or to third
        parties) for any direct, indirect, incidental, consequential, or other
        damages related to or arising from the use or inability to use the App
        or related services. This includes, without limitation: loss of data or
        profits, loss of opportunity, business interruption, damage to devices
        or other technical damage, even if the Owner has been advised of the
        possibility of such damages. In particular, the Owner is not responsible
        for malfunctions, unavailability, or defects caused by factors external
        to the App itself, such as the user’s internet connection problems,
        device failures, integrated third‑party services (including, by way of
        example, Microsoft Entra authentication services or Azure cloud
        infrastructure), or force majeure events beyond the Owner’s reasonable
        control.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain warranties or
        the limitation of liability for consequential or incidental damages. In
        such cases, the above exclusions and limitations apply to the maximum
        extent permitted by applicable law. Nothing in these Terms excludes or
        limits the Owner’s liability in cases of fraud or gross negligence, nor
        any other liability that cannot be excluded or limited by law.
      </p>

      <h2>Changes to the Terms</h2>
      <p>
        The Owner reserves the right to modify, supplement, or update these
        Terms at any time, for example to comply with new legal requirements, to
        adapt to changes in the features offered, or to improve clarity. In the
        event of a material change to the Terms, the Owner will notify users in
        advance through appropriate channels. Depending on the circumstances,
        these channels may include, for example, an in‑app message (a pop‑up or
        notification) or an update posted on the official website or the App’s
        download page.
      </p>
      <p>
        Changes to the Terms take effect on the date of publication or on the
        date indicated in the notice itself. You are responsible for checking
        for updates to the Terms from time to time. Continued use of the App
        after the changes take effect constitutes tacit acceptance of the new
        conditions. If you do not agree with the modified Terms, you must stop
        using the App and may, where applicable, request deletion of your
        account as provided. The current Terms will always be accessible through
        the App (for example, in the dedicated “Terms & Conditions” section) or
        on the Owner’s website.
      </p>

      <h2>Term, Suspension, and Termination</h2>
      <p>
        These Terms apply to you from the moment you start using the App and
        remain in force for as long as you continue to use it. You may stop
        using GymBroTools at any time and you have the right to close your
        account. You can close your account directly through the App (using the
        account deletion feature in settings) or by contacting the Owner using
        the contact details provided. Deactivation or deletion of the account
        will terminate access to the App’s services and will result in removal
        or anonymization of your personal data, as set out in the{' '}
        <Link to="/privacy">Privacy Policy</Link> and applicable law.
      </p>
      <p>
        The Owner reserves the right to temporarily or permanently suspend your
        access to the App, or to close your account, in the following cases: (a)
        if the Owner believes that you have violated these Terms in whole or in
        part (e.g., unlawful or unauthorized use of the App); (b) in compliance
        with a request from law enforcement or another competent authority; (c)
        for unforeseen technical or security issues requiring service
        suspension; (d) in case the Owner discontinues the business or decides
        to shut down the App. Where reasonably possible, the Owner will provide
        advance notice of the intention to suspend or close an account,
        indicating the reasons for the action, but reserves the right to act
        immediately without notice when deemed necessary to protect the Owner’s
        interests or the safety of other users.
      </p>
      <p>
        Upon termination of the contractual relationship between the Owner and
        the user (for example, following account deletion by the user or closure
        ordered by the Owner), those provisions of these Terms that by their
        nature are intended to survive termination (including, by way of
        example, the sections on Intellectual Property, Limitation of Liability,
        and Governing Law) will continue to apply. Termination of the user’s
        account does not affect any rights or obligations accrued by the parties
        as of the termination date, nor any liability for violations of the
        Terms committed by the user.
      </p>

      <h2>Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of Italy. For matters not
        expressly addressed herein, the laws in force in Italy apply. Any
        disputes arising from the interpretation, validity, or performance of
        these Terms shall be submitted to the exclusive jurisdiction of the
        competent Italian court in the place where the Owner is established
        (unless a different jurisdiction is mandated by non‑waivable rules, such
        as for consumer users residing outside Italy). The Owner and the user
        will make reasonable efforts to resolve any dispute amicably before
        resorting to legal action.
      </p>

      <h2>Final Provisions</h2>
      <p>
        If any provision of these Terms is held invalid, void, or unenforceable
        by a competent court, such invalidity does not affect the validity of
        the remaining provisions, which shall remain in full force and effect.
        Any tolerance by the Owner of behavior by the user that violates these
        Terms does not constitute a waiver of the Owner’s rights arising from
        the breached provisions, nor a waiver of the right to demand strict
        performance of all terms herein. These Terms, together with the{' '}
        <Link to="/privacy">Privacy Policy</Link> referenced, constitute the
        entire agreement between the user and the Owner regarding use of the
        App, superseding any prior understanding or agreement, whether written
        or oral, on the same subject matter.
      </p>

      <p>________________</p>

      <p>
        Last updated: 06 October 2025. The Owner reserves the right to update
        the contents of this page from time to time; please check the “last
        updated” date to know the current version of the Terms. Thank you for
        carefully reading the Terms and Conditions and for choosing
        GymBroTools. Enjoy your training!
      </p>
    </div>
  )
}

