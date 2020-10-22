import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EmployeeInfo = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect( () => {
       axios.get("http://dummy.restapiexample.com/api/v1/employees" ,
    //    {
    //        headers:{
    //         'Access-Control-Allow-Origin':'*'
    //        }
    //    }
       )
        .then(res => res)
        .then( 
            (res) => { 
                setIsLoaded(true);
                console.log(res.data.data);
                setItems(res.data.data)
            },  
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )   
    },[]);

    if(error){
            return <div> Oops... something has happened... {error.message}</div>
        }
        else if(!isLoaded){
            return <div> Please wait... we are loading your information</div>
        }else{
            return(
                <ul>
                    {items.map( (hi) => (
                        <li key={hi.id}> {hi.employee_name}</li>
                    ))}
                </ul>
        )
    }
}

export default EmployeeInfo;
