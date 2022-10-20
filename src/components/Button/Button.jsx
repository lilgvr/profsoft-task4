import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export const Button = ({ imageName, onClick, type, style }) => {
    const [maskStyle, setMaskStyle] = useState({});

    useEffect(() => {
        import(`../../assets/images/${ imageName }.svg`).then(img => {
            setMaskStyle({
                maskImage: `url(${ img.default })`,
                WebkitMaskImage: `url(${ img.default })`,
            });
        });
    }, [imageName]);

    console.log(maskStyle)

    return (
        <div
            className={ styles.button }
            onClick={ onClick }
            style={ style }
        >
            {
                type === "LINK" &&
                <Link
                    to="/"
                    style={ maskStyle }
                />
            }
            {
                type === "DEFAULT" &&
                <div
                    style={ maskStyle }
                ></div>
            }
        </div>
    );
}
