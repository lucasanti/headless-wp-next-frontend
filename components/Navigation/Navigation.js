import { useState, useEffect, createRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/NavToggler.module.css'


function replaceAbsoluteLinks(html) {
  const siteUrl = 'https://dev-b-headless-wp.pantheonsite.io';
  const relativeUrl = '';
  const regex = new RegExp(siteUrl, 'g');
  const aTagRegex = /(<a.*?href=")(.*?)(".*?>.*?<\/a>)/gi;

  html = html.replace(regex, relativeUrl);
  html = html.replace(aTagRegex, function(match, p1, p2, p3) {
    return p1 + p2.replace(regex, relativeUrl) + p3;
  });
  html = html.replace(/<a>\s*<\/a>/gi, '');

  return html;
}



function Navigation({ navigation }) {
  const navRef = createRef();

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  
    useEffect(() => {
    if(navRef.current){
      const navList = navRef.current.querySelectorAll('li');
      navList.forEach((item) => {
        item.classList.add('nav-item');
      });
      const navLink = navRef.current.querySelectorAll('a');
      navLink.forEach((item) => {
        item.classList.add('nav-link')
      })
    }
  }, [navigation])

  const replacedHtml = navigation ? replaceAbsoluteLinks(navigation) : '';

  const menuClass = `collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`;
  const btnClass = `${styles.toggler} ${isMenuOpen ? `${styles.active}` : ''}`;
  return (
      <nav className='navbar navbar-expand-lg' ref={navRef}>
        
        <Link className="navbar-brand p-0" href="/">Logo</Link>
        
        <button 
          className={`${btnClass} d-lg-none`} 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={ menuClass } id="navbarSupportedContent">
          <ul 
            className="navbar-nav ms-auto me-0 mb-2 mb-lg-0"
            dangerouslySetInnerHTML={{__html: replacedHtml }}
          />
        </div>
        
      </nav>
  );
}

export default Navigation;