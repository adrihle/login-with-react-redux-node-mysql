import React, { useState, useRef } from "react"
import { uploadUser } from '../redux/actions'
import { useDispatch } from 'react-redux'

export default function Form() {
  const dispatch = useDispatch()
  const inputFocus = useRef(null)

  const initialUserState = {
    username: '',
    pass: ''
  }

  const [user, setUser] = useState(initialUserState)

  const handleChange = input => event => {
    setUser({ ...user, [input]:  event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { username, pass } = user
    dispatch(uploadUser({ username, pass}))
    setUser(initialUserState)
    inputFocus.current.focus()
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-white text-center mb-5">Login adrian/password</h2>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic">
              #
            </span>
          </div>
          <input
            ref={inputFocus}
            type="text"
            className="form-control"
            placeholder="username"
            aria-describedby="basic"
            value={user.username}
            onChange={handleChange('username')}
          />
          <input
            type="text"
            className="form-control"
            placeholder="password"
            aria-describedby="basic"
            value={user.pass}
            onChange={handleChange('pass')}
          />
          <button className="btn-success" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  )
}
