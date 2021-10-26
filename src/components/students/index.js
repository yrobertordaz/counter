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
        name: '',
        age: 0,
      },
    ],
  });

  
  //Corrigeme la funcion, dime si la logica esta bien y luego si en el props del componente ButtonsStudents esta
  //hecha la llamada de la funcion y la logica en general
  const ageRandom = () =>{
    let min = 0;
    let age = Math.floor(Math.random() * (100-min))+min;
    min +=1;
    return age;
  }

  return (

    <div className="row">
      <div className="col">
        <ButtonStudents
         up ={() => setStudent({
            loading: false, 
            data: 
              [...students.data,
              [{name: 'El florero', age: ageRandom}]]})}
         />
      </div>

      <div className="col">
        <ListStudents
          loading={students.loading} 
          student={students.data} />
      </div>
    </div>
  );
};
export default Students;
