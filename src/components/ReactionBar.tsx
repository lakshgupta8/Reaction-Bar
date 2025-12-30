import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { CommentModal } from './CommentModal';
import { ShareModal } from './ShareModal';

interface ReactionBarProps {
    isLiked: boolean;
    onLikeToggle: () => void;
}

export const ReactionBar = ({ isLiked, onLikeToggle }: ReactionBarProps) => {
    // const [isLiked, setIsLiked] = useState(false);  <-- Moved to parent
    const [isSaved, setIsSaved] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);

    // Animation variants for buttons
    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    };

    const heartVariants = {
        liked: { scale: [1, 1.2, 1], transition: { duration: 0.3 } },
        unliked: { scale: 1 },
    };

    const bookmarkVariants = {
        saved: { scale: [1, 1.2, 1], transition: { duration: 0.3 } },
        unsaved: { scale: 1 },
    };

    return (
        <>
            <div className="flex items-center gap-6">
                {/* Like Button */}
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={onLikeToggle}
                    className="relative focus:outline-none"
                >
                    <motion.div
                        variants={heartVariants}
                        animate={isLiked ? 'liked' : 'unliked'}
                    >
                        <Heart
                            size={28}
                            className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-800'
                                }`}
                        />
                    </motion.div>
                </motion.button>

                {/* Comment Button */}
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setShowComments(true)}
                    className="focus:outline-none"
                >
                    <MessageCircle size={28} className="text-gray-800 -scale-x-100" />
                </motion.button>

                {/* Share Button */}
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setShowShare(true)}
                    className="focus:outline-none"
                >
                    <Send size={28} className="mt-2 text-gray-800 -rotate-45" />
                </motion.button>

                {/* Spacer to push Save button to right if needed, or just keep equal spacing */}
                <div className="w-4" />

                {/* Save Button */}
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setIsSaved(!isSaved)}
                    className="ml-auto focus:outline-none"
                >
                    <motion.div
                        variants={bookmarkVariants}
                        animate={isSaved ? 'saved' : 'unsaved'}
                    >
                        <Bookmark
                            size={28}
                            className={`transition-colors duration-300 ${isSaved ? 'fill-black text-black' : 'text-gray-800'
                                }`}
                        />
                    </motion.div>
                </motion.button>
            </div>

            {/* Modals */}
            <CommentModal isOpen={showComments} onClose={() => setShowComments(false)} />
            <ShareModal isOpen={showShare} onClose={() => setShowShare(false)} />
        </>
    );
};
