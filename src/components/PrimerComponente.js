import React, {useState} from 'react'

export const PrimerComponente = () => {

    //let nombre = "Sebastian";
    let web = "SebasWeb.com";

    const [nombre, setNombre] = useState("Sebas")

    let cursos =[
        "Master en Java",
        "Master en PHP",
        "Master en React",
        "Master en HTML"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
        <h1>Mi primer Componente</h1>
        <p>Este es un texto de mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el Nombre'/>

        <button onClick={e => {
            console.log("El valor guardado en tu estado es:", nombre);
        }}>Mostrar valor del estado</button>

        <button onClick={e => cambiarNombre("Sebastian Choque")}>
            Cambiar Nombre
        </button>

        <h2>Cursos:</h2>
        <ul>
            {
                cursos.map((cursos, indice) => {
                    return (<li key={indice}> 
                        {cursos}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
