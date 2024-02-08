
import Filterbar from './components/FilterBar';
import HeaderBar from './components/HeaderBar';
import ProjectList from './components/ProjectList';
import TitleBar from './components/TitleBar';


const Home = () => {

    return (
        <div>
            <HeaderBar />
            <TitleBar />
            <Filterbar />
            <ProjectList />
        </div>
    )   
}
export default Home;