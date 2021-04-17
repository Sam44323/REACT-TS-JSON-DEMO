import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

const ItemDetail: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  useEffect(() => {
    (async () => {
      axios.get(
        `https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`
      );
    })();
  }, [props]);

  return <h1>{props.match.params.id}</h1>;
};

export default ItemDetail;
