import React from "react";
import s from './Navbar.module.css';
// console.log(s);

/*let c1='item';
let c2='active';
let classes = c1+" "+c2;
console.log(classes);
let classesNew = `${c1} ${c2}`;
console.log(classesNew);
let classesNew2=`${s.item} ${s.active}`;
console.log(classesNew2);*/

/*let s ={
    'nav' : 'Navbar_nav__cUp8r',
    'item' : 'Navbar_item__1YLS1'
}*/



const Navbar=()=> {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>news</div>
            <div className={s.item}>Settings</div>
        </nav>
    );
}

export default Navbar;