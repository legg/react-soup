import React from 'react'
import {Link} from 'react-router-dom'
import {goTo} from '../state'

/*  This is a Redux action triggering Link
    The Link in react-router-dome doesn't trigger the redux action CALL_HISTORY_ACTION
    you have to call  store.dispatch(push(route)) which is inside goTo()
*/
const RLink = ({to, className, children}) => (
    <Link className={className} to={to} onClick={()=>goTo(to)}>{children}</Link>
)

export default RLink