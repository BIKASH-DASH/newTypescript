import React,{Fragment,useState} from 'react';

import './App.css';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITodo  {
  text: string,
  complete: boolean,
  
};

function App() {

  const [value, setValue] = useState<string>('');
  const [todo, setTodo] = useState<ITodo[]>([]);
  const handleSubmit = (e:FormElement):void => {
    e.preventDefault();
    addTodo(value);
    setValue('')

  }

  const addTodo = (text: string):void => {
    const newTodo: ITodo[] = [...todo, { text: text, complete: false }];
    setTodo(newTodo);
  };
  
  const completeTodo = (index: number): void => {
    
    const newTodo: ITodo[] = [...todo];
    newTodo[index].complete = !newTodo[index].complete;
    setTodo(newTodo)
  }

  const removeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todo];
    newTodo[index].complete = false;
    setTodo(newTodo)
  }

  const remove = (index:number):void => {
    const newTodo:ITodo[] = todo.filter((data,indexNum)=> indexNum !==index )
    setTodo(newTodo);
    
  }
  
  
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text"
          onChange={(e)=>setValue(e.target.value)} required />
         <button type="submit">Submit</button>
      </form>
      <section>
        {todo.map((todoSingle:ITodo,index:number) => {
          return (<Fragment>
            <h1 key={index}>{todoSingle.text}</h1>
            <button type="button" onClick={() => completeTodo(index)}>{ (todoSingle.complete===true)?"Incomplete":"complete" }</button>
            <button type="button" onClick={() => removeTodo(index)}>remove</button>
            <button onClick={()=>remove(index)} >&times;</button>
          </Fragment>)
          })}
      </section>
    </Fragment>
  );
}

export default App;
