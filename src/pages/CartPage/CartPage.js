import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SpanningTable from "../../components/SpanningTable/SpanningTable";
import {allItems} from "../../components/AlItems/AllItems";

export default function Cart () {
  let history = useHistory();
  return (
    <>
      <NavBar history={history} title={"Cart"} />
      <SpanningTable allItems={allItems} />
    </>
  );
}