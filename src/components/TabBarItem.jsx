import React from 'react';
import PropTypes from 'prop-types'

const TabBarItem = ({ tab, tabKey, activeTabKey, switchTab }) => {
    return (
        <li className={tabKey == activeTabKey ? 'active' : ''}>
            <a onClick={() => switchTab(tabKey)} >
                {tab.name}
            </a>
        </li>
    );
}

TabBarItem.propTypes = {
    tab: PropTypes.object.isRequired,
    tabKey: PropTypes.string.isRequired,
    activeTabKey: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired
}

export default TabBarItem;