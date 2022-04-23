import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Typography } from "@material-ui/core";

function CategoryBox() {
  const [food, setFood] = useState([
    "Food and Restaurants",
    "Shopping",
    "Spa and Relaxation",
    "Bar and Clubs",
    "Cafe",
    "Entertainment and Amusement Parks",
    "Historical and Cultural",
  ]);

  return (
    <div style={{marginTop: 1.5 + 'em'}}>
		<Typography variant="h5" component="div" gutterBottom >
        Category
      </Typography>
      <Multiselect
        isObject={false}
        // onRemove={(event) => {
        //   console.log(event);
        // }}
        // onSelect={(event) => {
        //   console.log(event);
        // }}
        options={food}
        showCheckbox
      />
    </div>
  );
}

export default CategoryBox;
