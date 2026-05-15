import React from "react";
import { Button, Form, Input } from "antd";
import useAuthStore from "../store/useAuthStore";

const Login = () => {
  const { login } = useAuthStore();

  const onFinish = (values) => {
    const success = login(values.username, values.password);
    if (!success) {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Welcome heading */}
      <h1
        style={{
          color: "white",
          fontSize: "2rem",
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
        }}
      >
        Wellcome to Library
      </h1>

      {/* Login Card */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          padding: "40px",
          borderRadius: "8px",
          width: "400px",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px" }}>LogIn</h2>

        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input placeholder="Username" style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Password" style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#4a3728",
                border: "none",
              }}
            >
              LogIn
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
