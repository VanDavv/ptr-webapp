import React from 'react';

const Wrapper = ({children}) => (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <p class="navbar-text">Signed in as Mark Otto</p>
          </div>
        </nav>
        {children}
    </div>
);

Wrapper.propTypes = {
    children: React.PropTypes.node
};

export default Wrapper;