import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Typography } from "@material-ui/core";

function CategoryBox(props) {
  const options = [
    "Food",
    "Relaxtion",
    "Zoo",
    "Shopping",
    "Bar",
    "Cafe",
    "Historical",
  ];

  const [food, setFood] = useState([]);

  const handleChange = (event) => {
    // setValue(event);
	props.getCategory(event);
  };

  return (
    <div style={{ marginTop: 1.5 + "em" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Category
      </Typography>
      <Multiselect
        isObject={false}
        // onRemove={(event) => {
        //   console.log(event);
        // }}
        onSelect={(event) => {
        //   console.log(event);
		  setFood(event);
		  handleChange(event);
        }}
        options={options}
        showCheckbox
      />
    </div>
  );
}

export default CategoryBox;
