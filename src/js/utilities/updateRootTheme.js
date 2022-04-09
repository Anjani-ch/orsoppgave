const updateRootTheme = className => {
    const root = document.querySelector(':root');
    
    root.className = className;
};

export default updateRootTheme;

