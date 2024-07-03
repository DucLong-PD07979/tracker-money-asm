import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import router from "./routers/routers";

const App = () => {
    return (
        <>
            <GlobalStyles>
                <RouterProvider router={router} />
            </GlobalStyles>
        </>
    );
};

export default App;
