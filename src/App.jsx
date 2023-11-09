import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Us from './components/Us';
import OurCustomers from './components/OurCustomers';
import Shops from './components/Shops';

function App() {

  return (
    <>
   

    <Navigation />
 <h1>React Router</h1>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}>

        <Route path="us" element={<Us />}/>
        <Route path="our-customers" element={<OurCustomers />}/>
        <Route path="shops" element={<Shops />}/>

      </Route>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/characters" element={<CharacterList />}/>
      <Route path="/characters/:id" element={<CharacterDetails />}/>
      <Route path="*" element={<NotFound /> }/>
    </Routes>

    <footer>All rights reserved &copy;</footer>
     
    </>
  )
}

export default App
