import React from 'react';
import Header from 'components/Header';
import Products from 'components/Products'

class App extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="mian">

                <Header nickname="Admin"></Header>
                <Products></Products>
            </div>
          );
    }
}
 
export default App;