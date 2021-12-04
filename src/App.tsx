import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// Components
import { Sidebar } from './components/Sidebar/Sidebar';
import { HomePage } from 'pages/HomePage/HomePage';
// Styles
import styles from './App.module.css';
import { AboutPage } from 'pages/AboutPage/AboutPage';
// import { Portfolio } from 'pages/Portfolio/Portfolio';
import { Contacts } from 'pages/Contacts/Contacts';

// Path
const home = '/home';
const about = '/about';
// const portfolio = '/portfolio';
const contacts = '/contacts';


function App() {
  return (
    
    <div className={styles.main_block}>
      <Suspense fallback='Loading...'>

        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route path={home} element={<HomePage />}/>
          <Route path={about} element={<AboutPage />}/>
          {/* <Route path={portfolio} element={<Portfolio />} /> */}
          <Route path={contacts} element={<Contacts />} />
          
        </Routes>
      </Suspense>
      <Sidebar />
    </div>
  );
}

export default App;