import React from 'react';
import Cita from './Cita';

const ListasCita = ({cita, eliminarCita}) => (
	<div className="wrapper_items">
		<h2>Administrar Citas</h2>
		<div className="wrapper_cnt">
			<div className="wrapper_box">
				{cita.map(cita => ( 
					<Cita 
						key={cita.id}
						cita={cita}
						eliminarCita={eliminarCita}
						/>
				))}
			</div>
		</div>
	</div>
);
 
export default ListasCita;