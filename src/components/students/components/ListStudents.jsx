const List = (props) => {
  return (
    <div>
      {props.loading === true && (
        <ul>
          <li>loading...</li>
        </ul>
      )}
      {props.loading === false && (
        <ul>
          {/** Recuerda que student es un arreglo de objetos, así que si quieres mostrar en el mostrar algo en el DOM tienes que referirte
           * de la siguiente manera student.name o student.age.
           */}
          {props.student.map((student) => {
            // Esta linea está mal por lo que explico arriba, debes mostrar en el DOM valores escalares. student.name o student.age
            return <li key={student}>{student}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default List;
