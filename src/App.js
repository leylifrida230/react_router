import React from "react";
import Navbar from "./components/Navbar"
//import Utama from "./Utama";
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

import Beranda from "./pages/Beranda";
import TentangSaya from "./pages/TentangSaya";
import Karya from "./pages/Karya";
import Contact from "./pages/Contact";
import GApp from './GApp'
import BookGallery from './pages/BookGallery'
import Failed from './pages/Failed'
import Cart from './pages/Cart';

class App extends React.Component{
  render(){
    return(
      <div><hr />
        <Navbar/>
        {/**<Link to="/">Beranda</Link>
        <Link to="/tentangsaya">  |Tentang Saya</Link>
        <Link to="/karya">  |Karya</Link>
        <Link to="/kontak">  |Kontak</Link>
        <p><Utama/></p> */}

        <Switch>
          <Route exact path="/" component={Beranda}/>
          <Route path="/tentangsaya" component={TentangSaya} />
          <Route path="/karya" component={Karya} />
          <Route path="/bookgallery" component={BookGallery} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/Gallery" component={GApp} />
          <Route path="/failed" component={Failed} />
        </Switch>
      </div>
    )
  }
}

export default App;
