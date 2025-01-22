import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="max-w-4xl  mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Contact Portal</h1>
            <p className="text-xl text-gray-600 mb-8">
                Get in touch with us. We'd love to hear from you!
            </p>
            <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Contact Us Now
            </Link>
        </div>
    );
};

export default HomePage;