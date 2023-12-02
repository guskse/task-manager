import {FaCheck, FaEdit, FaTrashAlt} from 'react-icons/fa'

const Task = ({name,date,complete, id, editTask, deleteTask, completeTask}) => {
  return <div  key={id} className={complete ? 'task complete' : 'task'}>
    <span>
      <p><b>Task:</b> {name}</p>
      <p><b>Date:</b> {date}</p>
    </span>
    <span>
      <button><FaCheck onClick={() => completeTask(id)} color={"green"} /></button>
      <button><FaTrashAlt  onClick={() => deleteTask(id)} color={"red"}/></button>
      <button onClick={() => editTask(id)}><FaEdit color={"purple"}/></button>
    </span>
  </div>;
};

export default Task;