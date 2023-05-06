import { Button, TextField } from "@mui/material"
import "./style.css"
import { useState } from "react"
import BackspaceIcon from '@mui/icons-material/Backspace';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  function handleClick() {
    if(!textTarefa){
      alert('Tem que escrever alguma coisa')
    }else{setListTarefa((old) => [...old, {id: Date.now(), title: textTarefa, indFinish: false}]);
    setTextTarefa("")};
  }

  function handleDelete() {
    setListTarefa([])
  }

  function handleDeleteTask(idTask){
    setListTarefa(listTarefa.filter(el => el.id !== idTask))
  }

  function handleFinishedTask(idTask){
    setListTarefa(listTarefa.map((task) => task.id === idTask ? {...task, indFinish: !task.indFinish} : task))
  }

  return (
    <>
      <div className="tudinho">
        <form className="form-container">
          <TextField value={textTarefa} id="standard-basic" label="Lista" variant="standard" placeholder="Digite o que vc quiser" onChange={({ target }) => setTextTarefa(target.value)} />
          <Button variant="contained" onClick={handleClick}>Add</Button>
          <Button variant="contained" color="secondary" onClick={handleDelete}>Deletaa</Button>
          {console.log(listTarefa)}
        </form>
      </div>

      <div className="container-task">
        <div className="resposta">
          {
            listTarefa.map((tarefa) => (
            <div key={tarefa.id}>
              <div className="task-single">
                <div  className="task">
                <Checkbox onClick={() => handleFinishedTask(tarefa.id)}/>

                <span style = {{color: tarefa.indFinish ? 'red' : ''}}>{tarefa.title}</span>
                
                </div>
                <BackspaceIcon onClick={ () => handleDeleteTask(tarefa.id)}
                className="icon-delete"/>
              </div>
                
              <div className="divisao"></div>
            </div>
            ))

          }
        </div>
      </div>
    </>
  )
}

export default App
