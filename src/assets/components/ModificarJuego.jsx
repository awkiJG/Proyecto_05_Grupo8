import { useState } from "react";

export const ModificarJuego = ({ juego, funcion_modificar }) => {

    const [juegoModificado, setJuegoModificado] = useState({
        id: '',
        nombre: '',
        precio: 0,
        tipo: '',
        estado: true,
    });

    const cambiarNombre = (event) => { setJuegoModificado({ ...juegoModificado, nombre: event.target.value }); }
    const cambiarPrecio = (event) => { setJuegoModificado({ ...juegoModificado, precio: event.target.value }); }
    const cambiarTipo = (event) => { setJuegoModificado({ ...juegoModificado, tipo: event.target.value }); }

    const juego_modificado = {
        id: juego.id,
        nombre: juegoModificado.nombre === "" ? juego.nombre : juegoModificado.nombre,
        precio: juegoModificado.precio === 0 ? juego.precio : juegoModificado.precio,
        tipo: juegoModificado.tipo === "" ? juego.tipo : juegoModificado.tipo,
        estado: juegoModificado.estado === "" ? juego.estado : juegoModificado.estado,
        modificado: true
    }

    return (
        <>
            <div>
                ID = {juego.id}
                Nombre = <input type="text" placeholder={juego.nombre} onChange={cambiarNombre} />
                Precio = <input type="number" placeholder={juego.precio} onChange={cambiarPrecio} />
                Tipo = <input type="text" placeholder={juego.tipo} onChange={cambiarTipo} />

                <button onClick={() => funcion_modificar(juego_modificado)}>Guardar Cambios</button>
            </div>
        </>
    )
}
