import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/*Cách 1*/}
      {/* <Welcome props={{name: 'Teo', age: '17'}}/> */}

      {/*Cách 2 hoặc cách 3*/}
      <Welcome name="Teo" age="17"/>
    </div>
  );
}

export default App;
