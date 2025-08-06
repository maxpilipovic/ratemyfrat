import React from 'react';

const Privacy = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
            <div className="prose max-w-4xl mx-auto">
                <p>
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <p>
                    We may collect personal information such as your name, email address, and university affiliation when you register or submit a review. We also collect non-personal information, such as your IP address and browser type, for analytical purposes.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p>
                    We use your information to operate and improve our services, to personalize your experience, and to communicate with you. We will not share your personal information with third parties without your consent, except as required by law.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Cookies</h2>
                <p>
                    We use cookies to enhance your experience on our site. You can disable cookies in your browser settings, but some features of the site may not function properly.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
                <p>
                    We take reasonable measures to protect your personal information from unauthorized access or disclosure.
                </p>

                <h2 className="text-2xl font-semibold mt-6">5. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our site.
                </p>
            </div>
        </div>
    );
}

export default Privacy;
