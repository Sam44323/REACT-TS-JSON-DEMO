import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

import { ItemStateType } from "../utils/Obj-Interfaces";
import Loading from "../components/Loading";

const ItemDetail: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [data, setData] = React.useState<ItemStateType>({
    id: 0,
    title: "demo",
    completed: false,
    userId: 0,
  });
  const [hasValue, sethasValue] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`
        );
        if (response.data) {
          setData(response.data);
          sethasValue(true);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [props]);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {hasValue && (
        <div className="text-center mt-5 bg-gray-500 max-w-lg mx-auto py-4 rounded-lg shadow-lg">
          <h1 className="border-b-4 border-gray-400 text-blue-300 text-3xl pb-1 uppercase">
            Details
          </h1>
          <div className="bg-gray-400 text-gray-200">
            <h1 className="text-lg capitalize">{data.title}</h1>
            <p className="bg-gray-900 max-w-sm mx-auto">user: {data.userId}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ItemDetail;
