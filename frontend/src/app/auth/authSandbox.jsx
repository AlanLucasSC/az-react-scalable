import { connect } from 'react-redux'

import { redirect } from '../shared/store/actions/authAction'


export const Redirect = (url) => {
    redirect(url)
}