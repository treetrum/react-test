import React from 'react';
import PropTypes from 'prop-types'

import TabBarItem from './TabBarItem.jsx';

const TabBar = ({ tabs, activeTabKey, switchTab }) => {
    return (
        <nav className="tab-bar">
            {Object.keys(tabs).map( key => 
                <TabBarItem
                    tab={tabs[key]}
                    tabKey={key}
                    activeTabKey={activeTabKey}
                    switchTab={switchTab}
                    key={key}
                />
            )}
        </nav>
    );
}

TabBar.propTypes = {
    tabs: PropTypes.object.isRequired,
    activeTabKey: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired
}

export default TabBar;