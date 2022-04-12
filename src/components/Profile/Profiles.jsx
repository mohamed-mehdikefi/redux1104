import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getOneUser} from '../../redux/action'
function Profiles() {
  const {id} = useParams();
  const dispatch = useDispatch()

  // .filter(el => el.id == id)
  // console.log(user)
  useEffect(() => {
    dispatch(getOneUser(id))
  }, [])
    const user = useSelector(state=> state.user)
  return (
    <div>
        <div>{user.name}</div>
        <div>{user[0].email}</div>
    </div>
  )
}

export default Profiles