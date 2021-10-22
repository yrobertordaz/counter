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
          {/** La variable se llama student no data, por eso props.data = undefined */}
          {props.student.map((student) => {
            return <li key={student}>{student}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default List;
