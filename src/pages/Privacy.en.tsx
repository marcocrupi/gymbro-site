export default function PrivacyEn() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="container privacy">
      <h1>GymBroTools App Privacy Policy</h1>
      <p className="muted">Last updated: {updated}</p>

      <h2>1. Introduction and Scope</h2>
      <p>
        GymBroTools is a mobile fitness application available worldwide. This
        Privacy Policy describes how GymBroTools collects, uses, and protects
        users’ personal data. The app is developed and operated by a single
        independent developer (not a company) and is committed to safeguarding
        all users’ privacy.
      </p>
      <p>
        <strong>IMPORTANT:</strong> the app is not intended for children under
        the age of 13. On first launch, users are asked to provide their year of
        birth; if the user is under 13, access to the app is denied and no data
        is collected or processed. Only users aged 13 or over can use
        GymBroTools and accept this Privacy Policy.
      </p>
      <p>
        GymBroTools does not knowingly collect personal data from children under
        13. If we become aware that data from a child under 13 has been
        collected without verifiable parental consent, we will delete such data
        as soon as possible. Users or parents/guardians who believe that a minor
        has provided us with personal information may contact us at any time to
        request immediate deletion.
      </p>
      <p>
        This notice applies to all services offered through the GymBroTools app.
      </p>

      <h2>2. Types of Data Collected</h2>
      <p>
        We do not collect personally identifiable data except what is strictly
        necessary for the operation of the app. In particular, GymBroTools
        collects the following categories of data:
      </p>
      <p>
        <strong>User-provided data:</strong> information that the user
        voluntarily enters, such as registration data (e.g., email or username)
        and workout details (sets, repetitions, weights lifted). This data is
        used to create the account and allow the user to save and review their
        workouts. Information entered remains private, visible only to the user
        and not shared with other users or third parties beyond what is
        described in this policy. Important: GymBroTools does not require or
        collect any “sensitive” personal or biological data, such as biometric
        data, health information, photos, GPS location, contacts, or other data
        not necessary to use the app.
      </p>
      <p>
        <strong>Technical usage data (telemetry):</strong> the app uses
        Microsoft Application Insights to automatically collect anonymous
        technical data about app usage and operation. This information includes
        error logs, performance metrics, device data (such as model and
        operating system), and general technical events (e.g., a screen load or
        an API call). This telemetry does not contain personally identifiable
        data: names, emails, addresses, or users’ personal content are not
        recorded. We have configured telemetry to exclude potentially
        identifiable information (e.g., full URLs, email addresses, user IDs)
        and to collect only data useful to ensure the app’s stability and
        security. Application Insights is always active to monitor the
        application’s status and is configured with limited sampling (in
        production) to minimize the amount of data collected.
      </p>
      <p>
        <strong>
          Optional analytics data (session replay with Microsoft Clarity):
        </strong>{" "}
        only with the user’s explicit consent, the app may use Microsoft Clarity
        to collect information about how the user interacts with the app
        (so‑called “session replay”). Clarity anonymously records usage sessions
        — for example, screen taps, navigation between screens, and user actions
        — to help the developer understand how to improve the interface and the
        user experience. By default Clarity is disabled and no sessions are
        recorded without consent: on first app launch, users are asked whether
        to enable this optional feature. Even if enabled, Clarity does not
        capture personally identifiable data nor any audio/video outside the
        app: it only records the app UI and interactions, masking any
        potentially sensitive information. The user can enable or disable
        session replay at any time from the app’s privacy settings.
      </p>

      <h2>3. Purposes of Processing</h2>
      <p>
        We process the collected data for the following purposes, in line with
        the principles of lawfulness and data minimization:
      </p>
      <p>
        <strong>Providing the service and app features:</strong> we use
        user‑provided data (e.g., account and workout data) to let the user
        register, access their profile, save exercises, and view statistics.
        This processing is essential for GymBroTools to function and to provide
        the requested features (e.g., syncing workouts across devices in an
        offline‑first mode).
      </p>
      <p>
        <strong>Improving stability, security, and performance:</strong>
        technical data collected via Application Insights is used exclusively to
        monitor the app’s health, identify bugs, prevent crashes, analyze
        performance, and ensure the service’s security. This information helps
        us fix errors, optimize the infrastructure, and ensure the app works
        reliably across different devices.
      </p>
      <p>
        <strong>User experience analysis (optional):</strong> usage data
        collected via Microsoft Clarity, if the user has consented, is used for
        aggregated and anonymous analysis of how the app is used. The purpose is
        to better understand user behavior in the interface (which screens are
        visited, which buttons are pressed, where difficulties arise) in order
        to improve GymBroTools’ design and usability. This analysis helps the
        developer make informed decisions about how to evolve the app, always in
        users’ best interests.
      </p>
      <p>
        <strong>Support communications:</strong> contact data (such as the email
        provided during registration) may be used for service communications
        strictly related to the app, for example to respond to support requests
        or to send important notices about app operation. GymBroTools does not
        send promotional newsletters or unsolicited marketing communications.
      </p>
      <p>
        Please note that data is never used for commercial profiling,
        third‑party advertising, or automated decisions that produce legal
        effects on the user. All processing is limited to the purposes described
        above.
      </p>

      <h2>4. Legal Basis for Processing</h2>
      <p>
        We process users’ personal data only when there is a legal basis under
        applicable law (EU Regulation 2016/679 “GDPR” and equivalent laws in
        other jurisdictions). In relation to the purposes above, the legal bases
        are:
      </p>
      <p>
        <strong>Performance of a contract or pre‑contractual measures:</strong>
        for data provided directly by the user (such as account and workout
        data), processing is necessary to provide the requested service. When a
        user creates an account and uses GymBroTools, an implicit contractual
        relationship is established: their data is processed to enable use of
        the app and its features (Art. 6(1)(b) GDPR). Without this data we could
        not provide registration, exercise saving, and other key app features.
      </p>
      <p>
        <strong>Legitimate interest:</strong> processing of technical telemetry
        data via Application Insights is based on the developer’s legitimate
        interest (Art. 6(1)(f) GDPR). That interest consists in ensuring the
        service’s stability, security, and continuous improvement, benefiting
        both the developer and users. We have assessed that this processing,
        limited to anonymous technical data, does not harm users’ rights and
        freedoms (also thanks to the absence of personally identifiable
        information). The app anyway requires acceptance of Terms and Privacy on
        installation, making users aware of this basic telemetry. Users have the
        right to object for reasons related to their particular situation (see
        the Rights section), considering that telemetry is fundamental to
        prevent malfunctions and protect data.
      </p>
      <p>
        <strong>Explicit consent:</strong> processing via Microsoft Clarity
        (session replay) occurs only if the user gives free, specific, and
        informed consent (Art. 6(1)(a) GDPR). On first use, the user is asked if
        they want to enable this optional feature. Without consent, Clarity
        remains disabled and no recording is performed. The user may withdraw
        consent at any time by disabling session recording in the app settings;
        from that moment, no new data will be collected via Clarity. Withdrawal
        of consent does not affect the lawfulness of processing carried out
        before withdrawal.
      </p>
      <p>
        In addition to these main bases, GymBroTools may process personal data
        to comply with applicable legal obligations (Art. 6(1)(c) GDPR) or to
        protect vital interests of users or others (rare cases, Art. 6(1)(d)),
        although in practice these circumstances do not arise in ordinary app
        use.
      </p>

      <h2>5. Processing Methods and Data Retention</h2>
      <p>
        We process users’ personal data primarily in electronic and automated
        form, adopting appropriate security measures to prevent unauthorized
        access, disclosure, or alteration of data. Data is stored on secure
        servers (e.g., Microsoft Azure cloud infrastructure) and protected using
        encryption and access controls. The sole developer of GymBroTools is the
        only person with direct access to data for app operations and handles
        such data in strict confidence. No other staff or third parties access
        personal data, except for the external services mentioned (Microsoft),
        which act as technical providers as described.
      </p>
      <p>
        We retain data only for as long as necessary to achieve the purposes for
        which it was collected, after which we delete it or anonymize it. Below
        are specific retention periods for each data type:
      </p>
      <p>
        <strong>Account data and workout data:</strong> information provided by
        the user (e.g., registration email, username, saved sets/reps/weights)
        is retained for as long as the account remains active. In practice, this
        data remains stored while the user continues to use the app and keeps
        their account active, so they can access their workout history. The user
        can always edit or delete individual data (e.g., remove a workout)
        directly from the app. They may also request deletion of their entire
        account at any time (see Users’ Rights): in that case all personal data
        associated with the account will be permanently deleted from our systems
        within a short technical timeframe. Limited data may be kept beyond
        deletion only in aggregated or anonymous form, or to comply with legal
        obligations (e.g., security logs), but not in a way that identifies the
        user.
      </p>
      <p>
        <strong>Technical telemetry data (Application Insights):</strong> data
        collected automatically about errors and performance via Application
        Insights is retained for a maximum of 90 days. This retention limit is
        aligned with the platform’s standard settings and serves to keep recent
        history for analysis and debugging without retaining information longer
        than necessary. After about 90 days, older logs and telemetry are
        automatically deleted or overwritten. In any case, because the data is
        anonymous, it is not possible to trace these entries back to a specific
        user, and deletion occurs in accordance with Microsoft Azure Application
        Insights’ retention policies.
      </p>
      <p>
        <strong>Session replay data (Microsoft Clarity):</strong> data collected
        through Clarity (if the user has consented) is retained for limited
        periods, according to Microsoft Clarity’s service policies. In
        particular, detailed user session recordings (e.g., screen replays) are
        retained for a short period, typically up to 30 days from collection.
        Aggregated and anonymous analytics derived from those sessions may be
        retained for a longer period, up to a maximum of 13 months, to allow for
        annual trend analysis. After those periods, this data is also
        automatically deleted by Clarity’s systems. The GymBroTools developer
        does not locally store copies of session replay data: access takes place
        via the Clarity account and is subject to Microsoft’s protection and
        retention measures.
      </p>
      <p>
        <strong>Data transfers abroad:</strong> personal data collected by
        GymBroTools may be transferred to and processed in countries outside the
        European Economic Area (EEA), in particular where servers of the cloud
        providers used — such as Microsoft Azure — are located. In such cases,
        we ensure that appropriate safeguards are in place, such as the use of
        EU Commission‑approved Standard Contractual Clauses or other legal tools
        provided by applicable law, to guarantee a level of protection
        equivalent to that required under the GDPR.
      </p>
      <p>
        At the end of the periods indicated above, data is securely deleted or
        irreversibly anonymized (so that it can no longer be associated with a
        user). Remember that users can always request early deletion of their
        personal data, and GymBroTools will comply within the time limits set by
        law (see Users’ Rights).
      </p>

      <h2>6. Users’ Rights</h2>
      <p>
        GymBroTools users, as data subjects, enjoy a number of rights regarding
        personal data protection. In particular, users may at any time exercise
        the following rights:
      </p>
      <p>
        <strong>Right of access:</strong> the right to obtain confirmation as to
        whether or not personal data concerning them is being processed and, if
        so, to access such data together with information on purposes,
        categories of data processed, recipients, retention period, and the
        other rights listed here. In practice, users can request a copy of their
        data held by us and information on how we use it.
      </p>
      <p>
        <strong>Right to rectification:</strong> the right to obtain the
        correction of inaccurate personal data concerning them and to have
        incomplete data completed. Users can correct their data directly in the
        app where possible (e.g., account details) or by contacting us for
        updates.
      </p>
      <p>
        <strong>Right to erasure (“right to be forgotten”):</strong> the right
        to obtain deletion of personal data concerning them when it is no longer
        necessary for the purposes for which it was collected or when consent is
        withdrawn (where processing is based on consent), subject to legal
        obligations that may require retention. In practice, users can request
        deletion of their account and associated personal data; following the
        request, the data will be permanently erased from our systems within a
        short technical timeframe.
      </p>
      <p>
        <strong>Right to restriction of processing:</strong> the right to obtain
        restriction of processing of personal data in specific circumstances
        (e.g., when accuracy is contested or processing is unlawful and the
        user, instead of erasure, requests restriction).
      </p>
      <p>
        <strong>Right to data portability:</strong> the right to receive the
        personal data concerning them, which they have provided to us, in a
        structured, commonly used, and machine‑readable format and to transmit
        those data to another controller where technically feasible and where
        processing is based on consent or contract.
      </p>
      <p>
        <strong>Right to object:</strong> the right to object, on grounds
        relating to their particular situation, to processing based on
        legitimate interest (such as technical telemetry via Application
        Insights). In the app, users can easily disable optional processing
        (Clarity) simply by refusing or withdrawing consent for session
        recording.
      </p>
      <p>
        <strong>Right to lodge a complaint:</strong> if users believe that their
        data is being processed in violation of data protection law, they have
        the right to lodge a complaint with the competent supervisory authority.
        For users in the European Union, the lead authority is the Italian Data
        Protection Authority (or another competent local authority based on the
        user’s country of residence). We nevertheless invite users to contact us
        first with any questions or requests so we can resolve the issue
        amicably.
      </p>
      <p>
        GymBroTools does not sell, and does not intend to sell, users’ personal
        data as defined by the California Consumer Privacy Act (CCPA).
        California users can exercise their rights by writing to{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>
      <p>
        To exercise their rights, users can contact us at any time at{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
        Requests will be fulfilled within the time limits set by law (normally
        within 30 days, extendable for complex requests) and at no cost to the
        user, unless requests are manifestly unfounded or excessive.
      </p>

      <h2>7. Data Security and Protection</h2>
      <p>
        The security of our users’ data is a priority. We have implemented
        appropriate technical and organizational measures to protect personal
        data from unauthorized access, disclosure, alteration, or destruction.
        In particular:
      </p>
      <p>
        All communications between the GymBroTools app and the server take place
        over HTTPS, ensuring that transmitted data (such as authentication
        credentials or workout updates) is encrypted in transit and not
        interceptable by third parties.
      </p>
      <p>
        Users’ data (including account and exercise data) is stored on secure
        cloud servers provided by Microsoft Azure. These servers benefit from
        Microsoft’s advanced security measures, such as encryption at rest,
        firewalls, intrusion prevention systems, and continuous vulnerability
        monitoring. Only the authorized developer can access these systems, and
        solely for app maintenance and operations.
      </p>
      <p>
        Authentication credentials and other sensitive information are handled
        securely. GymBroTools integrates Microsoft Entra ID (Azure AD) for
        authentication: this means the app does not store passwords in plain
        text in its databases, relying on Microsoft for secure access management
        (e.g., via OIDC/PKCE tokens). Any authentication tokens are stored
        securely on the user’s device and are not accessible to other apps.
      </p>
      <p>
        We have configured telemetry services to minimize collected data and we
        anonymize any potentially personal information. For example, Application
        Insights does not use cookies in the app (being a mobile app) and
        automatically removes potential references to personal identifiers in
        logs. Microsoft Clarity, if enabled, applies masking techniques (for
        example for text input fields) to avoid collecting sensitive information
        during session recordings.
      </p>

      <h2>8. Data Controller and Contact</h2>
      <p>
        The data controller for the GymBroTools app is Marco Crupi, an
        independent developer, who can be contacted at{" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a> for any
        requests regarding privacy and personal data protection.
      </p>

      <h2>9. Changes and Updates to this Privacy Policy</h2>
      <p>
        This Privacy Policy may be subject to changes and updates over time,
        including due to regulatory changes, technological developments, or
        updates to the app’s features. In the event of material changes, we will
        inform users through in‑app notifications or other appropriate channels.
        We encourage users to review this notice periodically to stay informed
        about how personal data is processed.
      </p>
    </div>
  );
}
