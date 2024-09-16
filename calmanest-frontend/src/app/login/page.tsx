import React from 'react';
import LoginForm from '@/components/LoginForm';

const Login: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login-background.png')" }}
    >
      <LoginForm/>
    </div>
  );
};

export default Login;