import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items/Items";

function App() {

    const [products, setProducts] = React.useState(
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

  return (
    <div className={"wrapper"}>
      <Header></Header>
        <Items items={products}></Items>
      <Footer></Footer>


    </div>
  );
}

export default App;
