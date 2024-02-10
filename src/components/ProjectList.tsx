import { useState } from "react";
import ProjectCard from "./child-components/ProjectCard";
import styled from "styled-components";
import jsonData from '../datas/datas.json';
import Filterbar from './FilterBar'; 


const MainContainer = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 10px;
    padding: 20px;
`;

const ProjectList = () => {
    
    // Switch between the two select options
    const [toggleSelectBox, setToggleSelectBox] = useState(false);

    // Get the value of the selected category
    const [changedValue, setChangedValue] = useState("0"); 


   /**
    * Function to handle the changed value of the select box
    * @param value 
    */
    const handleChangedValue = (value:any) => {
        setChangedValue(value); 

    };

    // Filter the cards by type first on the json data file
    const filterByType = jsonData.Projet.cards.filter(card =>
        (toggleSelectBox && card.type === "game") || (!toggleSelectBox && card.type === "web")
    );

    // Then filter the cards by category selected by the user
    let filterByCategory;

    if (changedValue === "0" || changedValue === "") {
        filterByCategory = filterByType;        
    } else {
        filterByCategory = filterByType.filter(card => card.categorie === changedValue);
    }

    return (
        <>
            <Filterbar toggleSelectBox={toggleSelectBox} setToggleSelectBox={setToggleSelectBox} changedValue={changedValue} handleChangedValue={handleChangedValue}/>
            <MainContainer>
                {filterByCategory.map((card, index) =>
                    <ProjectCard key={index} data={card} />
                )}
            </MainContainer>
        </>
    );
}

export default ProjectList;
