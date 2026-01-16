"use client";
import React from 'react';
import styles from './ShootingStars.module.css';

const ShootingStars = () => {
    return (
        <div className={styles.shootingStarsContainer}>
            {[...Array(10)].map((_, i) => (
                <div key={i} className={styles.star}></div>
            ))}
        </div>
    );
};

export default ShootingStars;
