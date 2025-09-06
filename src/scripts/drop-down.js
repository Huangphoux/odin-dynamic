const dropDown = (() => {
    function revealMenu(elmt) {
        elmt.style.display = 'grid';
    }

    function hideMenu(elmt) {
        elmt.style.display = 'none';
    }

    function setMenuPosition(button, menu) {
        var rect = button.getBoundingClientRect();

        menu.style.position = 'absolute';
        menu.style.top = rect.bottom + 20 + 'px';
    }

    function dropDownify(id) {
        const button = document.querySelector('button#' + id);
        const menu = document.querySelector('ul#' + id);

        hideMenu(menu);
        setMenuPosition(button, menu);

        button.addEventListener('mouseenter', () => {
            revealMenu(menu);
        });

        menu.addEventListener('mouseleave', () => {
            hideMenu(menu);
        });
    
    
    }

    return { dropDownify };
})();

export { dropDown };
