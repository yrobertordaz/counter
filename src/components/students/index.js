import { useState, useEffect } from "react";
import ButtonStudents from "./components/ButtonStudents";
import ListStudents from "./components/ListStudents";
/**
 * Chama tienes que usar el debugger, para que puedas seguir el curso de la app.
 * Mientras no debuggees estas programando a ciegas.
 */
const Students = () => {
  const [students, setStudent] = useState({
    loading: false,
    data: [
      {
        name: "",
        age: 0,
      },
    ],
  });

  //Corrigeme la funcion, dime si la logica esta bien y luego si en el props del componente ButtonsStudents esta
  //hecha la llamada de la funcion y la logica en general
  // Creo que pudieses pensarte una mejor manera de hacerlo, pero no está mal, pero ponle comentarios
  // Estoy seguro que de aqui a 6 meses ves este codigo y no recordarás para que era.
  const ageRandom = () => {
    let min = 0;
    let age = Math.floor(Math.random() * (100 - min)) + min;
    min += 1;
    return age;
  };

  return (
    <div className="row">
      <div className="col">
        {/** No creo que sea buena idea asignar a age una funcion cuando lo que lleva es un valor entero */}
        <ButtonStudents
          up={() =>
            setStudent({
              loading: false,
              data: [
                ...students.data,
                // Aqui va un objeto directamente, y los arreglos usan enteros entre los corchetes.
                /* Por ejemplo si quieres adicionar un elemento a un arreglo de números sería lo siguiente
              let numbers = [1, 2];
              numbers =[...numbers, 3];
              el valor de numbers ahora es [1, 2, 3]
              */
                students.data[{ name: "El florero", age: () => ageRandom }],
              ],
            })
          }
        />
      </div>

      <div className="col">
        <ListStudents loading={students.loading} student={students.data} />
      </div>
    </div>
  );
};
export default Students;
