import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      {/* <div>Hello</div> */}
      <div className="app__body">
       <Router>
        
            {/* sidebar */}
            <Sidebar />
          <Switch> 
          <Route path="/rooms/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
          {/* chats */}
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
