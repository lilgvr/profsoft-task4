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

    return (
        <div
            className={ styles.button }
            onClick={ onClick }
            style={ style }
        >
            <React.Suspense fallback={ null }>
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
            </React.Suspense>
        </div>
    );
}
