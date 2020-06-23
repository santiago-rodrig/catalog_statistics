import React from 'react';
import styles from './Footer.module.css';

const Component = () => (
  <>
    <hr style={{ width: '80%', marginTop: '10rem' }} />
    <footer className={styles.footer}>
      <p>Copyright &copy; 2020, Santiago Rodríguez. All rights reserved.</p>
      <p><a href="https://iexcloud.io">Data provided by IEX Cloud</a></p>
    </footer>
  </>
);

export default Component;
