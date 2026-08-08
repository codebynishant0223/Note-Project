import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {

  const [Note, setNote] = useState("");
  const [Detail, setDetail] = useState("");
  const [Task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...Task];

    copyTask.push({ Note, Detail });

    setTask(copyTask);

    setNote('')
    setDetail('')
  };

  const deleteTask = (idx) =>{
    const copyTask = [...Task];
    copyTask.splice(idx, 1);
    setTask(copyTask)
  }

  return (
    <div className=" lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col w-1/2 rounded justify-center lg:w-1/2 h-full"
      >
        <h1 className="text-5xl flex justify-center mt-4">Add Note</h1>

        <input
          className="border-2 m-3 p-5 rounded-2xl outline-none"
          type="text"
          placeholder="Enter Note Heading"
          value={Note}
          onChange={(e) =>{
            setNote(e.target.value);
          }}
        />

        <textarea
          className="border-2 m-3 p-5 rounded-2xl outline-none h-50"
          placeholder="Write Note"
          value={Detail}
          onChange={(e) =>{
            setDetail(e.target.value);
          }}
        ></textarea>

        <button className="border-2 m-3 p-5 rounded-2xl bg-black text-white outline-none active:scale-90 cursor-pointer">
          Submit note
        </button>
      </form>

      <div className="flex flex-col p-10 w-1/2 bg-amber-50 gap-5 ">
        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 h-[95%] overflow-auto">
          {Task.map((elem,idx) => {
            return (<div key={idx} className="relative h-50 w-50 rounded-2x p-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
             <h3 onClick={(e) =>{
                deleteTask(e);
             }} className="absolute top-5 right-6 bg-red-600 rounded-full text-xs cursor-pointer active:scale-90  "><X size={16} strockewidth={2.5}/></h3>
              <h3 className="font-bold text-xl leading-tight overflow-auto">{elem.Note}</h3>
              <p className="mt-2 leading-tight font-medium">{elem.Detail}</p>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
