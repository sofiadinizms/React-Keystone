import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items from "../Item";
import ".\\Menu.css";
import ItemCardapio from '../Item';

let initial = [];

function Menu(props){
    const[items, setItems] = useState ([]);
    const loadItems = async () => {
        const res = await axios.get('http://localhost:3001/api/item');
        setItems(res.data);
    };

    useEffect(() => {
        loadItems();
    }, []);

    const search = (e) => {
        const searchName = e.target.value;
        const addedItems = initial.filter((element) => {
            return element.title.toLowerCase().includes(searchName.toLowerCase());
        });
        setItems(addedItems);
    
    };
    
    return(
        <main>
            <div className = "CardapioSearch">
                <h1>Cardápio</h1>
                <input className = "SearchBar" type = "text" onChange = { search } />
            </div>
            <div className ="Flex-container">
                {items.map((Item) =>{
                    return (
                        <ItemCardapio
                            key = {Items._id}
                            title = {Items.title} 
                            description = {Items.description}
                            price = {Items.price}
                            image = {Items.image}
                        />
                    );
                })}
            </div>
        </main>
        

    );
}

export default Menu;


    
    