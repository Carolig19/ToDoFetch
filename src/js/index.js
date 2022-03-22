import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

export default function ToDo() {
	const [Tarea, SetTarea] = useState([]);

	useEffect = (() => {
		var raw = "";
		var requestOptions = {
			method: "GET",
			body: raw,
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/Carolig19",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				SetTarea(result);
			})
			.catch((error) => console.log("error", error));
	},[]);
	return (
		<div className="container">
			<div className="titulo">
				<h1>To Do List</h1>
			</div>
		<div>{Tarea?map=((e,i)=>{
			return <li key={i}>{e.label}</li>
		})
		</div>
		</div>
	);
}

ReactDOM.render(<ToDo />, document.querySelector("#app"));
