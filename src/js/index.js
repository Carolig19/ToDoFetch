import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

export default function ToDo() {
	const [Tarea, SetTarea] = useState("");
	const [Lista, SetLista] = useState([]);

	return (
		<div className="container">
			<div className="titulo">
				<h1>To Do List</h1>
			</div>
			<input
				onChange={(e) => SetTarea(e.target.value)}
				value={Tarea}
				placeholder="Nueva Tarea"></input>
			<button onClick={() => SetLista([...Lista, Tarea])}>Add</button>

			<div>
				{Lista.map((Tarea, i) => {
					return (
						<p key={i}>
							{Tarea}
							<button
								className="delete"
								onClick={() => {
									SetLista(
										Lista.filter(
											(Lista, indice) => indice !== i
										)
									);
								}}></button>
						</p>
					);
				})}
			</div>
		</div>
	);
}

ReactDOM.render(<ToDo />, document.querySelector("#app"));
