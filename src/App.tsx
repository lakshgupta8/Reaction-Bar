import { useState } from 'react';
import { ReactionBar } from './components/ReactionBar';

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1234);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex justify-center items-center bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 w-full min-h-screen">
      {/* Phone-like container for context (optional, but looks nice) */}
      <div className="relative">
        {/* Mock Instagram Post Image Placeholder */}
        <div className="relative flex flex-col bg-white shadow-2xl rounded-3xl w-[350px] md:w-[400px] h-auto min-h-[500px] overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-4 border-gray-100 border-b h-16">
            <div className="flex items-center gap-2">
              <div className="bg-linear-to-tr from-pink-500 to-indigo-500 rounded-full w-8 h-8" />
              <span className="font-semibold text-sm">beautiful_destinations</span>
            </div>
          </div>

          {/* Image Area */}
          <div className="group relative bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cinque Terre"
              className="w-full object-contain"
            />
          </div>

          {/* Reaction Bar Area - Overlaying or below? 
                Let's put the reaction bar floating at the bottom or just inline.
                The prompt asked for a reaction bar, usually it's below the image. 
                I will place it in the bottom section of this mock "phone" or just present it cleanly.
                I'll put it cleanly below the post content for interaction availability.
            */}
          <div className="p-4">
            <ReactionBar isLiked={isLiked} onLikeToggle={toggleLike} />
            <div className="space-y-1 mt-3">
              <p className="font-semibold text-sm">{likeCount.toLocaleString()} likes</p>
              <p className="text-sm"><span className="font-semibold">beautiful_destinations</span> Sunset in Cinque Terre 🇮🇹✨</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
