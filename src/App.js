import React, {Component} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

class App extends Component {
	state = {
		cita: []
	}

	crearNuevaCita = (datos) =>{
		
		const citas = [...this.state.cita, datos]
		this.setState({
			cita: citas
		})

	}

	render() {
		return (
			<div className="wrapper">
				<Header title="Administrar Paccientes Veterinaria"/>
				<Formulario crearNuevaCita={this.crearNuevaCita}/>
			</div>
		);
	}
}
 
export default App;
