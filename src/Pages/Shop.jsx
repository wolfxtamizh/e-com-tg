import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollections";
import NewLetter from "../Components/NewLetter/NewLetter";

function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewLetter/>
        </div>
    )
}
export default Shop;