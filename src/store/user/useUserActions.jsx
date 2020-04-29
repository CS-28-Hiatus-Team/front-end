import {useGetUserAction} from "./actions/useGetUserAction";

export const useUserActions = () => {
    const [getUser] = useGetUserAction();

    return {getUser}
}