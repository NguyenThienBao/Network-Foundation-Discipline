import { useReducer } from 'react'

interface State {
    count : number
}

type CounterAction =
    | { type : 'reset' }
    | { type : "setCount", value : State["count"] }

const initialState: State = { count : 0 }

const stateReducer = (state : State, action: CounterAction) : State => {
    switch(action.type) {
        case "reset":
            return initialState
        case "setCount":
            return { ...state, count: action.value }
        default:
            throw new Error("unknown action")
    }
}

const Counter : React.FC = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState)

    const addFive = () => dispatch({ type: 'setCount', value: state.count + 5 })
    const reset = () => dispatch({ type: 'reset' })

    return(
        <div>
            <h1>Welcome to my Counter</h1>
            <p>Count: {state.count}</p>
            <button onClick={addFive}>Add Five</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter