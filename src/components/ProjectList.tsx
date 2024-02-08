import ProjectCard from "./child-components/ProjectCard";
import styled from "styled-components";


const MainContainer = styled.div`
    margin: 60px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 10px;
    padding: 20px;
`

const ProjectList = () => {
    return (
        <MainContainer>
           
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </MainContainer>
    )

}

export default ProjectList;