import React from "react";
import Navbar from "./components/Navbar"
//import Utama from "./Utama";
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

import Beranda from "./Beranda";
import TentangSaya from "./TentangSaya";
import Karya from "./Karya";
import Kontak from "./Kontak";

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
          <Route path="/kontak" component={Kontak} />
        </Switch>
      </div>
    )
  }
}

export default App;
