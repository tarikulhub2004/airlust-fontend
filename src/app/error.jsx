'use client'

const error = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold text-red-500">
                    Something went wrong!
                </h1>

                <p className="mt-4 text-gray-500">
                    An unexpected error occurred.
                </p>

            </div>
        </div>
    );
};

export default error;