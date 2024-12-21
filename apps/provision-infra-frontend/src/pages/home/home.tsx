import { Route, Link } from 'react-router-dom';

import styles from './home.module.css';

export function HomePage() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home!</h1>
      <ul>
        <li>
          <Link to="/">home root</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
