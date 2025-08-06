import React from 'react';

const Terms = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
            <div className="prose max-w-4xl mx-auto">
                <p>
                    Welcome to RateMyFrat. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
                <p>
                    By using this site, you signify your agreement to these terms. If you do not agree, please do not use the site.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. User Conduct</h2>
                <p>
                    You agree to use the site for lawful purposes only. You are prohibited from posting any content that is defamatory, obscene, or abusive. All user-submitted content must comply with our community guidelines.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Content and Intellectual Property</h2>
                <p>
                    All content on this site, including user-generated reviews, is the property of RateMyFrat. You may not reproduce, distribute, or create derivative works from this content without our express permission.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Disclaimers</h2>
                <p>
                    The opinions expressed on RateMyFrat are those of the users and not of RateMyFrat. We do not endorse any specific fraternity and are not responsible for the accuracy of user-submitted content.
                </p>

                <h2 className="text-2xl font-semibold mt-6">5. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Your continued use of the site following any changes constitutes your acceptance of the new terms.
                </p>
            </div>
        </div>
    );
}

export default Terms;