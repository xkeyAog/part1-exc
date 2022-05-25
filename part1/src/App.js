import './App.css';
import Mensaje from './message'

const Descripcion = () => {
  return <p>descripcion del mundo</p>
}
const  App = () => {
  return (
    <div className="App">
      <Mensaje color="green" message="hola desde propiedades"/>
      <Descripcion/>
    </div>
  );
}

export default App;
