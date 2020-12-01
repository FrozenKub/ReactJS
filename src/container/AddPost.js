import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

import { store } from '../index'


const AddPost = () => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    store.dispatch(addPost(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default connect()(AddPost)