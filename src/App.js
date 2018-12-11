import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <FoodBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
