import React from 'react';

const ContentArea = ({ tabs, currentTabIndex }) => {
    let currentTab = tabs[currentTabIndex];
    return (
        <article className="content-area">
            <p>
                {currentTab.content}
            </p>
        </article>
    )
}

export default ContentArea;