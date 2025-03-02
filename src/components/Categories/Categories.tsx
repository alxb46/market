import React, { useEffect, useState } from "react";
import {Product} from "../../Models/Product";
import {Category} from "../../Models/Category";

function Categories( props: {chooseCategory: (category: Category) => void}) {

    const [categories, setCategories] = useState<Category[]>([
        {
            key: "all",
            name: "all"
        },
        {
            key: "chairs",
            name: "chairs"
        },
        {
            key: "tables",
            name: "tables"
        },
        {
            key: "sofa",
            name: "sofa"
        },
        {
            key: "light",
            name: "light"
        }
    ]);

    return(
        <div className="categories">
            {categories.map((category, index) => (
                <div key={category.key} onClick={()=> props.chooseCategory(category)} >{category.name}</div>
            ))}
        </div>
    )
}

export default Categories;