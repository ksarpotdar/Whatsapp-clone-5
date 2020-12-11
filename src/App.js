import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'


function App() {
  return (
    <div className="app">
      <div>Hello</div>
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chats */}
        <Chat />

      </div>
    </div>
  );
}

export default App;
