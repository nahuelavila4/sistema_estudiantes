const estudiantes = [
	{
		alumno: "Ivan", 
		curso: ["Ingenieria", "Lengua"],
		notas: [7, 6]
	},
	{
		alumno: "Jose",
		curso: ["Historia", "Programacion", "Matematica"],
		notas: [7, 5, 9]
	},
	{
		alumno: "Facundo",
		curso: ["Programacion", "Artes visuales"],
		notas: [5, 7]
	},
	{
		alumno: "Matias",
		curso: ["Geografia", "Artes visuales", "Arte abstracto"],
		notas: [4, 6, 3]
	},
	{
		alumno: "Tomas",
		curso: [],
		notas: []
	},
	{
		alumno: "Eugenia",
		curso: ["Ingenieria", "Mecanica"],
		notas: [9, 8]
	},
	{
		alumno: "Maria",
		curso: [],
		notas: []
	},
]

// Se puede asignar una funcion como elemento a un array

function llamar_entrevista(alum){
	document.write("llamando a "+alum+" a entrevista<br>");
}

for(estudiante of estudiantes){
	let cant = estudiante["curso"].length;
	if(cant == 0 || estudiante["curso"] == "Ingenieria"){
		document.write("<br>El estudiante "+ estudiante["alumno"]+" no cursa ninguna materia<br>");
		llamar_entrevista(estudiante["alumno"]);
	}else{
	document.write("El estudiante "+estudiante["alumno"]+" cursa las materias "+ estudiante["curso"]+"<br>");
	}
}

document.write("<br>Los siguientes estudiantes cursan Ingenieria<br>");
for(estudiante of estudiantes){
	for (curs of estudiante["curso"]){
		if(curs == "Ingenieria"){
			llamar_entrevista(estudiante["alumno"]);
		}
	}
}

// Se puede hacer for anidado con for in y for of
// sacar promedio de notas

document.write("<br>Notas de los alumnos<br>");

function revision_notas(e){
	let prom;
	let aux = 0;
	if(e["notas"].length == 0){
		document.write(`El alumno ${e["alumno"]} no tiene promedio porque no cursa ninguna materia<br>`);
		return;
	}
	for (not of e["notas"]){
		aux = aux + parseInt(not);
	}
	prom = aux / (e["notas"].length);
	let redondeo = Math.round(prom);
	if(redondeo < 6){
		document.write(`El alumno ${e["alumno"]} ha desaprobado con un promedio de ${redondeo}<br>`);
	} 
	else{
	document.write(`El promedio de nota del alumno ${e["alumno"]} es ${redondeo}<br>`);
	}
}

for (est of estudiantes){
	revision_notas(est);
}
