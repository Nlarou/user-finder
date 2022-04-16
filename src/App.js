import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useContext} from "react"
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import { GithubProvider } from './Context/github/GithubContext';
import { AlertProvider } from './Context/alert/AlertContext';
import UserProfileGithub from './pages/UserProfileGithub';
import UserProfileYoutube from './pages/UserProfileYoutube';
import { YoutubeProvider } from './Context/youtube/YoutubeContext';
import GithubContext from './Context/github/GithubContext';
import React from 'react';
function App() {
 
  return (
    <GithubProvider>
      <YoutubeProvider>
      <AlertProvider>
      
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/github-user/:login" element={<UserProfileGithub /> } />
                <Route path="/youtube-user/:login" element={<UserProfileYoutube/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path='/not-found' element={<NotFound />} />
              </Routes>

            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </YoutubeProvider>
    </GithubProvider>
  );
 
}

export default App;
