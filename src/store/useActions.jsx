import {useAuthActions} from "./auth/useAuthActions";

export const useActions = () => {
    const auth = useAuthActions();

    return {auth}
}
