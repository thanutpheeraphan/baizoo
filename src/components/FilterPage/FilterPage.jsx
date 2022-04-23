import React from "react";
import CategoryBox from "../CategoryBox/CategoryBox";
import Filter from '../Filter/Filter'
import ScrollBox from "../ScrollableBox/ScrollBox";

function FilterPage(){
	return (
		<div style={{padding: 2.0 + 'em'}} >
			<Filter/>
			<ScrollBox/>
			<CategoryBox/>
		</div>
	);
	
}

export default FilterPage;