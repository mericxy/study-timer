import React from "react";
import Button from "./Button";

class Form extends React.Component {
  render() {
    return (
      <form className="flex flex-col bg-blue-400 rounded-lg shadow-md p-3 lg:flex-row lg:flex-wrap lg:justify-around lg:text-4xl lg:p-6 lg:box-border">
        <div className="flex flex-col w-full mb-4 lg:w-[calc(60%-12px)]">
            <label htmlFor="tarefa" className="mb-2 text-xl lg:text-3xl">
                Adicione um novo estudo
            </label>
            <input 
            className="w-full px-3 py-2 box-border border-0 rounded bg-slate-600 shadow-inner placeholder-gray-400 lg:h-full lg:text-2xl"
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
                 />
        </div>
        <div className="flex flex-col w-full mb-4 lg:w-2/5">
            <label 
            htmlFor="tempo"
            className="mb-2 text-xl lg:text-3xl">
                tempo
            </label>
            <input 
            className="w-full px-3 py-2 box-border border-0 rounded bg-slate-600 shadow-inner placeholder-gray-400 lg:h-full lg:text-2xl"
            type="time"
            step={1}
            name="tempo"
            id="tempo"
            min={"00:00:00"}
            max={"01:30:00"}
            required
             />
        </div>
        <Button />
      </form>
    );
  }
}
export default Form;