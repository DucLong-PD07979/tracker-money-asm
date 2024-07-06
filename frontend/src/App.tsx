import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import router from "./routers/routers";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyles>
                        <RouterProvider router={router} />
                    </GlobalStyles>
                </QueryClientProvider>
            </Provider>
        </>
    );
};

export default App;
