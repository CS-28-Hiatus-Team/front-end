import {useAuthActions} from "./auth/useAuthActions";
import {useGameActions} from "./game/useGameActions";

export const useActions = () => {
    const auth = useAuthActions();
    const game = useGameActions();

    return {auth, game}
};
