// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { Route, Routes, Link, Router } from 'react-router-dom';

import HomePage from "../pages/home/home";
import HomeAssistantPage from "../pages/home-assistant/home-assistant";
import TasksPage from "../pages/tasks/tasks";
import AppLayout from '../components/layout/app-layout/app-layout';

export const App = () => (
  <AppLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-assistant" element={<HomeAssistantPage />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  </AppLayout>
);

export default App;
