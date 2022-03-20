import  My_add from './compoment/js/add';
import  My_navbar  from   './compoment/js/navbar';
import  My_state from './compoment/js/state';
import  My_form  from './compoment/js/form';
import  My_image from'./compoment/js/image';
import  My_history from './compoment/js/history';

import { Route, BrowserRouter as Router} from 'react-router-dom'; 
function App() {

   

  return (



    <div className="App">
      <Router>
        <Route path="/"  component={My_navbar}></Route>
        <Route path="/form"   component={My_form} ></Route>
        <Route path="/state"   component={My_state}></Route>
        <Route path="/add"   component={My_add}></Route>
        <Route path="/img"   component={My_image}></Route>
        <Route path="/hist"   component={My_history}></Route>
     

      </Router>


  
    </div>

    
  );
}

export default App;
