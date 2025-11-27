import React from 'react';
import styles from './HelpCenterPage.module.css';

const HelpCenterPage = () => {
  return (
    <div className={styles.container}>
      <h1>Help Center</h1>
      <p>If you need assistance, we are here to help. Below are the best ways to reach us.</p>

      <section className={styles.card} id="contact">
        <h2>Contact Support</h2>
        <p>
          Email: <a href="mailto:malavathakash123@gmail.com">malavathakash123@gmail.com</a>
          <br />
          Phone: <a href="tel:+918374639557">+91 83746 39557</a>
        </p>
        <p>Typical response time: 1 business day.</p>
      </section>

      <section className={styles.card}>
        <h2>Company</h2>
        <p>TripSee — Trusted travel and trip booking service.</p>
        <p>
          Address:<br />
          835217 Khalgoan Housing Complex<br />
          Hotwar, Ranchi
        </p>
      </section>

      <section className={styles.card}>
        <h2>Resources</h2>
        <p>
          For account issues, bookings and refunds, please include your booking ID and a short description when contacting support.
        </p>
      </section>
    </div>
  );
};

export default HelpCenterPage;
