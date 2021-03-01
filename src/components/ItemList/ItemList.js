import { connect } from "react-redux";
import SimpleCard from "../Cards/Cards";

function ItemList({itemCounter, items}) {
  return (
      <SimpleCard cards={items} itemCounter={itemCounter} />
  );
}

export default connect((state) => ({
  itemCounter: state.counter,
}))(ItemList);