import React from 'react';
import PropTypes from 'prop-types';

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

ContentArea.propTypes = {
    tabs: PropTypes.object.isRequired,
    currentTabIndex: PropTypes.string.isRequired
}

export default ContentArea;