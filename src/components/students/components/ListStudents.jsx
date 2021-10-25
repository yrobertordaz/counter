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
            {props.student.map((st) => {
            return(
            <li key = {st.id}>{st.name}</li>,
            <li key = {st.id}>{st.age}</li>)        
          })}
        </ul>
      )}
    </div>
  );
};
export default ListStudents;
