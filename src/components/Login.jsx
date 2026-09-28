import { useState } from "react";

const Login = () => {
      const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
       <section className="login-page">
      {/* Background Effects */}
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-12 col-sm-10 col-md-8 col-lg-5">

            <div className="login-card">

              {/* Logo */}
              <div className="login-logo">
                <div className="logo-circle">
                  <i className="fa-solid fa-code"></i>
                </div>
              </div>

              {/* Heading */}
              <div className="text-center mb-4">
                <h1>Welcome Back 👋</h1>
                <p>Login to continue to your account</p>
              </div>

              {/* Login Form */}
              <form>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <div className="input-box">
                    <i className="fa-solid fa-envelope"></i>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="form-label">
                      Password
                    </label>

                    <a href="#" className="forgot-link">
                      Forgot Password?
                    </a>
                  </div>

                  <div className="input-box">
                    <i className="fa-solid fa-lock"></i>

                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      className="password-btn"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      <i
                        className={
                          showPassword
                            ? "fa-solid fa-eye-slash"
                            : "fa-solid fa-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>

                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="btn login-btn w-100"
                >
                  Login
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>

                {/* Divider */}
                <div className="divider">
                  <span>OR</span>
                </div>

                {/* Social Login */}
                <div className="row g-2">

                  <div className="col-6">
                    <button
                      type="button"
                      className="social-btn w-100"
                    >
                      <i className="fa-brands fa-google"></i>
                      Google
                    </button>
                  </div>

                  <div className="col-6">
                    <button
                      type="button"
                      className="social-btn w-100"
                    >
                      <i className="fa-brands fa-github"></i>
                      GitHub
                    </button>
                  </div>

                </div>

                {/* Register */}
                <p className="register-text">
                  Don't have an account?
                  <a href="#"> Create Account</a>
                </p>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Login
