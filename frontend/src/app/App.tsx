import React, {useState} from 'react';
import {StoreProvider} from "../context/StoreContext";
import RootStore from "context/store/RootStore";
import AuthRoutes from "../routes/AuthRoutes";

function App() {
    const [rootStore] = useState(new RootStore());
    return (
        <>
            <StoreProvider store={rootStore}>

                <AuthRoutes/>

            </StoreProvider>
        </>
    );
}

export default App;
