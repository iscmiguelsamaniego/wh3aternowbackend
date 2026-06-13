export default function Home() {
  const exampleCity = "brookline";
  const exampleDate = new Date().toISOString().split('T')[0];
  const curlCommand = `curl -X GET "http://localhost:3000/api/weather?city=${exampleCity}&date=${exampleDate}"`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-zinc-950 text-zinc-100 font-sans">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="space-y-2 text-center">
          <title>Privacy Policy</title>
        </div>

        {/* Card del Endpoint */}
        <div>

        </div>
        <strong>Privacy Policy</strong>
        <p>This privacy policy applies to the Weath3r App app for mobile devices, together with any related services operated by
          Miguel Angel Samaniego (collectively, the "Application").

          Miguel Angel Samaniego is hereby referred to as the "Service Provider".

        </p><strong>Information Collection and Use</strong><p>
          The Application collects information when you download and use it.
          This information may include
        </p>
        <ul><li>Your device's Internet Protocol address</li><li>
        </li><li>The time spent on the Application</li>
          <li>The cities or locations you manually search within the Application.</li>
          <li>The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages.</li>
          <li>Your mobile operating system.</li>
        </ul>

        <strong>Your Rights</strong>

        <p>You may request access to, correction of, or deletion of your personal data held by the Service Provider.
          To exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider
          at samt3knologies@gmail.com.</p><strong>Your California privacy rights (CCPA/CPRA)</strong>

        <p>If you are a California resident, you have the right to know what personal information is collected,
          the right to delete personal information, the right to opt out of the sale or sharing of personal information,
          and the right to non-discrimination for exercising these rights. To exercise your CCPA/CPRA rights,
          contact the Service Provider at samt3knologies@gmail.com.</p><p>The Service Provider may use the
            information you provide to send important information, required notices, and, where permitted by law,
            marketing communications.</p>

        <p>For a better experience while using the Application, the Service Provider may require you to provide certain personally
          identifiable information.
          The information the Service Provider requests will be retained and used as described in this privacy policy.</p>
        <strong>Third Party Access</strong>

        <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider
          in improving the Application and their service. The Service Provider may share your information with
          third parties in the ways that are described in this privacy statement.</p>

        <strong>International Data Transfers</strong>

        <p>The Service Provider or its third-party service providers may transfer personal data to countries outside
          your country of residence, including outside the European Economic Area (EEA). Where applicable law requires
          safeguards for international transfers, the Service Provider will use appropriate mechanisms.</p>

        <ul><li>Standard Contractual Clauses (SCCs) approved by the European Commission</li><li>Adequacy decisions or other
          legally recognized transfer mechanisms</li><li>Your consent, where required and legally permitted</li></ul>

        <p>Data protection laws in other countries may differ from those in your jurisdiction. Where required by law,
          the Service Provider will apply appropriate safeguards and obtain any consent required for the transfer.</p>

        <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p><ul><li>as required by law,
          such as to comply with a subpoena, or similar legal process;</li><li>when they believe in good faith that
            disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud,
            or respond to a government request;</li><li>with their trusted services providers who work on their behalf,
              do not have an independent use of the information the Service Provider discloses to them, and have agreed
              to adhere to the rules set forth in this privacy statement.</li></ul><p></p><strong>Opt-Out Rights</strong>

        <div>
          <p>You can stop further collection of information from your mobile device by uninstalling the Application.
            Uninstalling will stop the Application from collecting data from your device, but it does not automatically
            delete information that has already been transmitted to the Service Provider or to third parties.</p>
        </div><p>To request deletion of your personal data, to withdraw consent, or to exercise any of your rights,
          contact the Service Provider at samt3knologies@gmail.com.</p><strong>Data Retention Policy</strong>

        <p>The Service Provider retains personal data based on its necessity for the stated purposes:</p>

        <ul><li>User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter,
          unless longer retention is required by law</li><li>Automatically Collected Data: Retained for up to 24 months from collection,
            unless longer retention is required for legal compliance</li>
          <li>Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you</li>
          <li>Data required for legal compliance: Retained as long as required by applicable law</li></ul>

        <p>You may request deletion of your personal data, subject to any legal obligation to retain it. If you want
          the Service Provider to delete User Provided Data submitted through the Application, please contact
          them at samt3knologies@gmail.com. Please note that some User Provided Data may be required
          for the Application to function properly.</p><strong>Children</strong>

        <p>The Application is not intended for children under 16 years of age, or such higher age as required
          by applicable law. The Service Provider does not knowingly solicit data from children or market the Application to them.</p>
        <div>
          <p>The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider
            encourages all children to never submit any personally identifiable information through the Application and/or Services.
            The Service Provider encourages parents and legal guardians to monitor their children's Internet usage and to help enforce
            this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider <span>(samt3knologies@gmail.com)</span> so that they will be able to take the necessary actions. If you are under 16 years of age, your parent or guardian must provide consent on your behalf where permitted by law.</p></div><strong>Security</strong><p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p><strong>Data Breach Notification</strong><p>If a data breach occurs that affects your personal data, the Service Provider will notify you in accordance with applicable legal requirements, including, where required, providing information about the nature of the breach and the steps being taken to address it.</p><strong>Changes</strong><p>The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.</p><p>Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at samt3knologies@gmail.com.</p><p>This privacy policy is effective as of 2026-06-13</p><strong>Your Consent</strong><p>Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant feature or action. You may withdraw consent at any time without affecting processing carried out before withdrawal. Processing based on other lawful bases is carried out as described above.</p><strong>Contact Us</strong><p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at samt3knologies@gmail.com.</p>

        <footer className="pt-10 text-center text-xs text-zinc-600">
          Samt3knologies • 2026.
        </footer>
      </div>
    </main>
  );
}