import './App.css';
import Country from './components/Country'

function App() {
  return (
    <div className="App">
      <Country 
        flag='https://image.shutterstock.com/image-illustration/illustration-flag-colombia-260nw-124331698.jpg'
        name='Colombia'
        population={1545468}
        region='America'
        capital='Bogota'
      />
    </div>
  );
}

export default App;
