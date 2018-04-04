import React from 'react'
import { connect } from 'react-redux'

import Layout from '../shared/container/layout/layout'

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout >
                <h2 className="title">Bem vindo { this.props.email }</h2>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    email: state.login.user.email
})

export default connect(mapStateToProps)(Home)