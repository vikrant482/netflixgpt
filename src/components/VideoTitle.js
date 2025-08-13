// VideoTitle.jsx
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-1/3 left-12 max-w-xl text-white z-10">
            <h1 className="text-5xl font-bold drop-shadow-lg">{title}</h1>
            <p className="mt-4 text-lg text-gray-200 drop-shadow-md">{overview}</p>
            <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition">
                    ▶ Play
                </button>
                <button className="px-6 py-2 bg-gray-700 bg-opacity-80 text-white font-semibold rounded hover:bg-gray-600 transition">
                    ℹ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
