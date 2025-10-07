export default function PrivacyWebsiteEn() {
  const updated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <div className="container privacy">
      <h1>Website Privacy & Cookies Notice</h1>
      <p className="muted">Last updated: {updated}</p>

      <h2>1. Scope of this notice</h2>
      <p>
        This notice applies exclusively to the <strong>website</strong> of
        GymBroTools (static site, hosted on GitHub Pages with a custom domain).
        For the <strong>mobile app</strong> privacy policy, please see the
        dedicated page: <a href="/privacy">App Privacy</a>.
      </p>

      <h2>2. Data controller and contact</h2>
      <p>
        Controller: Marco Crupi — Email: <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>
      </p>

      <h2>3. Types of data processed via the site</h2>
      <p>
        <strong>Browsing data and technical logs (hosting):</strong> while you
        visit, certain data may be generated and processed such as IP address,
        browser user‑agent, date/time, requested URL, referrer, and technical
        information strictly necessary to deliver the site and ensure security
        (e.g., abuse prevention). Such data is handled by the hosting/CDN used
        for the website.
      </p>
      <p>
        <strong>Cookies and similar technologies:</strong> this website <strong>does not</strong>
        use profiling cookies or third‑party tracking tools. No pixels,
        analytics, or social plugins are installed. We rely solely on a local
        <em>technical storage</em> to remember your language preference: key
        <code>"gymbro.lang"</code> in your browser's <code>localStorage</code>.
        This is optional and can be cleared at any time through your browser
        settings.
      </p>
      <p>
        <strong>Forms and voluntary submissions:</strong> the site does not
        include contact forms or registration areas. If you contact us by
        email, we will use the data you provide solely to respond.
      </p>

      <h2>4. Purposes and legal bases</h2>
      <p>
        <strong>Site delivery and security</strong> (technical logs/hosting):
        legal basis is the controller's <em>legitimate interest</em> in ensuring
        a safe and continuous website experience (Art. 6(1)(f) GDPR).
      </p>
      <p>
        <strong>Language preference</strong> (stored in <code>localStorage</code>):
        legal basis is the <em>necessity to perform pre‑contractual/contractual measures</em>
        and the legitimate interest in providing a consistent experience (Art.
        6(1)(b) and 6(1)(f) GDPR). Consent is not required as this is a purely
        technical tool not intended for tracking.
      </p>

      <h2>5. Retention</h2>
      <p>
        The website does not maintain its own personal‑data databases. Any
        technical logs are managed by the hosting provider and retained for the
        periods specified by that provider. The language preference remains in
        your browser until you manually clear it or clear site storage.
      </p>

      <h2>6. Recipients and hosting</h2>
      <p>
        The site is hosted on <strong>GitHub Pages</strong> (GitHub, Inc.) and
        may use a content delivery network (CDN). These providers may process
        technical data needed to deliver the service and keep it secure. More
        information is available in the
        {" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Privacy Statement
        </a>
        .
      </p>

      <h2>7. International transfers</h2>
      <p>
        The hosting/CDN infrastructure may involve transfers to countries
        outside the EU/EEA. In such cases, providers implement GDPR safeguards
        (e.g., Standard Contractual Clauses). For details, please review the
        provider notice linked above.
      </p>

      <h2>8. Data‑subject rights</h2>
      <p>
        You have the right to access, rectify, erase, restrict, object,
        data‑portability, and to lodge a complaint with a Supervisory Authority.
        To exercise your rights, contact the Controller by email at
        {" "}
        <a href="mailto:marcocrupi@hotmail.it">marcocrupi@hotmail.it</a>.
      </p>

      <h2>9. Security</h2>
      <p>
        The site is static and does not expose authenticated areas or data
        collection forms. The hosting adopts appropriate technical and
        organizational measures; the Controller selects reliable providers and
        minimizes the data processed.
      </p>

      <h2>10. Updates</h2>
      <p>
        This notice may be updated to reflect legal or technical changes.
        Updated versions are published on this page.
      </p>

      <p className="muted">
        Useful links: <a href="/privacy">App Privacy</a> ·
        {" "}
        <a href="/terms">Terms & Conditions</a>
      </p>
    </div>
  )
}

