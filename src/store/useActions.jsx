import {useAuthActions} from "./auth/useAuthActions";
import {useGameActions} from "./game/useGameActions";
import {useUserActions} from "./user/useUserActions";

export const useActions = () => {
    const auth = useAuthActions();
    const game = useGameActions();
    const user = useUserActions()

    return {auth, game, user}
};
