import React from 'react';

const Cita = ({cita, eliminarCita}) => {
	return(
		<div className="citas_item">
			<div className="nombre_jefe">
				<p><strong>Nombre del Dueño: </strong>{cita.nombre}</p>
			</div>
			<div className="nombre_mascota">
				<p><strong>NOmbre Mascota: </strong>{cita.mascota}</p>
			</div>
			<div className="hora">
				<p><strong>Hora: </strong>{cita.hora}</p>
			</div>
			<div className="fecha">
				<p><strong>Fecha: </strong>{cita.fecha}</p>
			</div>
			<div className="fecha">
				<p><strong>Sintomas: </strong>{cita.sintomas}</p>
			</div>
			<div className="btn">
				<button onClick={()=> eliminarCita(cita.id)} className="button is-danger">Danger</button>
			</div>
		</div>
	);
}
 
export default Cita;