import React, {createContext, useContext, useReducer} from 'react';

import {findAllSimpleboards} from "../api/ApiUtil";

export const message = {
    content:[],
    page:0,
    totalElements:0,
    flag: true,
};

// state context를 만든다.
const MessageState = createContext();

// dispatch context를 만든다.
const MessageDispatch = createContext();

// reducer function를 만든다.
function  MessageReducer(state, action){
    switch (action.type){
        case 'messages': {

            return action.payload;
        }
        default : {
            throw new Error();
        }
    }
}

// Provider를 만든다.
function MessageProvider({children}){
    const [state,dispatch] = useReducer(MessageReducer,message);
    return(
        <MessageState.Provider value={state}>
            <MessageDispatch.Provider value={dispatch}>
                {children}
            </MessageDispatch.Provider>
        </MessageState.Provider>
        );
}

// hook메소드를 만든다.
function useMessageState(){
    const context = useContext(MessageState);
    if(context==null){
        throw new Error("context is null");
    }
    return context;
}

function useMessageDispatch(){
    const context = useContext(MessageDispatch);
    if(context==null){
        throw new Error("context is null");
    }
    return context;
}

export {
    MessageProvider,
    useMessageDispatch,
    useMessageState
}
