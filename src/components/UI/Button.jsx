import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-green-400 text-white duration-500 px-6 py-2 mx-4 hover:bg-green-500 rounded">
      {props.children}
    </button>
  );
};

export default Button;
