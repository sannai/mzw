//加载组件
import React from 'react';
import styles from './Button.css';

const  Button = (props) => {
	return (
		<div className={styles.Button} style={{left: (document.documentElement.clientWidth/3)}}>
            {props.text}
		</div>
	);
}

export default Button;
