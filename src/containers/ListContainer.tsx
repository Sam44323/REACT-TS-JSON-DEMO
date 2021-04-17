import React, { useState, useEffect, memo, useCallback } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import ListItem from "../components/ListItem";
import { ItemStateType } from "../utils/Obj-Interfaces";
import Loading from "../components/Loading";

const ListContainer: React.FC<RouteComponentProps> = memo((props) => {
  const [items, setItems] = React.useState<ItemStateType[]>([
    { id: 0, title: "demo", completed: false, userId: 0 },
  ]);
  const [hasValue, setHasValue] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=15"
        );
        if (response.data) {
          setItems(response.data);
          setHasValue(true);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  const detailsHandler = useCallback(
    (id: number) => {
      props.history.push(`/details/${id}`);
    },
    [props]
  );

  return (
    <React.Fragment>
      {loading && <Loading />}
      <div className="w-3/5 m-auto mt-10">
        {hasValue
          ? items.map((item) => (
              <ListItem
                id={item.id}
                title={item.title}
                key={item.id}
                showDetails={detailsHandler}
              />
            ))
          : null}
      </div>
    </React.Fragment>
  );
});

export default ListContainer;
