import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Overview from "pages/Overview";
import Invoice from "../pages/Invoice";
import CreateInvoice from "pages/CreateInvoice";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/overview" element={<Overview/>}/>
            <Route path="/invoice" element={<Invoice/>}/>
            <Route path="/create-invoice" element={<CreateInvoice/>}/>
        </Routes>
    );
}
export default AuthRoutes;