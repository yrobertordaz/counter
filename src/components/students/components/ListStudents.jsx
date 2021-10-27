const ListStudents = (props) => {
  return (
    <div>
      {props.loading === true && (
        <ul>
          <li>loading...</li>
        </ul>
      )}
      {props.loading === false && (
        <table>
           <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
            </tr>
          </thead>
          <tbody>
            {props.student.map((st, index) => {
            return(
              <tr key = {index}>
              <th scope="row">{index + 1}</th>
              <td>{st.name}</td>
              <td>{st.age}</td>
              
            </tr> )    
          })}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ListStudents;
