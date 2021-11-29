import { Sidebar } from 'Components/Sidebar/Sidebar';
import styles from './App.module.css';
import { MainPage } from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className={styles.main_block}>
      <MainPage />
      <Sidebar />
    </div>
  );
}

export default App;
