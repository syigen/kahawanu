import {useStores} from "../../context/StoreContext";
import {observer} from "mobx-react";

const SimpleName = () => {
    const {simpleStore} = useStores();
    return (
        <div>
            <h1>{simpleStore.simpleValue}</h1>
        </div>
    );
}
export default observer(SimpleName);