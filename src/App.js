import React from 'react';
import axios from 'axios';
//import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App () {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component { 
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json')
//     .then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Route path="/" render={() => <Home items={this.props.items} />} exact />
//             <Route path="/cart" component={Cart} exact />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items
//   };
// };

// const mapDispatchToProps = {
//   setPizzas
// };

//export default connect(mapStateToProps, mapDispatchToProps)(App);
