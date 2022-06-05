import React from "react";

const Footer = () => {
  return (
    <div className='footer mt-3'>
      <footer className='text-center text-lg-start bg-dark'>
        <div
          className='text-center text-white p-3'
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
        >
          © 2022 No Copyright{' '}
          <a className='text-white' href='https://github.com/studnil4u/mern-movie-booking-app' target='_blank' rel="noreferrer">
            Niloy Saha
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;