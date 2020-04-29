import {useRoomActions} from "./actions/useRoomsActions";
import {usePlayerActions} from "./actions/usePlayerActions";


export const useGameActions = () => {
    const [getRooms] = useRoomActions();
    const [getPlayers] = usePlayerActions()

    return {getRooms, getPlayers}
}
