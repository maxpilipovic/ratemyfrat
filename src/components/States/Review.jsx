import React from 'react';
import fratReviewGif from '../../assets/animation.gif';

const ReviewSection = () => {

    return (
        <section className="py-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Write an Anonymous Review</h2>
                    <p className="text-gray-600 mb-6">
                        Share your experience at a college fraternity by writing a review.
                        Your reviews are <span className="font-semibold text-black">completely anonymous</span>.
                    </p>
                </div>

                {/* GIF */}
                <div className="flex justify-center">
                    <img
                        src={fratReviewGif}
                        alt="Review anonymously"
                        className="w-72 md:w-96 rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;