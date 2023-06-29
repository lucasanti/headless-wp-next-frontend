import { useState, useEffect, createRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/NavToggler.module.css'
import Image from 'next/image';

const siteUrl = 'https://dev-b-headless-wp.pantheonsite.io';

function replaceAbsoluteLinks(html) {
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


export default function Navigation({ navigation }) {
  const navRef = createRef();
  
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [siteIconUrl, setSiteIconUrl] = useState('');

    useEffect(() => {
      fetch(`${siteUrl}/wp-json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.site_icon_url) {
          setSiteIconUrl(data.site_icon_url);
        }
      })
      .catch((error) => {
        console.error('Errore durante la richiesta dell\'URL del logo:', error);
      });
    }, [])


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
        
        <Link className="navbar-brand p-0" href="/">
          <Image src={siteIconUrl || '/images/fallback-logo.svg' } width={72} height={72} style={{width: '32px', height: '32px'}}/>
        </Link>
        
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