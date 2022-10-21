import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BUTTON_TYPES } from "../../utils/constants";
import styles from "./Button.module.scss";

export const Button = ({ imageName, onClick, type, style, title }) => {
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
            title={ title }
        >
            <React.Suspense fallback={ null }>
                {
                    type === BUTTON_TYPES.LINK &&
                    <Link
                        to="/"
                        style={ maskStyle }
                    />
                }
                {
                    type === BUTTON_TYPES.DEFAULT &&
                    <div
                        style={ maskStyle }
                    ></div>
                }
            </React.Suspense>
        </div>
    );
}
