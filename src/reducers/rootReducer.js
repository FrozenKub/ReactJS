let nextPostId = 0
export default function rootReducer(state, action)
{
    if (action.type === 'ADD_POST')
    {
        state.push({
            type: 'ADD_POST',
            id: nextPostId++,
            text: action.text
        })
        return state
    }
    return state
}