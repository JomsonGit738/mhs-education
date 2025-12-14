import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './assets/css/bootstrap.min.css';
import './assets/css/open-iconic-bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/aos.css';
import './assets/css/ionicons.min.css';
import './assets/css/flaticon.css';
import './assets/css/icomoon.css';
import './assets/css/style.css';
import './global.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
