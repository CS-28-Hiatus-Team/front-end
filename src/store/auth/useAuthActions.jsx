import {useLogin} from "./actions/useLogin";
import {useRegister} from "./actions/useRegister";

export const useAuthActions = () => {
    const [login] = useLogin();
    const [register] = useRegister();

    return {login, register}
};
