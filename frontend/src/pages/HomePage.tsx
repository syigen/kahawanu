import SimpleName from "../components/SimpleName";
import ChangeSimpleName from "../components/SimpleName/ChangeSimpleName";
import Header from "components/Header";

const HomePage = () => {
    return (<Header>
        Home page
        <p>
            <SimpleName/>
            <ChangeSimpleName/>
        </p>
    </Header>);
};
export default HomePage;