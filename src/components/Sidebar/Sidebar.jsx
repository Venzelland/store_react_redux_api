import React from 'react';

import styles from '../../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useSelector} from "react-redux";
import {isAction} from "@reduxjs/toolkit";

const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories);

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>Categories</div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({id, name}) => (
                        <li key={id}>
                            <NavLink
                                className={({isActive}) =>
                                    `${styles.link} ${isActive ? styles.active : ''}`}
                                to={`/categories/${id}`}>{name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.footer}>
                <a href={"/help"}
                   className={styles.link}
                   target="_blank"
                   rel="noreferrer">
                    HELP
                </a>
                <a href={"/terms"}
                   className={styles.link}
                   target="_blank"
                   rel="noreferrer">
                    Terms & Conditions
                </a>
            </div>

        </section>
    )
};

export default Sidebar;