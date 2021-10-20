const List = (props) =>{
    return(
        <div>
            {props.loading === true &&
                (
                    <ul>
                        <li>loading...</li>
                    </ul>
                )}
            {props.loading === false && (
                <ul>
                    {
                        props.data.map((student) =>{
                            return <li key = {student}>
                                   {student} 
                            </li>;
                        })
                    }
                </ul>
            )}    
        </div>
    );
}
export default List;