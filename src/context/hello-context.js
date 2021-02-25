import React , {useContext} from "react";
import {useReducer} from "react";
const defaultValue = "Hello world!";

// state context를 생성한다.
const HelloStateContext = React.createContext();

// dispatch context를 생성한다.
const HelloDispathContext = React.createContext();

// state를 변경하는 리듀서 함수를 만든다.
function helloReducer(state, action){
    switch (action.type){
        case 'hello': {
            console.log(state.value);
            const v = state.value==='hi'?{value:'hello samlak'}:{value:'hi'}
            return v;
        }
        default : {
            throw new Error();
        }
    }
}

// 컴포넌트를 감쌀 provider를 만든다.
function HelloProvider({children}){
    const [state, dispatch] = useReducer(helloReducer,{value:"hi"});
    return (
        <HelloStateContext.Provider value={state}>
            <HelloDispathContext.Provider value={dispatch}>
                {children}
            </HelloDispathContext.Provider>
        </HelloStateContext.Provider>
    )
}

// state context를 반환하는 함수
function useHelloState(){
    const context = useContext(HelloStateContext);
    if(context==null){
        throw new Error("null context");
    }

    return context;
}


// dispath context를 반환하는 함수
function useHelloDispatch(){
    const context = useContext(HelloDispathContext);
    if(context==null){
        throw new Error("null context");
    }

    return context;
}

export {
    useHelloState,
    useHelloDispatch,
    HelloProvider,
}
