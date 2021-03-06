import React, { Component } from 'react';
import Navbar from './Navbar';

import './landing_color.css';
import './landing_main.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        {/* FRONT PAGE */}
        <div className="fuschia-gradient">
          <header className="header">
            <div className="container-lrg">
              <div className="flex col-12 spread">
                <a className="logo">
                  <img href="https://blockzeus.com" src="images/transparent-logo.png" alt="BlockZeusCompany Logo" />
                </a>
                <a href="mailto:hello@blockzeus.com?subject=BlockZeus%20Question/Comment&body=Hi%20BlockZeus,%0a%0a%0a" className="paragraph secondary-color email accent-bg header-email">Contact</a>
              </div>
            </div>
          </header>
          <section className="section">
            <div className="container">
              <div className="col-12 text-center">
                <h1 className="heading-lrg primary-color">Your live cryptocurrency portfolio manager</h1>
                <h2 className="subheading secondary-color mt20">No more Excel. No more data imports. Connect your exchange account to BlockZeus and get a live view of your portfolio.</h2>
                <div className="mt40">
                  {/* <a id="signup" class="button mt10 mr10 primary-color accent-bg">
              <span> Sign Up for Updates! </span>
            </a> */}
                  <span>
                    <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate="novalidate" className="container-sml mailchimp flex mb20">
                      <input type="email" id="mce-EMAIL" placeholder="Enter your email address" required="required" className="mailchimp-input mobile-text-center" />
                      {/* <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_3198ee66c8baf4d60aa2fee6b_d60e1830e8" tabIndex={-1} />
                      </div> */}
                      <a href="/register" type="button" id="mc-embedded-subscribe" className="button no-max-width primary-color accent-bg" defaultValue="Sign Up">Sign Up</a>
                    </form>
                  </span>
                  {/* <a href="/demo" target="_blank" class="white-color button no-max-width primary-color accent-bg">
              <span> Enter Demo </span>
            </a> */}
                </div>
              </div>
            </div>
            <div className="container-lrg">
              <div className="col-12">
                <div className="computerphone">
                  <div className="computerphone-computer">
                    <div className="mask">
                      <img src="images/8d7445df-7aa6-4b1d-a2eb-a17d6e31bb69.png" alt="Screenshot of App inside a laptop" className="mask-img" />
                    </div>
                    <div className="computerphone-computer-bottom" />
                  </div>
                  <div className="computerphone-iphone">
                    <div className="mask">
                      <img src="images/08f6f1b1-901f-4c0a-adc9-cb44b95f8990.png" alt="Screenshot of iPhone App" className="mask-img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-12 text-center">
          <div style="margin-top:6em;">
            <a href="/demo" target="_blank" class="white-color button no-max-width primary-color accent-bg">
              <span> Enter Demo </span>
            </a>
          </div>
        </div> */}
            </div>
          </section>
        </div>
        {/* FEATURES */}
        <section className="section black-white">
          <div className="container-lrg flex">
            <div className="col-6 flex flex-column center-vertical">
              <div className="flex mobile-flex-wrap mb20 mobile-text-center">
                <i className="icon secondary-bg mr20 mobile-center-icon">
                  <svg className="svg-fill" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 13.895l6.08 6.257A9.492 9.492 0 1 1 9 3v10.895zM10 0v13.49l7.958 8.189A12.489 12.489 0 0 0 10 0z" />
                  </svg>
                </i>
                <div>
                  <h3 className="bold primary-color">Portfolio Allocations</h3>
                  <p className="paragraph secondary-color">Get a live view of your current cryptocurrency allocation.</p>
                </div>
              </div>
              <div className="flex mobile-flex-wrap mb20 mobile-text-center">
                <i className="icon secondary-bg mr20 mobile-center-icon">
                  <svg className="svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path d="M7 19.5v4A1.5 1.5 0 0 1 5.5 25h-1A1.5 1.5 0 0 1 3 23.5v-4A1.5 1.5 0 0 1 4.5 18h1A1.5 1.5 0 0 1 7 19.5zm5.5-6.5h-1a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5zm7-6h-1A1.5 1.5 0 0 0 17 8.5v15a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 7zM21.998.49a.499.499 0 0 0-.024-.12.512.512 0 0 0-.017-.07.507.507 0 0 0-.049-.073.492.492 0 0 0-.063-.086L21.84.13a.485.485 0 0 0-.066-.04.473.473 0 0 0-.092-.055.478.478 0 0 0-.11-.022A.468.468 0 0 0 21.5 0h-4a.5.5 0 0 0 0 1h2.834C13.291 8.21 2.38 13.998 2.268 14.058a.5.5 0 1 0 .464.884C2.848 14.882 13.838 9.052 21 1.75V4.5a.5.5 0 0 0 1 0v-4z" />
                  </svg>
                </i>
                <div>
                  <h3 className="bold primary-color">Portfolio Performance</h3>
                  <p className="paragraph secondary-color">View your historical portfolio performance, broken down by each currency.</p>
                </div>
              </div>
              <div className="flex mobile-flex-wrap mb20 mobile-text-center">
                <i className="icon secondary-bg mr20 mobile-center-icon">
                  <svg className="svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path d="M15.967 12H8.983a36.982 36.982 0 0 1 .289-4.256 24.254 24.254 0 0 0 3.203.22 24.254 24.254 0 0 0 3.203-.22A36.982 36.982 0 0 1 15.967 12zM8.285 7.598a23.844 23.844 0 0 1-6.224-2.007A12.428 12.428 0 0 0 0 12h7.983a37.857 37.857 0 0 1 .302-4.402zm.983 9.624A24.232 24.232 0 0 1 12.475 17a24.232 24.232 0 0 1 3.207.222A37 37 0 0 0 15.967 13H8.983a37 37 0 0 0 .285 4.222zM7.983 13H0a12.428 12.428 0 0 0 2.045 6.382 23.845 23.845 0 0 1 6.236-2.014A37.888 37.888 0 0 1 7.983 13zm7.555 5.21a23.18 23.18 0 0 0-6.126 0 22.718 22.718 0 0 0 .83 3.52c.753 2.259 1.664 3.27 2.233 3.27s1.48-1.011 2.234-3.27a22.718 22.718 0 0 0 .829-3.52zM9.418 6.756a23.223 23.223 0 0 0 6.114 0 22.655 22.655 0 0 0-.824-3.485C13.955 1.011 13.044 0 12.475 0s-1.48 1.011-2.234 3.27a22.655 22.655 0 0 0-.824 3.485zm7.25 10.613a23.845 23.845 0 0 1 6.237 2.014A12.428 12.428 0 0 0 24.949 13h-7.983a37.888 37.888 0 0 1-.298 4.368zM10.664.145a12.473 12.473 0 0 0-8 4.623 22.863 22.863 0 0 0 5.766 1.84A15.462 15.462 0 0 1 10.664.146zm3.621 24.71a12.472 12.472 0 0 0 8.02-4.65 22.872 22.872 0 0 0-5.78-1.847 15.512 15.512 0 0 1-2.24 6.497zm-11.64-4.65a12.472 12.472 0 0 0 8.02 4.65 15.512 15.512 0 0 1-2.24-6.497 22.872 22.872 0 0 0-5.78 1.847zM22.285 4.77a12.473 12.473 0 0 0-8-4.623 15.462 15.462 0 0 1 2.234 6.462 22.863 22.863 0 0 0 5.766-1.84zM16.966 12h7.983a12.428 12.428 0 0 0-2.06-6.41 23.844 23.844 0 0 1-6.225 2.008A37.857 37.857 0 0 1 16.966 12z" />
                  </svg>
                </i>
                <div>
                  <h3 className="bold primary-color">Holding Market Updates</h3>
                  <p className="paragraph secondary-color">For each of your holdings, view current prices and market changes.</p>
                </div>
              </div>
            </div>
            <div className="col-6 flex center-horizontal center-vertical" style={{ padding: 0 }}>
              <div className="launchaco-builder-hoverable">
                <div className>
                  <img src="images/expose.png" alt="Screenshot of small App" className="custom-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* DEMO SECTION */}
        <section className="section fuschia-white pt-0 pb-5">
          <div className="container text-center">
            <div className="col-12">
              <h2 className="primary-color">Check out the demo!</h2>
              <div className="mt40">
                <a href="/demo" type="button" id="mc-embedded-subscribe" className="white-color button no-max-width primary-color accent-bg" defaultValue="Sign Up">Take me to the demo</a>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURE LIST */}
        <section className="section fuschia-black">
          <div className="container-lrg flex">
            <div className="col-6 flex flex-column center-vertical">
              <h3 className="heading primary-color">Still not convinced?</h3>
              <p className="subheading secondary-color mt20">Exchanges don't offer portfolio clarity. BlockZeus solves that problem for you.</p>
              <ul className="checklist mt20">
                <li className="checklist-item flex center-horizontal spread pad10 pr0 pl0">
                  <p className="span primary-color mr20">Major exchange integrations including Poloniex, with Binance and more to come!</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                    </g>
                  </svg>
                </li>
                <li className="checklist-item flex center-horizontal spread pad10 pr0 pl0">
                  <p className="span primary-color mr20">Live data streams so you're portfolio is always up to date with new market data.</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                    </g>
                  </svg>
                </li>
                <li className="checklist-item flex center-horizontal spread pad10 pr0 pl0">
                  <p className="span primary-color mr20">Mobile-responsive web application that works on mobile, tablet, or desktop.</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                    </g>
                  </svg>
                </li>
                <li className="checklist-item flex center-horizontal spread pad10 pr0 pl0">
                  <p className="span primary-color mr20">Curated current news updates so you are always in-the-know.</p>
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="noshrink svg-fill">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                    </g>
                  </svg>
                </li>
              </ul>
            </div>
            <div className="col-6 flex center-vertical">
              <div className="iphoneandroid2 noshrink">
                <div className="iphoneandroid2-android">
                  <div className="mask">
                    <img src="images/08f6f1b1-901f-4c0a-adc9-cb44b95f8990.png" alt="Screenshot of iPhone App" className="mask-img" />
                  </div>
                </div>
                <div className="iphoneandroid2-iphone">
                  <div className="mask">
                    <img src="images/05f6af76-0e4d-4e88-a8c2-c36837f8f5c4.png" alt="Screenshot of Android App" className="mask-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PRICING
  <section class="section fuschia-white">
    <div class="container text-center">
      <div class="col-12">
        <h4 class="heading primary-color">All you need with HODL tier. Do even more with HODL Plus.</h4>
        <p class="paragraph secondary-color mt20"></p>
      </div>
    </div>
    <div class="container mt75">
      <div class="col-12">
        <div class="card flex mobile-flex-wrap">
          <div class="col-6 flex flex-column spread pad30">
            <div class="mb20">
              <p class="bold primary-color">HODL</p>
              <b class="heading primary-color">Free!</b>
              <span class="paragraph secondary-color"></span>
              <ul class="mt20">
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Poloniex, Binance &amp; Bitfinex integrations</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Daily portfolio resolution</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Track up to 4 currencies</span>
                </li>
              </ul>
            </div>
            <a id="signup" class="button mt10 button__full primary-color accent-bg">
              <span> Sign Up! </span>
            </a>
          </div>
          <div class="col-6 flex flex-column spread pad30">
            <div class="mb20">
              <p class="bold primary-color">HODL Plus</p>
              <b class="heading primary-color">$8.99</b>
              <span class="paragraph secondary-color">Monthly</span>
              <ul class="mt20">
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Poloniex, Binance &amp; Bitfinex integrations</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">5-minute portfolio resolution</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Track unlimited currencies</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Live updating dashboard</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">View account withdrawals and deposits</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Price alerts</span>
                </li>
                <li class="flex mb20">
                  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="svg-fill noshrink mr20">
                    <g transform="translate(4.000000, 5.000000)">
                      <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z"></path>
                    </g>
                  </svg>
                  <span class="span secondary-color">Cost-basis charts</span>
                </li>
              </ul>
            </div>
            <a id="signup" class="button mt10 button__full primary-color accent-bg">
              <span> Sign Up! </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
