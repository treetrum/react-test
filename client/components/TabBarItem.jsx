import React from 'react';

const TabBarItem = ({ tab, index, activeTabIndex, switchTab }) => {
    return (
        <li className={index == activeTabIndex ? 'active' : ''}>
            <a href="#" onClick={() => switchTab(index)} >
                {tab.name}
            </a>
        </li>
    );
}

export default TabBarItem;