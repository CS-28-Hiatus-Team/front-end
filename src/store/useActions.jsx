import {useAuthActions} from "./auth/useAuthActions";
import {useRoomActions} from "./game/useRoomActions";

export const useActions = () => {
    const auth = useAuthActions();
    const rooms = useRoomActions();

    return {auth, rooms}
};
