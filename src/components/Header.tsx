import React from 'react';

const about = document.getElementById('about');
const exp = document.getElementById('exp');
const edu = document.getElementById('edu');
const contact = document.getElementById('contact');

const Header = (props: any) => {

  return (
    <header id='header'>
      <div className='container'>
        <div className='logo'>
          <a href='/index.html'>
            <svg width='127' height='48' viewBox='0 0 187 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <line x1='10' y1='5' x2='50' y2='5' stroke='#e53f71' stroke-width='10' />
              <line x1='10' y1='120' x2='50' y2='120' stroke='#e53f71' stroke-width='10' />
              <line x1='5' y1='125' x2='5' stroke='#e53f71' stroke-width='10' />
              <line x1='166' y1='120' x2='126' y2='120' stroke='#e53f71' stroke-width='10' />
              <line x1='166' y1='4.99998' x2='126' y2='4.99998' stroke='#e53f71' stroke-width='10' />
              <line x1='171' y1='-1.52588e-05' x2='171' y2='125' stroke='#e53f71' stroke-width='10' />
              <path d='M32.048 104L46.192 62.016H52.208L66.352 104H60.72L53.424 80.512C52.6987 78.1653 51.9733 75.84 51.248 73.536C50.5653 71.1893 49.904 68.8 49.264 66.368H49.008C48.3253 68.8 47.6427 71.1893 46.96 73.536C46.2773 75.84 45.5733 78.1653 44.848 80.512L37.488 104H32.048ZM39.472 91.2V86.912H58.736V91.2H39.472ZM77.335 104.768C75.927 104.768 74.711 104.277 73.687 103.296C72.663 102.272 72.151 100.971 72.151 99.392C72.151 97.7707 72.663 96.4693 73.687 95.488C74.711 94.464 75.927 93.952 77.335 93.952C78.7857 93.952 80.0017 94.464 80.983 95.488C82.007 96.4693 82.519 97.7707 82.519 99.392C82.519 100.971 82.007 102.272 80.983 103.296C80.0017 104.277 78.7857 104.768 77.335 104.768ZM105.79 104.768C102.718 104.768 99.8807 104.213 97.278 103.104C94.718 101.952 92.478 100.437 90.558 98.56L93.758 94.848C95.3367 96.4267 97.1713 97.7067 99.262 98.688C101.395 99.6267 103.657 100.096 106.046 100.096C108.947 100.096 111.187 99.4773 112.766 98.24C114.387 97.0027 115.198 95.4027 115.198 93.44C115.198 91.9467 114.857 90.752 114.174 89.856C113.534 88.96 112.638 88.2133 111.486 87.616C110.377 87.0187 109.097 86.4213 107.646 85.824L101.63 83.2C100.222 82.6027 98.814 81.856 97.406 80.96C96.0407 80.064 94.8887 78.9333 93.95 77.568C93.0113 76.16 92.542 74.432 92.542 72.384C92.542 70.2507 93.118 68.352 94.27 66.688C95.4647 64.9813 97.1073 63.6587 99.198 62.72C101.289 61.7387 103.657 61.248 106.302 61.248C108.947 61.248 111.379 61.7387 113.598 62.72C115.817 63.6587 117.694 64.896 119.23 66.432L116.414 69.888C115.049 68.6507 113.534 67.6907 111.87 67.008C110.206 66.2827 108.286 65.92 106.11 65.92C103.678 65.92 101.715 66.4747 100.222 67.584C98.7287 68.6507 97.982 70.144 97.982 72.064C97.982 73.3867 98.3447 74.4747 99.07 75.328C99.838 76.1813 100.798 76.8853 101.95 77.44C103.102 77.9947 104.275 78.528 105.47 79.04L111.358 81.6C113.107 82.2827 114.686 83.1147 116.094 84.096C117.502 85.0347 118.611 86.208 119.422 87.616C120.233 89.024 120.638 90.752 120.638 92.8C120.638 95.0187 120.041 97.0453 118.846 98.88C117.651 100.672 115.945 102.101 113.726 103.168C111.507 104.235 108.862 104.768 105.79 104.768ZM133.605 104.768C132.197 104.768 130.981 104.277 129.957 103.296C128.933 102.272 128.421 100.971 128.421 99.392C128.421 97.7707 128.933 96.4693 129.957 95.488C130.981 94.464 132.197 93.952 133.605 93.952C135.056 93.952 136.272 94.464 137.253 95.488C138.277 96.4693 138.789 97.7707 138.789 99.392C138.789 100.971 138.277 102.272 137.253 103.296C136.272 104.277 135.056 104.768 133.605 104.768Z' fill='#CCD6F6' />
            </svg>
          </a>
        </div>
        <nav id='nav'>
          <ul>
            <li>
              <a className='underline_animation about' onClick={props.scroll}><span>01.</span>About</a>
            </li>
            <li>
              <a className='underline_animation exp' onClick={props.scroll}><span>02.</span>Experience</a>
            </li>
            <li>
              <a className='underline_animation edu' onClick={props.scroll}><span>03.</span>Education</a>
            </li>
            <li>
              <a className='underline_animation contact' onClick={props.scroll}><span>04.</span>Contact</a>
            </li>
          </ul>
          <a href="../docs/secareanu_alexandru.pdf" target="_blank" className="header_button">Résumé</a>
        </nav>
        <button onClick={props.menu} id="hamburger" className="hamburger hamburger--emphatic" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="overlay" id="overlay"></div>
    </header>
  );
};

export default Header;