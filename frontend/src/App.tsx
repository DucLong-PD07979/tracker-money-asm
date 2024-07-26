import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import router from "./routers/routers";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyles>
                        <RouterProvider router={router} />
                        <ToastContainer
                            autoClose={5000}
                            position="bottom-right"
                        />
                    </GlobalStyles>
                </QueryClientProvider>
            </Provider>
        </>
    );
};

export default App;
