import { Fragment, useState } from "react";

/* {items: [], heading : string*/

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook, allows us to tap into built in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // empty brackets mean wrap in Fragment
  // assesing true and x returns x, false and x returns false
  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
