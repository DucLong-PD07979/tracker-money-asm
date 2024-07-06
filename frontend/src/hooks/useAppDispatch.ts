import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

const useAppDispatch = () => {
    return useDispatch<AppDispatch>();
};

export default useAppDispatch;
