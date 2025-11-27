import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1>About TripSee</h1>
      <p className={styles.lead}>
        TripSee is a lightweight trip discovery and booking demo application built to showcase
        a full-stack JavaScript travel booking experience.
      </p>

      <section className={styles.section}>
        <h2>What this project does</h2>
        <ul>
          <li>Browse and filter trips by source, destination and date.</li>
          <li>Select seats and book tickets with a simple checkout flow.</li>
          <li>View and manage your bookings in a dedicated My Bookings view.</li>
          <li>Admin dashboard for creating and managing trips and viewing bookings.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tech stack</h2>
        <p>
          Frontend: React + Vite. Backend: Node.js, Express. Database: MongoDB.
          Images handled via Cloudinary. Authentication uses JWT.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Why this project</h2>
        <p>
          This project demonstrates a concise, practical travel booking flow with
          a focus on maintainability, simple APIs, and a responsive UI. It is
          suitable as a learning reference or a starting point for a production
          application.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contact</h2>
        <p>If you need help or want to contribute, see the <a href="/help">Help Center</a>.</p>
      </section>
    </div>
  );
};

export default AboutPage;
