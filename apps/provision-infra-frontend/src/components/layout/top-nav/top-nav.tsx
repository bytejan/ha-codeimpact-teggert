import { Route, Link } from 'react-router-dom';

import styles from './home.module.css';

export const TopNav = () => (
  <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/tasks"}>tasts</Link>
    <Link to={"/home-assistant"}>Home assistant</Link>
  </div>
);

export default TopNav;
