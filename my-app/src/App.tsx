import React from 'react';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Couter';
import InputField from './components/InputField';
import MyForm from './components/MyForm';
import { useContext } from 'react';
import UserList from './components/Userlist';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import components from React Router
import { Home, About, Contact } from './components/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <HelloWorld name='World' />
      <Counter />
      <InputField />
      <MyForm />
      <UserList />
    </div>
  );
}

export default App;

