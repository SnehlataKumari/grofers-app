import NavBar from "../../components/NavBar/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import SimpleCard from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import {allItems} from "../../components/AlItems/AllItems";

export default function OrderCatalogue() {

  const [selectedCategory, setSelectedCategory] = useState();

  const [filteredItems, setFilteredItems] = useState(allItems);
  let history = useHistory();

  useEffect(() => {

    if (selectedCategory) {
      setFilteredItems(allItems.filter(
        (item) => item.category === selectedCategory
      ));
    } else {
      setFilteredItems(allItems);
    }
  }, [selectedCategory]);

  const toggleCategory = (category) => {
    selectedCategory === category
      ? setSelectedCategory(null)
      : setSelectedCategory(category); 
  }
  
 
  return (
    <>
      <NavBar history={history} title={"Order Catalogue"} />
      <CssBaseline />
      <Container maxWidth="lg">
        <p style={{ textAlign: "center", color: "#5d6370" }}>
          Shop By Category
        </p>

        <div>
          <SimpleCard
            cards={[
              {
                category: "fruits",
                onSelectCategory: () => toggleCategory("fruits"),
              },
              {
                category: "vegetables",
                onSelectCategory: () => toggleCategory("vegetables"),
              },
              {
                category: "beverages",
                onSelectCategory: () => toggleCategory("beverages"),
              },
            ]}
          />
        </div>
      </Container>
      <ItemList items={filteredItems}/>
    </>
  );
}
