import {useLogin} from "./actions/useLogin";
import {useRegister} from "./actions/useRegister";
import {useLogout} from "./actions/useLogout";

export const useAuthActions = () => {
    const [login] = useLogin();
    const [register] = useRegister();
    const [logout] = useLogout()

    return {login, register, logout}
};
