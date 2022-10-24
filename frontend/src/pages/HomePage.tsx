import SimpleName from "../components/SimpleName";
import ChangeSimpleName from "../components/SimpleName/ChangeSimpleName";
import NavBar from "components/NavBar";

const HomePage = () => {
    return (<NavBar>
        Home page
        <p>
            <SimpleName/>
            <ChangeSimpleName/>
        </p>
    </NavBar>);
};
export default HomePage;