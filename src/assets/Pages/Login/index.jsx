"use client";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { LogoUK } from "../../img";

import "react-bootstrap";
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/bootstrap/css/bootstrap-grid.css";
import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    document.getElementById("username").focus();
  }, []);

  const handleLogin = async () => {
    if (!userType || !username || !password) {
      setError("Semua kolom harus diisi.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:9900/sms-mgmt/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      const userData = data.output_schema?.result;

      if (response.ok && userData) {
        // Simpan semua user data
        localStorage.setItem("user", JSON.stringify(userData));

        // Simpan token secara terpisah jika ada
        if (userData.token) {
          localStorage.setItem("token", userData.token);
        }

        // Update context
        login(userData);

        // Redirect berdasarkan tipe user
        if (userType === "admin") {
          navigate("/admin/dashboard");
        } else if (userType === "bidang-kemahasiswaan") {
          navigate("/bidang-dashboard");
        } else {
          navigate("/mahasiswa/dashboard");
        }
      } else {
        setError("Login gagal: " + (data.error_schema?.error_message?.indonesian || "Terjadi kesalahan."));
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <img className="logologin" src={LogoUK} alt="Logo" />
        <div className="welcome-box">
          <h1>Welcome,</h1>
          <h2>Scholarship Management System</h2>
        </div>
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="login-form">
            <div className="dropdown-container-user">
              <select
                className="dropdown-user"
                onChange={(e) => setUserType(e.target.value)}
                value={userType}
              >
                <option value="">Pilih Tipe Pengguna</option>
                <option value="admin">Admin</option>
                <option value="bidang-kemahasiswaan">Bidang Kemahasiswaan</option>
                <option value="mahasiswa">Mahasiswa</option>
              </select>
            </div>

            <input
              id="username"
              type="text"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
              </button>
            </div>

            <Link to="/forget-password" className="forgot-password">
              Lupa Password?
            </Link>

            <button onClick={handleLogin} className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="login-footer">
              <p>
                Belum punya akun?{" "}
                <Link to="/signup" className="sign-in-text">
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
