import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import {Product} from "./Models/Product";
import Categories from "./components/Categories/Categories";
import {Category} from "./Models/Category";
import ProductInfo from "./components/ProductInfo/ProductInfo";

function App() {

    const [orders, setOrders]= React.useState<Product[]>([]);
    const [currentItems, setCurrentItems]= React.useState<Product[]>([]);
    const [products, setProducts] = React.useState<Product[]>(
        [
            {
            id:1,
            title: "Chair tree",
            img: "chair.jpg",
            description: "lorem ipsum dolor",
            category: "chairs",
            price: 49.99,
            },
            {
                id:2,
                title: "Table loft",
                img: "table.jpg",
                description: "lorem ipsum dolor",
                category: "tables",
                price: 149.99,
            },
            {
                id:3,
                title: "Sofa light",
                img: "sofa.jpg",
                description: "lorem ipsum dolor",
                category: "sofa",
                price: 549.99,
            },
            {
                id:4,
                title: "Light white",
                img: "light.jpg",
                description: "lorem ipsum dolor",
                category: "light",
                price: 24.99,
            }
        ]
    );
    const [showProductInfo, setShowProductInfo] = React.useState(false);
    const [fullItem, setFullItem] = React.useState<Product>({
        category: "",
        description: "",
        id: 0,
        img: "",
        price: 0,
        title: ""
    });

    useEffect(()=>{
        setCurrentItems([...products]);
    },[])

    function addToOrder(item: Product) {
        let isInArray = false;
       orders.forEach(order => {
           if (order.id === item.id) {
               isInArray = true;
           }
       })
        if (!isInArray) {
            setOrders([...orders, item]);
        }

    }
    
    function deleteOrder(id: number) {
        setOrders(orders.filter(order => order.id !== id));
    }

    function chooseCategory(category: Category) {
        //console.log(category);
        if (category.name === "all"){
            setCurrentItems([...products]);
        }
        else {
            setCurrentItems(products.filter(product => product.category === category.name));
        }

    }

    function onShowProductInfo(product: Product) {

        setShowProductInfo(!showProductInfo);
        setFullItem(product);

    }

  return (
    <div className={"wrapper"}>
        <Header orders={orders} onDelete={deleteOrder}/>
        <Categories chooseCategory={chooseCategory} />
        <Items onProductInfo={onShowProductInfo} items={currentItems} onAdd={addToOrder}/>
        {showProductInfo && <ProductInfo productInfo={fullItem} onAdd={addToOrder} onProductInfo={onShowProductInfo}/>}
        <Footer/>


    </div>
  );
}

export default App;
