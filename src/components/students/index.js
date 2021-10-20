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

  const ageIncrement = () => {
    // Cambiar la forma de actualizar el estado, recuerda lo del ...
    students.data.age = Math.random * 10;
  };

  // Codigo para eliminar estudiante

  return (
    <div className="row">
      <div className="col">
        <span> Yansel</span>
        <ButtonStudents
          up={() =>
            setStudent({
              loading: false,
              data: [
                ...students.data,
                // Esta parte esta mal porque tienes que pasar el objeto directamente
                students.data[{ name: "El florero", age: ageIncrement }],
              ],
            })
          }
          down={() =>
            setStudent({
              loading: false,
              data: [...students.data, students.data.length - 1],
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
