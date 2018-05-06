//登陆
import React from 'react'
import styles from './Login.css'
import Button from '../../components/Button/Button'
class Login extends React.Component {
    render() {
        return (
            <section className={styles.Login} style={{minHeight: document.documentElement.clientHeight-50}}>
                <form action=""  className={styles.reactid}>
                    <div className={styles.group}>
                        <input type="text" className={styles.input} placeholder='请输入账户'/>
                    </div>
                    <div className={styles.group}>
                        <input type="text" className={styles.input} placeholder='请输入密码'/>
                    </div>
                </form>
                <Button text={'登陆'}/>
            </section>
        );
    }
}

export default Login;