import React from 'react';
import axios from 'axios';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([])

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //     .then(response => response.json())
  //     .then(json => {
  //       setPizzas(json.pizzas); 
  //     });
  // }, []);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
      });
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
    </div>
  </div>
  );
}

export default App;
