import {useRoomActions} from "./actions/useRoomsActions";
import {usePlayerActions} from "./actions/usePlayerActions";
import {usePlayerInitialize} from "./actions/usePlayerInitialize";
import {useMoves} from "./actions/useMoveActions";


export const useGameActions = () => {
    const [getRooms] = useRoomActions();
    const [getPlayers] = usePlayerActions()
    const [init] = usePlayerInitialize();
    const [move] = useMoves();

    return {getRooms, getPlayers, init, move}
}
