import {useStores} from "../../context/StoreContext";
import {useFormik} from "formik";
import {InputText} from "primereact/inputtext";

const ChangeSimpleName = () => {
    const {simpleStore} = useStores();
    const formik = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (values) => {
            simpleStore.setSimpleValue(values.name);
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={"flex flex-col space-y-3 w-96 bg-yellow-500 p-4"}>
                <label>Change Name -</label>
                <InputText className={"border-blue-500 border border-dashed"} onChange={formik.handleChange}
                       name={"name"}/>
                <button className={"bg-green-600 px-4 py-2"}>Save</button>
            </form>
        </>
    );
}
export default ChangeSimpleName;