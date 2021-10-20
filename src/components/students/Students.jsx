 import {useState, useEffect} from 'react';
 
 import ButtonStudents from './ButtonStudents';
 import ListStudents from './ListStudents';


 
 const Students =  () =>{
     
    
    const [students, setStudent] = useState({
        loading: false,
        data: [{
            name: 'El florero',
            age: 0,
        }]
    });


    

    const ageIncrement = () => {
        students.data.age = Math.random *10;
    }
    
    return(
        
        <div className = "row">
            <div className = "col">
                <ButtonStudents up={setStudent
                 ({  loading:false,
                    data:[...students.data, students.data[{name: 'El florero', age: ageIncrement,}]],
                }) }
                            donw={setStudent
                    ({loading:false,
                        data:[...students.data, students.data.length-1]
                    })} />
            </div>
            <div className = "col">
                <ListStudents loading = {students.loading} student = {students.data}/> 
                           </div>
        </div>
    );
}
export default Students;
