import CreateFormColor from "./CreateFormColor";
import {useState} from "react";

function ContainerFormColor() {

  const [value, setValue] = useState('')

  const handleCheck = checkingValue => {
    setValue(checkingValue);
  }

  return (

    <div className={"container"}
         style={value === "ошибка!" || value === "" ? {backgroundColor: 'white'} : {backgroundColor: value}}>
      <CreateFormColor checkValue={handleCheck}/>
    </div>
  );
}

export default ContainerFormColor;
