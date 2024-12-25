import React, { useReducer } from 'react'
export const Demo = () => {
    function reducerfn(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            default:
                return state
        }
    }

    // const [str, setStr] = useState(0)
    const [state, dispatch] = useReducer(reducerfn, { count: 0 })
    function add() {
        dispatch({ type: 'increment' })
    }
    function dec() {
        dispatch({ type: 'decrement' })
    }
    return (
        <>
            <h3>Basics</h3>
            <div style={{ textAlign: 'center' }}>
                <p onClick={add}>+</p>
                <p>{state.count}</p>
                <p onClick={dec}>-</p>
            </div>
        </>
    )

}