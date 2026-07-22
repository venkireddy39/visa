import React from 'react';
export default function TermsPage() {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0', padding: '3rem 3rem 5rem', textAlign: 'left' }}>
        {/* Title */}
        <h1 style={{ fontSize: '3.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
          Terms and Conditions
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
          Last updated: July 11, 2026
        </p>
        <p style={{ color: '#334155', fontSize: '1.1rem', lineHeight: '1.85', marginBottom: '2rem' }}>
          Welcome to Holidays Navigator. By accessing or using our website and services, you agree to the following Terms &amp; Conditions. Please read them carefully.
        </p>
        {/* Section 1 */}
        <h2 style={sectionHeading}>1. Acceptance of Terms</h2>
        <p style={bodyText}>
          By using our website or requesting our visa assistance services, you agree to comply with these Terms &amp; Conditions and all applicable laws and regulations.
        </p>

        {/* Section 2 */}
        <h2 style={sectionHeading}>2. Service Scope</h2>
        <p style={bodyText}>
          Holidays Navigator provides visa consultation, documentation assistance, application support, appointment scheduling, and travel-related guidance. We do not guarantee visa approval, as all decisions are made solely by the respective embassy, consulate, or immigration authority.
        </p>
        {/* Section 3 */}
        <h2 style={sectionHeading}>3. User Responsibilities</h2>
        <p style={bodyText}>You agree to:</p>
        <ul style={listStyle}>
          <li style={listItem}>Provide accurate, complete, and truthful information.</li>
          <li style={listItem}>Submit genuine and valid documents.</li>
          <li style={listItem}>Respond promptly to requests for additional information.</li>
          <li style={listItem}>Follow the requirements of the relevant embassy or immigration authority.</li>
        </ul>
        <p style={bodyText}>
          Any false or misleading information may result in application rejection or legal consequences.
        </p>

        {/* Section 4 */}
        <h2 style={sectionHeading}>4. Visa Approval</h2>
        <p style={bodyText}>
          Visa approval or rejection is entirely at the discretion of the respective embassy or immigration authority. Holidays Navigator cannot influence or guarantee the outcome of any application.
        </p>

        {/* Section 5 */}
        <h2 style={sectionHeading}>5. Fees and Payments</h2>
        <ul style={listStyle}>
          <li style={listItem}>All service fees must be paid as agreed before processing begins.</li>
          <li style={listItem}>Government visa fees, embassy charges, courier charges, and third-party fees are separate unless explicitly stated.</li>
          <li style={listItem}>Paid service charges may be non-refundable once processing has started.</li>
        </ul>

        {/* Section 6 */}
        <h2 style={sectionHeading}>6. Processing Time</h2>
        <p style={bodyText}>
          Estimated processing times are provided for guidance only. Delays caused by embassies, government authorities, public holidays, or unforeseen circumstances are beyond our control.
        </p>

        {/* Section 7 */}
        <h2 style={sectionHeading}>7. Document Verification</h2>
        <p style={bodyText}>
          Holidays Navigator reserves the right to verify submitted documents. Applications containing forged, altered, or fraudulent documents may be rejected immediately.
        </p>

        {/* Section 8 */}
        <h2 style={sectionHeading}>8. Cancellation and Refund Policy</h2>
        <ul style={listStyle}>
          <li style={listItem}>Service cancellation requests must be submitted in writing.</li>
          <li style={listItem}>Government fees, embassy fees, and third-party charges are generally non-refundable.</li>
          <li style={listItem}>Refunds, if applicable, will be processed according to our Refund Policy.</li>
        </ul>

        {/* Section 9 */}
        <h2 style={sectionHeading}>9. Privacy</h2>
        <p style={bodyText}>
          Your personal information is handled according to our Privacy Policy and is used only for providing visa-related services and complying with legal obligations.
        </p>

        {/* Section 10 */}
        <h2 style={sectionHeading}>10. Limitation of Liability</h2>
        <p style={bodyText}>Holidays Navigator shall not be liable for:</p>
        <ul style={listStyle}>
          <li style={listItem}>Visa rejection by any embassy or immigration authority.</li>
          <li style={listItem}>Delays caused by government agencies.</li>
          <li style={listItem}>Losses resulting from incorrect information provided by the applicant.</li>
          <li style={listItem}>Missed travel plans due to visa delays or rejection.</li>
        </ul>

        {/* Section 11 */}
        <h2 style={sectionHeading}>11. Intellectual Property</h2>
        <p style={bodyText}>
          All website content, including text, graphics, logos, and design, is the property of Holidays Navigator and may not be copied, reproduced, or distributed without prior written permission.
        </p>

        {/* Section 12 */}
        <h2 style={sectionHeading}>12. Changes to Terms</h2>
        <p style={bodyText}>
          Holidays Navigator reserves the right to update these Terms &amp; Conditions at any time. Updated terms will become effective immediately upon publication on the website.
        </p>

        {/* Section 13 */}
        <h2 style={sectionHeading}>13. Governing Law</h2>
        <p style={bodyText}>
          These Terms &amp; Conditions shall be governed by the laws of the country or state where Holidays Navigator operates. Any disputes shall be subject to the jurisdiction of the competent courts.
        </p>

        {/* Section 14 */}
        <h2 style={sectionHeading}>14. Contact Us</h2>
        <p style={bodyText}>
          If you have any questions regarding these Terms &amp; Conditions, please contact us through the contact information provided on our website.
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
}
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
