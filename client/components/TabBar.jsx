import React from 'react';
import TabBarItem from './TabBarItem.jsx';

const TabBar = ({ tabs, activeTabIndex, switchTab }) => {
    return (
        <nav className="tab-bar">
            {tabs.map((tab, index) =>
                <TabBarItem
                    tab={tab}
                    index={index}
                    activeTabIndex={activeTabIndex}
                    switchTab={switchTab}
                    key={index}
                />
            )}
        </nav>
    );
}

export default TabBar;