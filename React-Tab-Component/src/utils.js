export const mergeClassName = (props, ...classNames) => {
    if (props && props.className) {
        classNames.unshift(props.className);
    }

    return classNames.join(' ');
};

export const getSelectedTabIndex = (tabs) => {
    let selectedTabIndex = 0;
    tabs.some((tab, index) => {
        if (tab.props.isSelected) {
            selectedTabIndex = index;
            return true;
        }
    });

    return selectedTabIndex;
};