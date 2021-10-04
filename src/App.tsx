import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
  Redirect
} from 'react-router-dom';

import routes from './config/route';

const App: React.FC = () => {

  const renderedRoute = () => {
    return routes.map((route, index)=> {
      return (
          <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
              <route.component
                name={route.name}
                {...props}
                {...route.props}
              />  
            )}
          />
        );
    })
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
              {renderedRoute()}
              <Redirect to="/"></Redirect>
          </Switch>
        </BrowserRouter>
        {/* <List people={people}/>
        <AddToList people={people} setPeople={setPeople}/> */}
    </div>
  );
}

export default App;
