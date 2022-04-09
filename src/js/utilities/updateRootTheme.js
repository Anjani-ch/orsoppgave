const updateRootTheme = className => {
    const root = document.querySelector(':root');
    root.className = className;
    console.log('class name: ', className);
};

export default updateRootTheme;

