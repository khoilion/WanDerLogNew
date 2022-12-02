import {useDispatch, useSelector} from "react-redux";
import {setUserInfo, setIsLogin} from "./reducer";
import {useCallback} from "react";

export const useConnection = () => {
    const connection = useSelector(state => state.connection);
    const dispatch = useDispatch();

    const setUserInfoAction = useCallback((userInfo) => {
        dispatch(setUserInfo(userInfo))
    }, [dispatch]);

    const setIsLoginAction = useCallback((isLogin) => {
        dispatch(setIsLogin(isLogin))
    }, [dispatch]);
    return {
        connection,
        setUserInfoAction,
        setIsLoginAction,
    }
}


