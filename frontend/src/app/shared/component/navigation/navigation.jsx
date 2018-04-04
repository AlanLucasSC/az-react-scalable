import React from 'react'

export default props => (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="sidebar-menu">
            <a href="/#/home">
                <i className="fa fa-home" aria-hidden="true"></i> <span>Home</span>
            </a>

            <a href="/#/user">
                <i className="fa fa-user" aria-hidden="true"></i> <span>Usuários</span>
            </a>

            <a href="/#/products">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>Produtos</span>
            </a>

            </div>
        </div>

        <a href="http://www.azi.com.br/" target="blank" className="sidebar-logo">
            <img src="/assets/images/logo_az_white.png"/>
        </a>
    </div>
)