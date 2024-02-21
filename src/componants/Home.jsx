import React from 'react'
import { useForm } from 'react-hook-form'
import "./Home.css"

export default function Home() {
    const {register, handleSubmit } = useForm();
    const onsubmit = (data)=>{
        console.log(data);
    }
  return (
    <React.Fragment>
    <div id="wrapper">
      <div className="container">
        <div className="phone-app-demo" />
        <div className="form-data">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="logo">
              <h1>Instagram</h1>
            </div>
            <input type="text" placeholder="Phone number, username, or email" {...register("email")}/>
            <input type="password" placeholder="Password" {...register("Password")} />
            <button className="form-btn" type="submit">
              Log in
            </button>
            <span className="has-separator">Or</span>
            <a href="https://www.facebook.com/login.php/" className="facebook-login">
              <i className="fab fa-facebook" /> Log in with Facebook
            </a>
            <a className="password-reset" href="https://www.instagram.com/accounts/password/reset/">
              Forgot password?
            </a>
          </form>
          <div className="sign-up">
            Don't an account? <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
          </div>
          <div className="get-the-app">
            <span>Get the app</span>
            <div className="badge">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="android App"
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="ios app"
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Profiles</a>
              </li>
              <li>
                <a href="#">Languages</a>
              </li>
            </ul>
          </nav>
          <div className="copyright-notice">&copy; 2019 Complaints</div>
        </div>
      </footer>
    </div>
  </React.Fragment>
  )
}
