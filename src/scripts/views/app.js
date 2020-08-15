import Navbar from 'scripts/components/navbar';
import UrlParser from 'scripts/routes/urlparser';
import routes from 'scripts/routes/routes';

import "scripts/components/spinner"
 
class App {
  constructor({ hamburger, drawer, content }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = content;
 
    this._initialAppShell();
  }
 
  _initialAppShell() {
    console.log("Berhasil.");
    Navbar.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      content: this._content,
    });
  }
  async loadPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
 
export default App;