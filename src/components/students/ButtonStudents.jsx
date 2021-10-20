 const ButtonStudents = (props)=>{
    return(
        <div>
            <div>
                <button className = "btn" onClick = {props.up}>
                    up
                </button>                
            </div>
            <div>
                <button className = "btn" onClick = {props.down}>
                    down    
                </button>                
            </div>
        </div>
    );
} 

export default ButtonStudents;