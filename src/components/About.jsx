import {Link, Outlet } from 'react-router-dom';
import styles from './About.module.css'

const About = () => {
  return (
    <>
      <h2>About</h2>
      <nav className={styles.aboutNav}>
        <Link className={styles.navBtn} to="us">About Us </Link>
        <Link className={styles.navBtn} to="our-customers">Our Customers </Link>
        <Link className={styles.navBtn} to="shops">Shops</Link>
      </nav>

      <Outlet />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis velit,
        suscipit excepturi quod quae nihil libero sint repellendus deserunt
        porro pariatur minima dicta praesentium voluptatum fuga. Deserunt ipsa
        consequuntur facilis?
      </p>
    </>
  );
};

export default About;
