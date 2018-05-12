import React from 'react';
import TabBarItem from './TabBarItem.jsx';

const TabBar = ({ tabs, activeTabIndex, switchTab }) => {
    return (
        <nav className="tab-bar">
            { Object.keys(tabs).map((key, index) => 
                <TabBarItem
                    tab={tabs[key]}
                    currentKey={key}
                    activeTabIndex={activeTabIndex}
                    switchTab={switchTab}
                    key={key}
                />
            )}
        </nav>
    );
}

export default TabBar;