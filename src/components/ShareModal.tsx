import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link, MessageCircle, Send, Share2, Mail } from 'lucide-react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
    const shareOptions = [
        { icon: <Link size={24} />, label: 'Copy link', color: 'bg-gray-100' },
        { icon: <Share2 size={24} />, label: 'Share to...', color: 'bg-gray-100' },
        { icon: <MessageCircle size={24} />, label: 'Messenger', color: 'bg-blue-100 text-blue-500' },
        { icon: <Send size={24} />, label: 'WhatsApp', color: 'bg-green-100 text-green-500' },
        { icon: <Mail size={24} />, label: 'Email', color: 'bg-red-100 text-red-500' },
    ];

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
                        className="md:top-1/2 right-0 bottom-0 md:bottom-auto left-0 md:left-1/2 z-50 fixed bg-white shadow-2xl p-6 md:rounded-2xl rounded-t-3xl md:w-[400px] md:-translate-x-1/2 md:-translate-y-1/2"
                    >
                        <div className="relative mb-6">
                            <h2 className="font-bold text-lg text-center">Share to</h2>
                            <button
                                onClick={onClose}
                                className="top-1/2 right-0 absolute hover:bg-gray-100 p-1 rounded-full transition-colors -translate-y-1/2"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="gap-4 grid grid-cols-4">
                            {shareOptions.map((option, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${option.color}`}>
                                        {option.icon}
                                    </div>
                                    <span className="text-gray-600 text-xs text-center">{option.label}</span>
                                </motion.button>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-gray-100 border-t">
                            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                                <div className="bg-gray-200 rounded-lg w-10 h-10 shrink-0" />
                                <div className="flex-1 overflow-hidden">
                                    <p className="font-semibold text-sm truncate">Amazing Post ✨</p>
                                    <p className="text-gray-500 text-xs truncate">instagram.com/p/Ck3...</p>
                                </div>
                                <button className="font-semibold text-blue-500 hover:text-blue-600 text-sm">
                                    Send
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
