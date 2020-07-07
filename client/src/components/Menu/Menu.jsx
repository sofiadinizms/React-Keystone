import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ".\\Menu.css";
import ItemCardapio from '..\\Item';

let initial = [];

function Menu(props){
    const[items, setItems] = useState ([]);
    const loadItems = async () => {
        const res = await axios.get('http://localhost:3001/api/Items');
        initial = res.data;
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
        <main className="Menu">
            <div className="MenuElements">
                <div className = "CardapioSearch">
                    <h1>Cardápio</h1>
                    <input className = "SearchBar" type = "text" onChange = { search } />
                </div>
                    {items.map((Item) =>{
                        return (
                            <ItemCardapio
                                key = {Item.title}
                                title = {Item.title} 
                                description = {Item.description}
                                price = {Item.price}
                                image = {Item.image}
                            />
                        );
                })}
            </div>
        </main>
    );
}

export default Menu;


    
    