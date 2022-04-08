import React from 'react' 
import "./btn.css"
import Data from './Data'


function AddButton(props){

    const el = {
        text: "new element "
    }
    
    function NewElement(){
      Data.push(el)
      console.log(Data)
    }
    
    return(
        <div className='add-btn'>
            <button onClick={NewElement}  className='btn btn-success add-btn'>+Add</button>
             <button onClick={()=>console.log('deleted')}  className='btn btn-danger add-btn'>Delete</button>
          
        </div>
        
    )
}


export default AddButton