import React from "react";
import s from './Header.module.css';

const Header=()=> {
    return (
        <header className={s.header}>
            <img
                src="https://banner2.cleanpng.com/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg"
                alt=""/>
        </header>
    );
}

export default Header;