import React from "react";

function FormField({label, type, name ,value, onChange}){
    return(    
        <div>
            <label>
             {label}
              <input name={name} onChange={onChange} value={value}
                type={type}
               />
            </label>
        </div>
        
    )
}

export default FormField;