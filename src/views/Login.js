import React, { useState } from 'react'
import LoginForm from '../components/login/LoginForm'

function Login() {
    const [visible, setVisible] = useState(false);
  return (
    <div className="login mt-20">
    <div className="login_wrapper">
      <LoginForm setVisible={setVisible} />
    </div>
  </div>
  )
}

export default Login