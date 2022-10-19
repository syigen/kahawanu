import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserSummery from "pages/UserSummery";
import InvoiceForm from "components/InvoiceForm";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/user" element={<UserSummery/>}/>
            <Route path="/form" element={<InvoiceForm/>}/>
        </Routes>
    );
}
export default AuthRoutes;