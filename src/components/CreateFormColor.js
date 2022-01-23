import {useState} from "react";
import converter from "../utility/converter";
import PropTypes from 'prop-types';

function CreateFormColor(props) {
  const [valueData, setValueData] = useState('');
  const [controlSwitch, setControlSwitch] = useState(false);
  let rez = '';

  const handlerValue = evt => {
    evt.preventDefault();
    const {value} = evt.target;

    if (/^#[a-fA-F0-9]{6}$/.test(value)) {
      setControlSwitch(true);
      rez = value;
    } else if ((value.length === 7 && !(/^#[a-fA-F0-9]{6}$/.test(value))) || value.length > 7) {
      setControlSwitch(false);
      rez = 'ошибка!';
    } else {
      setControlSwitch(false);
      rez = '';
    }
    setValueData(rez);
    props.checkValue(rez);
  }

  const checkKey = evt => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
    }
  }

  return (

    <div className={"form-container"}>
      <form className={"color-form"}>
        <label>
          <span className="visually-hidden">Поле ввода цвета</span>
        <input className={"enter-show-color color-enter"}
               name={"color"}
               onChange={handlerValue}
               onKeyDown={checkKey}/>
          </label>
      </form>

      <div className={"enter-show-color color-rgb"}
           style={controlSwitch === true ? {backgroundColor: valueData} : {backgroundColor: 'white'}}><span
        className={'text-color'}>{controlSwitch === true ? converter(valueData) : valueData}</span>

      </div>
    </div>
  )
}

CreateFormColor.propTypes = {
    checkValue: PropTypes.func.isRequired
}

CreateFormColor.defaultProps = {
    checkValue: () => {}
}

export default CreateFormColor;

