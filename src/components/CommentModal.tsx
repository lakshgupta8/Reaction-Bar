import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Comment {
    id: number;
    username: string;
    text: string;
    time: string;
}

interface CommentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const mockComments: Comment[] = [
    { id: 1, username: 'johndoe', text: 'This is amazing! 🔥', time: '2m' },
    { id: 2, username: 'sarah_smith', text: 'Love the vibes ✨', time: '5m' },
    { id: 3, username: 'mike_design', text: 'So clean and smooth!', time: '12m' },
];

export const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose }) => {
    const [comments, setComments] = useState<Comment[]>(mockComments);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment: Comment = {
            id: Date.now(),
            username: 'you',
            text: newComment,
            time: 'Just now',
        };

        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="z-40 fixed inset-0 bg-black"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="md:top-1/2 right-0 bottom-0 md:bottom-auto left-0 md:left-1/2 z-50 fixed flex flex-col bg-white shadow-2xl md:rounded-2xl rounded-t-3xl md:w-[500px] h-[70vh] md:h-[600px] overflow-hidden md:-translate-x-1/2 md:-translate-y-1/2"
                    >
                        {/* Header */}
                        <div className="relative flex justify-center items-center p-4 border-gray-100 border-b">
                            <h2 className="font-bold text-lg">Comments</h2>
                            <button
                                onClick={onClose}
                                className="right-4 absolute hover:bg-gray-100 p-1 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Comments List */}
                        <div className="flex-1 space-y-4 p-4 overflow-y-auto">
                            {comments.map((comment) => (
                                <div key={comment.id} className="flex gap-3">
                                    <div className="bg-linear-to-tr from-yellow-400 to-orange-500 rounded-full w-8 h-8 shrink-0" />
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-sm">{comment.username}</span>
                                            <span className="text-gray-400 text-xs">{comment.time}</span>
                                        </div>
                                        <p className="text-gray-800 text-sm">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleAddComment} className="flex items-center gap-3 p-4 border-gray-100 border-t">
                            <div className="bg-gray-200 rounded-full w-8 h-8 shrink-0" />
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                                className="flex-1 outline-none placeholder:text-gray-400 text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!newComment.trim()}
                                className="disabled:opacity-50 font-semibold text-blue-500 hover:text-blue-600 text-sm transition-colors disabled:cursor-not-allowed"
                            >
                                Post
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
