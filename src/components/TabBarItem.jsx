import React from 'react';

const TabBarItem = ({ tab, currentKey, activeTabIndex, switchTab }) => {
    return (
        <li className={currentKey == activeTabIndex ? 'active' : ''}>
            <a onClick={() => switchTab(currentKey)} >
                {tab.name}
            </a>
        </li>
    );
}

export default TabBarItem;