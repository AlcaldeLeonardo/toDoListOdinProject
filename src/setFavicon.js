import favicon from './img/favicon.png';

export function setFavicon() {
  const faviconDOM = document.getElementById('favicon');
  faviconDOM.setAttribute('href', favicon);
}
