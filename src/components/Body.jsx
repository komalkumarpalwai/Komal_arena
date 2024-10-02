import React from 'react';
import './Navbar.css';

const Body = () => {
    const projects = [
        {
            id: 1,
            title: 'Salon By pkS',
            name: 'Salon By pk',
            imgSrc: 'salon.png', 
            siteUrl: 'https://salon-shop.onrender.com/', 
        },
        {
            id: 2,
            title: 'a farm web',
            name: 'Farm web',
            imgSrc: 'farm.png', 
            siteUrl: 'https://fram-web.onrender.com',
        },
        {
            id: 3,
            title: 'Loan app',
            name: 'Loan app',
            imgSrc: 'loan.png', 
            siteUrl: 'https://example.com', 
        },
    ];

    return (
      <>  <div className="flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Designer, Frontend Developer & SMM</h1>
            <p className="text-base md:text-lg text-black mt-4 max-w-md">
                I bring ideas to life with thoughtful design, solid coding, and effective project management.
            </p>
            <img 
                src="iqoo.jpg" 
                alt="" 
                className="rounded-full w-48 h-48 md:w-64 md:h-64 mb-4 shadow-lg mt-12" 
            />
        </div>
        <div className="w-full flex items-center justify-center bg-gray-100 p-14 introduction">
            <div className="text-center">
                <h2 className="text-2xl font-bold  mb-2">Hi, I’m Komal kumar. Nice to meet you.</h2>
                <p className="text-lg ">
                a recent graduate with a strong interest in frontend development. I’ve spent the last year learning and experimenting  <br />
                 with different web technologies, and I’m eager to apply my skills in a professional setting. I’m naturally curious and <br /> always looking to expand my knowledge in the ever-evolving tech landscape.
                </p>
            </div>
        </div>
        <div className='h-64 w-full introduction'></div>
<div className="skills p-4">
    <h2 className="text-2xl font-bold text-center mb-6">My Recent Work</h2>
    <div className="flex justify-center flex-wrap">
        {projects.map((project) => (
            <div key={project.id} className="relative m-4">
                <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="rounded-lg w-64 h-64 transition-transform transform hover:scale-105"
                />
                <div className="mt-2 text-center text-lg font-semibold">{project.title}</div>
                <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                    Visit Site
                </a>
            </div>
        ))}
    </div>

    {/* Links Section */}
    <div className="mt-8 flex flex-col items-center">
    <div className="flex space-x-4 mb-4">
        <a
            href="https://www.linkedin.com/in/komal-reddy-palwai-816824266/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black hover:text-orange-500 transition-colors"
        >
            <i className="fab fa-linkedin mr-1 social"></i>
            LinkedIn
        </a>
        <a
            href="https://github.com/komalkumarpalwai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black hover:text-orange-500 transition-colors "
        >
            <i className="fab fa-github mr-1 social"></i>
            GitHub
        </a>
        <a
            href="https://leetcode.com/u/komalreddypalwai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black hover:text-orange-500 transition-colors"
        >
            <i className="fab fa-leetcode mr-1 social" ></i>
            LeetCode
        </a>
    </div>
    <a
        href="/path/to/your/resume.pdf" // Replace with your resume file path
        download
        className="contact py-2 px-4 rounded hover:bg-blue-500 transition-colors"
    >
        Download Resume
    </a>
</div>

</div>
<div className='w-full h-64 bg-white flex flex-col items-center justify-center'>
    <h2 className='text-black text-3xl font-bold'>Professional Skills</h2>
    <p className='text-black text-lg mt-2 text-center'>Living, learning, & leveling up one day at a time.</p>
</div>

<div className="skill-section p-4 bg-white">
    <div className="flex justify-center flex-wrap mt-4">
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/html.png" 
                alt="HTML"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">HTML</span>
        </div>
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/css.png" 
                alt="CSS"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">CSS</span>
        </div>
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/js.png" 
                alt="JavaScript"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">JavaScript</span>
        </div>
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/py.png" 
                alt="Python"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">Python</span>
        </div>
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/nodejs.png" 
                alt="Node.js"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">Node.js</span>
        </div>
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/tailwindcss.avif" 
                alt="Tailwind CSS"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">Tailwind CSS</span>
        </div>
        <div className="skill-item m-4 flex flex-col items-center">
            <img
                src="skills/reactjs.png" 
                alt="React.js"
                className="w-16 h-16 mb-2"
            />
            <span className="text-xl text-center text-black">React.js</span>
        </div>
    </div>
</div>
<div className='h-64 w-full introduction'></div>
<div className='skills bg-white p-4'>
  <h2 className='text-3xl font-bold text-center mb-6'>My Services</h2>
  <p className='text-center text-gray-600 mb-4'>
    Here’s a list of services I can provide. Get in touch if you need any help or have any questions!
  </p>
  <div className="flex flex-wrap justify-center">
    {[
      { imgSrc: 'services/fd.png', alt: 'Web Development', name: 'Frontend Development' },
      { imgSrc: 'services/design.png', alt: 'Designer', name: 'Designer' },
      { imgSrc: 'services/mern.jpeg', alt: 'MERN Stack', name: 'MERN Stack' },
      { imgSrc: 'services/PowerBI.png', alt: 'Power BI & Tableau', name: 'Power BI & Tableau' },
      { imgSrc: 'services/db.jpg', alt: 'DBMS', name: 'DBMS' },
      { imgSrc: 'services/smm.jpg', alt: 'Social Media Manager', name: 'Social Media Manager' },
    ].map((service, index) => (
      <div key={index} className='flex flex-col items-center m-4 w-1/3'>
        <img
          src={service.imgSrc}
          alt={service.alt}
          className='w-24 h-24 mb-2 shadow' 
        />
        <span className='text-lg text-center text-black'> 
          {service.name}
        </span>
      </div>
    ))}
  </div>
</div>

<div className='collaboration-container bg-white p-6 rounded-lg shadow-lg text-center mt-28'>
  <h2 className='text-3xl font-bold text-black mb-4'>Interested in Collaborating with Me?</h2>
  <h3 className='text-2xl font-semibold text-gray-700 mb-4'>
    I’m always open to discussing product design work or partnership opportunities.
  </h3>
  <div className='flex flex-col items-center workwithme'>
    <i className='fas fa-envelope text-orange-500 text-4xl mb-2'></i>
    <a
      href='/contact' // Change this to your actual contact page link
      className=' text-black py-2 px-4 rounded contact transition duration-300'
    >
      Contact Me
    </a>
  </div>
</div>
<footer className='h-96 text-white  p-6 flex flex-col items-center justify-between footer'>
  {/* Logo Section */}
  <div className='flex flex-col items-center mb-4'>
    <img src='logo.jpg' alt='Logo' className='h-16 mb-2' /> {/* Adjust logo path */}
    <p className='text-lg italic'>Living, learning, & leveling up one day at a time.</p>
  </div>

 {/* Social Media Icons */}
<div className='flex space-x-6 mb-4 icons'>
  <a href='https://www.instagram.com/soul_komal' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-instagram text-xl transition duration-300 transform hover:text-orange-500 hover:scale-110'></i>
  </a>
  <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-twitter text-xl transition duration-300 transform hover:text-orange-500 hover:scale-110'></i>
  </a>
  <a href='https://www.linkedin.com/in/komal-reddy-palwai-816824266/' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-linkedin text-xl transition duration-300 transform hover:text-orange-500 hover:scale-110'></i>
  </a>
  <a href='https://github.com/komalkumarpalwai' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-github text-xl transition duration-300 transform hover:text-orange-500 hover:scale-110'></i>
  </a>
  <a href='mailto:komalreddypalwai@example.com'>
    <i className='fas fa-envelope text-xl transition duration-300 transform hover:text-orange-500 hover:scale-110'></i>
  </a>
</div>

  {/* Footer Text */}
  <div className='text-center'>
    <p>Designed by Komal Palwai</p>
    <p>Made with ReactJS and Tailwind CSS</p>
  </div>
 
</footer>


        </>
    );
}

export default Body;
