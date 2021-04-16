import React from "react";

import { ListItemProps } from "../utils/Obj-Interfaces";

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <div className="shadow-sm  py-4 bg-gray-200 mb-4 rounded">
      <h1 className="text-indigo-500 text-xl uppercase text-center font-bold border-b-2 border-gray-300">
        {props.title}
      </h1>
      <div
        className="bg-gray-400 text-center mt-4 cursor-pointer w-1/4 mx-auto hover:bg-gray-700 hover:text-white p-1 rounded-sm transition ease-out duration:300 shadow-lg"
        onClick={() => props.showDetails(props.id)}
      >
        Details
      </div>
    </div>
  );
};

export default ListItem;
