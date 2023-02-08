import React from 'react'


export default function ErrorMessage({errors, name}){
    return <div>
        {errors[name] && errors[name].type === "required" && "El campo es requerido"}
        {errors[name] && errors[name].type === "minLenght" && "El campo tiene que tener un mínimo de 3 carácteres"}
        {errors[name] && errors[name].type === "min" && "El campo tiene que tener un mínimo 18 años"}
    </div>
}
