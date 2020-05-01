import {usePlayerInitialize} from "./actions/usePlayerInitialize";
import {useMoves} from "./actions/useMoveActions";


export const useGameActions = () => {
    const [init] = usePlayerInitialize();
    const [move] = useMoves();

    return {init, move}
}
