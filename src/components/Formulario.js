import React, {Component} from 'react';
import uuid from 'uuid';
import swal from '@sweetalert/with-react'

//import cssSweetAlert from 'sweetalert/dist/sweetalert.css';


/* el estado inicial para empezar con los campos limpios */
const stateInicial = {
	citas:{
		nombre: '',
		mascota:'',
		fecha:'',
		hora:'',
		sintomas:''
	}
}

class Formulario extends Component {
	
	/* colocamos el estado inicial para comenzar con el procesos del llenado de datos */ 
	
	state = { ...stateInicial }

	showAlertError = () =>{
		swal({
			title: "Error",
			text: "Todos los campos son obligatorios, Gracias!",
			icon: "error",
			buttons: {
				cancel: "Ok",
			}
		})
	}

	

	/* obtenemos el nomre del inpiut y su valor para llenar los campos*/ 
	handleChange = (e) =>{
		this.setState({
			citas: {
				...this.state.citas,
				[e.target.name]: e.target.value
			}
		})
	}


	/* enviamos los datos escritos del formulario */ 
	handleSubmit = (e)=>{
		e.preventDefault()

		const {nombre, mascota, hora, fecha, sintomas} = this.state.citas

		if(nombre === '' || mascota ==='' || hora === ''|| fecha === '' || sintomas === ''){
		
			this.showAlertError()
			return;
		}



		/* creamos una constante donde pasamos el state de las citas y le agregamos un ID*/
		const nuevaCita = {...this.state.citas}
		nuevaCita.id = uuid()

		/* aquí mandamos el state de las citas con el id qeu se genera arriba UUID */
		this.props.crearNuevaCita(nuevaCita)

		/* aquí volvemos a limpiar el formulario despues de enviar los datos en la function crear
			nuevacita
		*/
		this.setState({...stateInicial})

	}

	/*AGREGAR DATOS AL APP*/

	render() {

		return (
			<div className="container_formulario">
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<label className="label has-text-white">Nombre del dueño</label>
						<div className="control">
							<input 
								className="input" 
								type="text" 
								placeholder="Nombre del dueño*" 
								name="nombre"
								onChange={this.handleChange}
								value={this.state.citas.nombre}
								/>
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Nombre de la mascota</label>
						<div className="control">
							<input 
								className="input" 
								type="text" 
								placeholder="Nombre de la mascota*"
								name="mascota"
								onChange={this.handleChange}
								value={this.state.citas.mascota}
								/>
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">fecha</label>
						<div className="control">
							<input 
								className="input" 
								type="date" 
								placeholder=""
								name="fecha"
								onChange={this.handleChange}
								value={this.state.citas.fecha}
								/>
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Hora</label>
						<div className="control">
							<input 
								className="input" 
								type="time" 
								placeholder="Hora"
								name="hora"
								onChange={this.handleChange}
								value={this.state.citas.hora}
								/>
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Sintomas</label>
						<div className="control">
							<textarea 
								className="textarea" 
								type="time" 
								placeholder="Sintomas"
								name="sintomas"
								onChange={this.handleChange}
								value={this.state.citas.sintomas}
								>
							</textarea>
						</div>
					</div>
					<div className="field">
						<div className="buttons is-centered">
							<button type="submit" className="button is-primary">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
 
export default Formulario;