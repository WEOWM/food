import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/products/produtsSlice";
import { useNavigate } from "react-router-dom";

function ProductCard() {
    const dispatch = useDispatch();
     const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Burger",
      price: "$5.99",
      img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Pizza",
      price: "$8.99",
      img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Pasta",
      price: "$7.49",
      img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Salad",
      price: "$4.50",
      img: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "Tacos",
      price: "$6.75",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "Sandwich",
      price: "$5.20",
      img: "https://images.pexels.com/photos/5292918/pexels-photo-5292918.jpeg",
    },
    {
      id: 7,
      name: "Noodles",
      price: "$6.00",
      img: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 8,
      name: "Fried Chicken",
      price: "$9.99",
      img: "https://images.pexels.com/photos/4109236/pexels-photo-4109236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 9,
      name: "Ice Cream",
      price: "$3.50",
      img: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10,
      name: "Hot Dog",
      price: "$4.99",
      img: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 11,
      name: "Sushi",
      price: "$12.99",
      img: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 12,
      name: "Steak",
      price: "$15.99",
      img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 13,
      name: "Donut",
      price: "$2.50",
      img: "https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg",
    },
    {
      id: 14,
      name: "Pancakes",
      price: "$5.00",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 15,
      name: "French Fries",
      price: "$3.99",
      img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 16,
      name: "Milkshake",
      price: "$4.25",
      img: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg",
    },
    {
      id: 17,
      name: "Coffee",
      price: "$2.99",
      img: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 18,
      name: "Juice",
      price: "$3.20",
      img: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 19,
      name: "Cupcake",
      price: "$2.20",
      img: "https://images.pexels.com/photos/266444/pexels-photo-266444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 20,
      name: "Soup",
      price: "$4.10",
      img: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 21,
      name: "Cheeseburger",
      price: "$6.50",
      img: "https://images.pexels.com/photos/4109114/pexels-photo-4109114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 22,
      name: "Chicken Wings",
      price: "$7.25",
      img: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
    },
    {
      id: 23,
      name: "Ramen",
      price: "$8.50",
      img: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 24,
      name: "Falafel",
      price: "$5.99",
      img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 25,
      name: "Shawarma",
      price: "$6.80",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 26,
      name: "Cookies",
      price: "$2.99",
      img: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 27,
      name: "Smoothie",
      price: "$4.50",
      img: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 28,
      name: "Muffin",
      price: "$2.75",
      img: "https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg",
    },
    {
      id: 29,
      name: "Grilled Fish",
      price: "$13.99",
      img: "https://images.pexels.com/photos/3296274/pexels-photo-3296274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 30,
      name: "Veggie Wrap",
      price: "$5.40",
      img: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 31,
      name: "Brownie",
      price: "$3.80",
      img: "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg",
    },
    {
      id: 32,
      name: "Spring Rolls",
      price: "$6.20",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  

  const handledeatial = (data) => {
    console.log(data.id, "clicked product");
    dispatch(setSelectedProduct(data)); 
    navigate("/product/:id")
    
  };

  return (
    <div className="grid gap-6 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {products.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
        >
          <img
           onClick={() => handledeatial(item)}  
            src={item.img}
            alt={item.name}
            loading={idx < 4 ? "eager" : "lazy"}
            className="h-40 w-full object-cover"
          />
          <div className="p-3 text-center">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
