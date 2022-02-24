const hasScrollbar = () => {
    // rootElem for quirksmode
    const rootElem = document.documentElement || document.body;

    const contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;

    let overflowShown;
    let alwaysShowScroll;
    let overflowStyle;
    let overflowYStyle;

    if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth;
  
    if (typeof rootElem.currentStyle !== 'undefined') overflowStyle = rootElem.currentStyle.overflow;
  
    if (typeof rootElem.currentStyle !== 'undefined') overflowYStyle = rootElem.currentStyle.overflowY;

    // Check overflow style property on body for fauxscrollbars
    overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow;
  
    // Check the Y axis overflow
    overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;

    overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);

    alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

    return (contentOverflows && overflowShown) || (alwaysShowScroll)
};

export default hasScrollbar;