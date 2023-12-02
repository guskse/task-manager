import './Alert.css';
import { FaExclamationCircle, FaTimes} from "react-icons/fa";
import { useEffect } from 'react';


const Alert = ({alertContent, alertClass, onCloseAlert}) => {

  //use Effect
  useEffect(() => {
    const int = setTimeout(() => {
      onCloseAlert(); //fecha o box de alerta após 3 segundos
    }, 3000);

    //cleanup function
    return () => {
      clearTimeout(int);
    }
  })

  return (
    <div className={`alert ${alertClass}`}>
      <FaExclamationCircle size={16} className="icon-x"/>
      <span className="msg">{alertContent}</span>
      <div className="close-btn" onClick={onCloseAlert}>
      <FaTimes size={19} className="icon-x"/>
      </div>
    </div>
  )
}

export default Alert