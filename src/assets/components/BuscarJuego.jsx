import { useState, useMemo } from "react";

export const BuscarJuego = ({ juegos }) => {
    const [ingreso, setIngreso] = useState("");
    const [busqueda, setBusqueda] = useState(false);

    const ingresar = (e) => {
        setBusqueda(false);
        setIngreso(parseInt(e.target.value))
    }

   const handleClick = () => {
    setBusqueda(true)
    }

    const resultado = useMemo(() => {
        const newArreglo = juegos.filter((producto) => producto.id === ingreso)
        return newArreglo;
    }, [ingreso, juegos]);

    return (
        <>
            <h1>Buscar Juego por ID</h1>
            <input
                type="number"
                placeholder="Buscar juego por ID"
                onChange={ingresar}
            />
            <button onClick={handleClick}>Buscar</button>
            {busqueda && resultado.length > 0 ?
                <div>
                ID: {resultado[0].id} - 
                Nombre: {resultado[0].nombre} - 
                Precio: ${resultado[0].precio} - 
                Tipo: {resultado[0].tipo}
            </div>
            : (busqueda && <h2>No se encontró ningún juego con ese ID</h2>)
            }
        </>
    )
}
