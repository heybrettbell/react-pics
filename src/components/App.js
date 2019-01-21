import React from 'react';
import axios from 'axios'; 
import SearchBar from './SearchBar';


class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID e11f7a14e1a56bba8fe32228f6648ce57de9abe2278dbc2e0d62d42c0a75031e', 
        }
    });
    
    console.log(response.data.results);
  }
  
  render() {
    return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  };
};

export default App; 