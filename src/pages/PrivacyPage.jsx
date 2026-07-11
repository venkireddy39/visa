import React from 'react';

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0', padding: '3rem 3rem 5rem', textAlign: 'left' }}>

        {/* Title */}
        <h1 style={{ fontSize: '3.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
          Last updated: July 11, 2026
        </p>

        <p style={{ color: '#334155', fontSize: '1.1rem', lineHeight: '1.85', marginBottom: '2rem' }}>
          Holidays Navigator is committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy explains how we collect, use, store, and protect
          your information when you use our website and visa assistance services.
        </p>

        {/* Section 1 */}
        <h2 style={sectionHeading}>1. Information We Collect</h2>
        <p style={bodyText}>We may collect the following information:</p>
        <ul style={listStyle}>
          <li style={listItem}>Full name</li>
          <li style={listItem}>Email address</li>
          <li style={listItem}>Phone number</li>
          <li style={listItem}>Date of birth</li>
          <li style={listItem}>Passport details</li>
          <li style={listItem}>Nationality</li>
          <li style={listItem}>Residential address</li>
          <li style={listItem}>Travel information</li>
          <li style={listItem}>Visa application details</li>
          <li style={listItem}>Payment information (processed securely through authorized payment providers)</li>
        </ul>

        {/* Section 2 */}
        <h2 style={sectionHeading}>2. How We Use Your Information</h2>
        <p style={bodyText}>Your information is used to:</p>
        <ul style={listStyle}>
          <li style={listItem}>Process visa applications.</li>
          <li style={listItem}>Verify your identity and documents.</li>
          <li style={listItem}>Communicate regarding your application status.</li>
          <li style={listItem}>Schedule embassy or biometric appointments.</li>
          <li style={listItem}>Provide customer support.</li>
          <li style={listItem}>Improve our website and services.</li>
          <li style={listItem}>Comply with legal and regulatory requirements.</li>
        </ul>

        {/* Section 3 */}
        <h2 style={sectionHeading}>3. Information Sharing</h2>
        <p style={bodyText}>We may share your information only when necessary with:</p>
        <ul style={listStyle}>
          <li style={listItem}>Embassies and consulates.</li>
          <li style={listItem}>Immigration authorities.</li>
          <li style={listItem}>Government agencies.</li>
          <li style={listItem}>Authorized payment providers.</li>
          <li style={listItem}>Trusted third-party service providers assisting with visa processing.</li>
        </ul>
        <p style={bodyText}>
          We do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>

        {/* Section 4 */}
        <h2 style={sectionHeading}>4. Data Security</h2>
        <p style={bodyText}>
          We implement appropriate technical and organizational security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or destruction.
        </p>

        {/* Section 5 */}
        <h2 style={sectionHeading}>5. Data Retention</h2>
        <p style={bodyText}>
          Your personal information is retained only for as long as necessary to provide our services,
          comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>

        {/* Section 6 */}
        <h2 style={sectionHeading}>6. Cookies</h2>
        <p style={bodyText}>Our website may use cookies and similar technologies to:</p>
        <ul style={listStyle}>
          <li style={listItem}>Improve website performance.</li>
          <li style={listItem}>Remember your preferences.</li>
          <li style={listItem}>Analyze website traffic.</li>
          <li style={listItem}>Enhance your browsing experience.</li>
        </ul>
        <p style={bodyText}>
          You may disable cookies through your browser settings, although some website features may not
          function properly.
        </p>

        {/* Section 7 */}
        <h2 style={sectionHeading}>7. Your Rights</h2>
        <p style={bodyText}>Depending on applicable laws, you may have the right to:</p>
        <ul style={listStyle}>
          <li style={listItem}>Access your personal information.</li>
          <li style={listItem}>Correct inaccurate information.</li>
          <li style={listItem}>Request deletion of your personal data.</li>
          <li style={listItem}>Withdraw consent where applicable.</li>
          <li style={listItem}>Request a copy of your stored information.</li>
        </ul>

        {/* Section 8 */}
        <h2 style={sectionHeading}>8. Third-Party Links</h2>
        <p style={bodyText}>
          Our website may contain links to third-party websites. We are not responsible for the privacy
          practices or content of those websites.
        </p>

        {/* Section 9 */}
        <h2 style={sectionHeading}>9. Children's Privacy</h2>
        <p style={bodyText}>
          Our services are not intended for individuals under the age of 18 without the consent of a
          parent or legal guardian. We do not knowingly collect personal information from children.
        </p>

        {/* Section 10 */}
        <h2 style={sectionHeading}>10. Changes to This Privacy Policy</h2>
        <p style={bodyText}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with the revised effective date.
        </p>

        {/* Section 11 */}
        <h2 style={sectionHeading}>11. Contact Us</h2>
        <p style={bodyText}>
          If you have any questions about this Privacy Policy or how we handle your personal information,
          please contact us through the contact details provided on our website.
        </p>

      </div>
    </div>
  );
}

const sectionHeading = {
  fontSize: '1.35rem',
  fontWeight: '700',
  color: '#0f172a',
  margin: '2rem 0 0.6rem',
  textAlign: 'left',
};

const bodyText = {
  color: '#334155',
  fontSize: '1.18rem',
  lineHeight: '1.9',
  margin: '0 0 1rem',
  textAlign: 'left',
};

const listStyle = {
  paddingLeft: '1.6rem',
  margin: '0.25rem 0 1rem',
  textAlign: 'left',
};

const listItem = {
  color: '#334155',
  fontSize: '1.18rem',
  lineHeight: '1.9',
  marginBottom: '0.4rem',
};
