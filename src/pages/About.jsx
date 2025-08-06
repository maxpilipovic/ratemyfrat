import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">About RateMyFrat</h1>
            <div className="max-w-4xl mx-auto text-lg text-gray-700">
                <p className="mb-4">
                    Welcome to RateMyFrat, the premier platform for students to discover, rate, and review fraternities across the nation. Our mission is to provide transparency and authentic insights into Greek life, helping students make informed decisions about which fraternity is the right fit for them.
                </p>
                <p className="mb-4">
                    At RateMyFrat, we believe that choosing a fraternity is a significant decision that can shape a student's college experience and beyond. We aim to build a community-driven platform where members can share their experiences and opinions honestly and respectfully.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">What We Do</h2>
                <p className="mb-4">
                    Our platform allows users to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Read and write reviews on fraternities at various universities.</li>
                    <li>View rankings based on user-submitted ratings.</li>
                    <li>Get an inside look at fraternity culture, social life, philanthropy, and more.</li>
                    <li>Contribute to a growing database of information to help fellow students.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Our Commitment</h2>
                <p>
                    We are committed to fostering a respectful and constructive environment. All reviews are moderated to ensure they meet our community guidelines, and we do not tolerate hate speech, bullying, or false information. Our goal is to be the most trusted resource for fraternity life.
                </p>
            </div>
        </div>
    );
}

export default About;

