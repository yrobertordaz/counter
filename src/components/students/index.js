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

  
  return (

    <div className="row">
      <div className="col">
        {/** Cree una funcion dentro del props, ya funciona y lo unico que creo es que era algo tan bobo como incomodo de 
         * ver a la vista
         */}
        <ButtonStudents
         up ={() => {
          let min = 0;
          let age = Math.floor(Math.random() * (100-min))+min;
          
          
          setStudent({
            loading: false, 
            data: 
              [...students.data,
              {name: 'El florero', age: age}]});
              min +=1;
            }
                  
         }
         
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
