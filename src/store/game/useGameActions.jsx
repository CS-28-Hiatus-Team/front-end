import {useRoomActions} from "./actions/useRoomsActions";
import {usePlayerActions} from "./actions/usePlayerActions";
import {usePlayerInitialize} from "./actions/usePlayerInitialize";


export const useGameActions = () => {
    const [getRooms] = useRoomActions();
    const [getPlayers] = usePlayerActions()
    const [init] = usePlayerInitialize();

    return {getRooms, getPlayers, init}
}
