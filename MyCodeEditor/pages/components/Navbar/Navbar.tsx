import React from 'react';
import styles from './Nav.module.scss';

function Navbar() {
    return (

        <div className={styles.navContainer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <img src="./logo5.png" alt="" />
                </div>
                <div className={styles.right}>
                    <nav className={styles.Nav}>
                        <ul>
                            <li><a href="https://dharam-gfx.netlify.app/">About</a></li>
                            <li><a href="https://github.com/dharam-gfx">⭐️ Star on Github</a></li>
                             {/*<li><a href="">Developer</a></li>*/}
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
