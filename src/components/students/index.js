import { useState, useEffect } from "react";
import ButtonStudents from "./components/ButtonStudents";
import ListStudents from "./components/ListStudents";

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
    setStudent({loading:true, data:[{name: '', age: this.Maht.random()}]});
  }

  // Codigo para eliminar estudiante
  for(let i = 0; i < students.data.length; i++)
  {
     const arreglo  = students.data[i-1];
  }
  
  

  return (
    <div className="row">
      <div className="col">
        <span> Yansel</span>
        <ButtonStudents
          up={() => add}
         
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
