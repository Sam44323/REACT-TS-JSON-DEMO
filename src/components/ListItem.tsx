import React from "react";

import { ListItemProps } from "../utils/Obj-Interfaces";

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => props.showDetails(props.id)}>Details</button>
    </div>
  );
};

export default ListItem;
