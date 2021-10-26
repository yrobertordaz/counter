const ListStudents = (props) => {
  return (
    <div>
      {props.loading === true && (
        <ul>
          <li>loading...</li>
        </ul>
      )}
      {props.loading === false && (
        <ul>
            {props.student.map((st, index) => {
            return(
            <li key = {index}>{st.name}  {st.age} </li>)        
          })}
        </ul>
      )}
    </div>
  );
};
export default ListStudents;
