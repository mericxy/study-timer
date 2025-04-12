import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className='self-center bg-sky-300 rounded-lg shadow-md text-gray-800 cursor-pointer text-xl p-4 w-[150px] active:bg-sky-400 active:shadow-inner lg:col-span-2 lg:justify-self-center lg:w-[200px] lg:text-4xl'>Botão</button>
    );
  }
}
export default Button;
