import { useState } from 'react';
import './App.css';

function App() {

    const [data, setdata] = useState("");
    const [item, setitem] = useState([]);
    // const [fade, setfade] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        if(data === ""){
            alert('Please Enter Any Input')
        }else{
            setitem([...item, data])
            setdata("")
        }
    }

    const deleteItem = (id) => {
        console.log(id)
        const updatedItems = item.filter((obj, idx) => {
            return(
                idx !== id
            )
        })
        setitem(updatedItems)
    }

    let list = document.querySelector(".list")
    const fadeFnc = (id) => {
        list.style.textDecoration = "line-through";
        list.style.filter = "blur(0.5px)";
        list.style.opacity = 0.5;
    }

  return (
      <div>
            <div className="main">
                <div className="header">
                    <h1>ToDo List</h1>
                    <form action="">
                    <input type="text" placeholder='Add New Task ...' value={data} onChange={e => setdata(e.target.value)}/>
                    <button  typeof='submit' onClick={submitHandler}>+</button>
                    </form>
                </div> 
                <div className="listBox">
                    {
                        item.map((elem, ind) => {
                            return(
                                <div className="list" key={ind}> 
                                    <div className="text">{elem}</div>    
                                    <div className="btns">
                                        <button className="tickBtn" onClick={() => fadeFnc(ind)}>OK</button>
                                        <button className="delBtn" onClick={() => deleteItem(ind)}>DEL</button>
                                    </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
      </div>
  );
}
// onClick={() => okItem(ind)}
export default App;
