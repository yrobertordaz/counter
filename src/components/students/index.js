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
        name: "El florero",
        age: 0,
      },
    ],
  });

 /* const ageIncrement = () => {
    // Cambiar la forma de actualizar el estado, recuerda lo del ...
    students.data.age = Math.random * 10;
  };*///Alejandro, cambie el nombre de la funcion ageIncrement a add
  const add = () => {
    // En los componentes funcionales no se utiliza this, Math está mal escrito
    // Con esto vas a perder los demás elementos que tengas en students.data, revisa la forma en que adicionas el nuevo student, usa el ...
    setStudent({loading:true, data:[{name: '', age: this.Maht.random()}]});
  }

  // Codigo para eliminar estudiante
  for(let i = 0; i < students.data.length; i++)
  {
    /**
     * Esto no está bien, declaras la constante arreglo para luego destruirla en la proxima iteración.
     * No olvides que estás dentro de una función.
     */
     const arreglo  = students.data[i-1];
  }
  
  

  return (
    <div className="row">
      <div className="col">
        <ButtonStudents
          up={() => add}
         {/** En los componentes funcionales no se utiliza this */}
          down={this.arreglo}
        />
      </div>
      <div className="col">
        <ListStudents loading={students.loading} student={students.data} />
      </div>
    </div>
  );
};
export default Students;
