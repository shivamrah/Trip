import React from 'react';
import styles from './PrivacyPolicyPage.module.css';

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>

      <p className={styles.lead}>
        This Privacy Policy explains how TripSee collects, uses, discloses, and protects your personal information.
      </p>

      <section className={styles.section}>
        <h2>Information we collect</h2>
        <p>We may collect the following information when you use our service:</p>
        <ul>
          <li>Account details such as name, email and password when you register.</li>
          <li>Booking information including trip selections, seats, travel dates and payment metadata.</li>
          <li>Usage data such as pages visited, searches and interactions to improve the product.</li>
          <li>Device and technical information (browser, IP address) to provide and secure the service.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How we use your information</h2>
        <ul>
          <li>To provide and operate the booking service and process bookings.</li>
          <li>To authenticate users and maintain account security.</li>
          <li>To communicate booking confirmations, updates and customer support messages.</li>
          <li>To analyze and improve the service, prevent fraud, and enforce our policies.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Sharing and disclosures</h2>
        <p>
          We do not sell your personal information. We may share information with service
          providers (for payments, email delivery, hosting, analytics) and as required by law.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cookies and tracking</h2>
        <p>
          We use cookies and similar technologies to provide core functionality, remember
          preferences, and measure site usage. You can control cookies via your browser settings.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Data security</h2>
        <p>
          We implement reasonable technical and organizational measures to help protect your data.
          However, no system can be completely secure — if you suspect unauthorized access please contact us.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contact</h2>
        <p>
          For privacy inquiries or to request deletion of your data, contact us at:
          <br />
          <a href="mailto:malavathakash123@gmail.com">malavathakash123@gmail.com</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The effective date will be updated at the top of the page when changes are made.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
