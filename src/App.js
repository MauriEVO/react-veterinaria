import React, {Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListasCita from './components/ListaCitas';
import swal from '@sweetalert/with-react'


class App extends Component {
	state = {
		cita: []
	}

	componentDidMount(){
		const citaLS = localStorage.getItem('cita');
		if(citaLS){
			this.setState({
				cita: JSON.parse(citaLS)
			})
		}
	}

	componentDidUpdate(){
		localStorage.setItem('cita', JSON.stringify(this.state.cita))
	}

	crearNuevaCita = (datos) =>{
		
		const cita = [...this.state.cita, datos]
		this.setState({
			cita
		})
	}

	eliminarCita = (id)=>{
		const citasActuales = [...this.state.cita]

		swal({
			title: "Eliminar",
			text: "Deseas Eliminar la cita?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
			
		}).then((willDelete) => {
			swal(`The returned value is: ${id}`);
			if (willDelete) {
				swal("Se Eliminó Correctatamente la Cita.", {
					icon: "success",
				});
				const cita = citasActuales.filter(cita => cita.id !== id)
				/* actualizamos el state */
				this.setState({
					cita
				})
			} else {
				swal("No se Eliminó la Cita");
			}
		})


	}

	render() {
		return (
			<div className="wrapper">
				<Header title="Administrador Pacientes Veterinaria"/>
				<Formulario crearNuevaCita={this.crearNuevaCita}/>
				<div className="container">
					<ListasCita 
						cita={this.state.cita}
						eliminarCita={this.eliminarCita}
						/>
				</div>
			</div>
		);
	}
}
 
export default App;