*/}
        {/* TAKE IT FOR A SPIN DEMO
  <section class="section fuschia-gradient background">
    <div class="bg">
      <div class="bg-image" style="background-image: url(&quot;https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNDY1fQ&amp;s=fa7cd259f8cce9ef65e21c5cc408dda1&quot;);"></div>
      <a href="https://unsplash.com/@jareeign?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from jareeign"
        class="bg-author" style="background-color: black; color: white; text-decoration: none; padding: 4px 6px; font-family: -apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 12px; font-weight: bold; line-height: 1.2; display: inline-block; border-radius: 3px;">
        <span style="display: inline-block; padding: 2px 3px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="height: 12px; width: auto; position: relative; vertical-align: middle; top: -1px; fill: white;">
            <title></title>
            <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
          </svg>
        </span>
        <span style="display: inline-block; padding: 2px 3px;">John Reign Abarintos </span>
      </a>
    </div>
    <div class="container text-center">
      <div class="col-12">
        <h4 class="heading-lrg primary-color">Take it for a spin!</h4>
        <div class="mt40">
          <a href="/demo" target="_blank" class="button mt10 primary-color accent-bg">
            <span> Enter Demo </span>
          </a>
        </div>
      </div>
    </div>
  </section>
*/}
        {/* FAQ */}
        <section className="section black-white">
          <div className="container text-center">
            <div className="col-12">
              <h3 className="heading primary-color">
                FAQ
              </h3>
              <p className="subheading secondary-color mt20">Can't find an answer? Feel free to contact us!</p>
            </div>
          </div>
          <div className="container mt40">
            <div className="col-12">
              <div className="faq pad20">
                <input id="faq-0" type="checkbox" name="faq" className="faq-input" />
                <label htmlFor="faq-0" className="faq-label flex spread center-horizontal">
                  <span className="bold primary-color mr20">How does BlockZeus work?</span>
                  <svg width="15px" height="9px" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <path d="M7.4176407,5.65342711 L1.76421359,8.8817842e-16 L0.350000024,1.41421356 L6.00342714,7.06764068 L6,7.07106781 L7.41421356,8.48528137 L7.4176407,8.48185424 L7.42106784,8.48528137 L8.8352814,7.07106781 L8.83185426,7.06764068 L14.4852814,1.41421356 L13.0710678,8.8817842e-16 L7.4176407,5.65342711 Z" />
                  </svg>
                </label>
                <p className="paragraph secondary-color faq-content mt20">
                  BlockZeuz works by connecting your exchange account via an API key and/or secret provided by the exchange. This allows the
                  exchange to export your portfolio to BlockZeus, where it can then provide detailed charts and performance metrics.
                </p>
              </div>
              <div className="faq pad20">
                <input id="faq-1" type="checkbox" name="faq" className="faq-input" />
                <label htmlFor="faq-1" className="faq-label flex spread center-horizontal">
                  <span className="bold primary-color mr20">Where can I find my API key?</span>
                  <svg width="15px" height="9px" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <path d="M7.4176407,5.65342711 L1.76421359,8.8817842e-16 L0.350000024,1.41421356 L6.00342714,7.06764068 L6,7.07106781 L7.41421356,8.48528137 L7.4176407,8.48185424 L7.42106784,8.48528137 L8.8352814,7.07106781 L8.83185426,7.06764068 L14.4852814,1.41421356 L13.0710678,8.8817842e-16 L7.4176407,5.65342711 Z" />
                  </svg>
                </label>
                <p className="paragraph secondary-color faq-content mt20">
                  Each exchange does it a little different. That's why BlockZeus will guide you through proper set up once you sign up. For
                  those still interested, you can learn more about Poloniex here: https://poloniex.com/apiKeys.
                </p>
              </div>
              <div className="faq pad20">
                <input id="faq-2" type="checkbox" name="faq" className="faq-input" />
                <label htmlFor="faq-2" className="faq-label flex spread center-horizontal">
                  <span className="bold primary-color mr20">What about security?</span>
                  <svg width="15px" height="9px" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <path d="M7.4176407,5.65342711 L1.76421359,8.8817842e-16 L0.350000024,1.41421356 L6.00342714,7.06764068 L6,7.07106781 L7.41421356,8.48528137 L7.4176407,8.48185424 L7.42106784,8.48528137 L8.8352814,7.07106781 L8.83185426,7.06764068 L14.4852814,1.41421356 L13.0710678,8.8817842e-16 L7.4176407,5.65342711 Z" />
                  </svg>
                </label>
                <p className="paragraph secondary-color faq-content mt20">
                  Each API key from all exchanges offer different permissions. BlockZeus highly recommends users giving API keys read-only
                  access, so no currency can be traded or sent to other addresses. You will generate a new API key for BlockZeus
                  to use — to revoke access, simply delete your API key from your exchange account.
                </p>
              </div>
              <div className="faq pad20">
                <input id="faq-3" type="checkbox" name="faq" className="faq-input" />
                <label htmlFor="faq-3" className="faq-label flex spread center-horizontal">
                  <span className="bold primary-color mr20">Which exchanges can I connect to?</span>
                  <svg width="15px" height="9px" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <path d="M7.4176407,5.65342711 L1.76421359,8.8817842e-16 L0.350000024,1.41421356 L6.00342714,7.06764068 L6,7.07106781 L7.41421356,8.48528137 L7.4176407,8.48185424 L7.42106784,8.48528137 L8.8352814,7.07106781 L8.83185426,7.06764068 L14.4852814,1.41421356 L13.0710678,8.8817842e-16 L7.4176407,5.65342711 Z" />
                  </svg>
                </label>
                <p className="paragraph secondary-color faq-content mt20">
                  BlockZeus currently only supports Poloniex. Binance and Bitfinex are the next exchanges on our list. Add yourself to our
                  email list to find out when new exchange integrations are added!
                </p>
              </div>
              <div className="faq pad20">
                <input id="faq-4" type="checkbox" name="faq" className="faq-input" />
                <label htmlFor="faq-4" className="faq-label flex spread center-horizontal">
                  <span className="bold primary-color mr20">Is it dangerous to give API access to my exchange account?</span>
                  <svg width="15px" height="9px" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" className="noshrink svg-fill">
                    <path d="M7.4176407,5.65342711 L1.76421359,8.8817842e-16 L0.350000024,1.41421356 L6.00342714,7.06764068 L6,7.07106781 L7.41421356,8.48528137 L7.4176407,8.48185424 L7.42106784,8.48528137 L8.8352814,7.07106781 L8.83185426,7.06764068 L14.4852814,1.41421356 L13.0710678,8.8817842e-16 L7.4176407,5.65342711 Z" />
                  </svg>
                </label>
                <p className="paragraph secondary-color faq-content mt20">
                  The Poloniex API is structured so that you can provide restricted API access to your account. When you disable 'Withdrawal'
                  and 'Trading' API access (which you will do as part of your account setup), BlockZeus can only import your information
                  as read-only. We can't trade on your behalf or withdraw funds from your account. Other exchanges like Binance
                  and Bitfinex work in similar manners. Learn more here: https://github.com/binance-exchange/binance-official-api-docs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL SIGN UP */}
        <section className="section fuschia-black">
          <div className="container text-center">
            <div className="col-12">
              <h4 id="calltoaction" className="heading primary-color">Jump into your new portfolio manager today.</h4>
              <p className="paragraph mt20 secondary-color">We all hate spam. You won't get any from us.</p>
              <div className="mt40">
                <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate="novalidate" className="container-sml mailchimp flex mb20">
                  <input type="email" id="mce-EMAIL" placeholder="Enter your email address" required="required" className="mailchimp-input mobile-text-center" />
                  {/* <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_3198ee66c8baf4d60aa2fee6b_d60e1830e8" tabIndex={-1} />
                      </div> */}
                  <a href="/register" type="button" id="mc-embedded-subscribe" className="button no-max-width primary-color accent-bg" defaultValue="Sign Up">Sign Up</a>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="section text-center black-gradient" style={{ padding: 100 }}>
          <div className="container col-12">
            <nav className="mb50">
              <a href="#" className="nav-link secondary-color">Terms</a>
              <a href="#" className="nav-link secondary-color">Privacy</a>
              <a href="#" className="nav-link secondary-color">Careers</a>
              <a href="mailto:contact@blockzeus.com" className="nav-link secondary-color">Contact</a>
            </nav>
            <div className="mt50">
              <span className="span secondary-color">©</span>
              <span className="span secondary-color">BlockZeus Technologies 2018</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default LandingPage;
