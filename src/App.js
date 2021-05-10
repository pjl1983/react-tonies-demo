import './App.css';
import React from 'react';
import {TonieList} from "./tonie-list.component";
import {WishlistProvider} from "./WishlistContext";
import {Navbar} from "./navbar.component";

function App() {

  return (
    <WishlistProvider>
      <Navbar/>
      <TonieList/>
    </WishlistProvider>
  );
}

export default App;
