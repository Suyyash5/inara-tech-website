import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

export const GetInTouchModal = ({ isOpen, onClose, defaultTopic = "General Inquiry" }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: defaultTopic,
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
            <div 
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0c142c] border border-cyan-500/20 rounded-3xl p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(124,219,0,0.15)]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Background ambient glow */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#7cdb00]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {submitted ? (
                    <div className="py-12 text-center space-y-4 animate-fade-up">
                        <CheckCircle2 className="w-16 h-16 text-[#7cdb00] mx-auto animate-bounce" />
                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                        <p className="text-gray-300 text-sm max-w-xs mx-auto">
                            Thank you for reaching out to INARA TECH. We'll get back to you shortly.
                        </p>
                    </div>
                ) : (
                    <div>
                        <div className="mb-6">
                            <span className="text-[#7cdb00] font-semibold text-xs tracking-wider uppercase">Let's Connect</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Start a Project with Us</h2>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                Tell us about your digital goals, and our technology experts will build a solution tailored for you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs text-gray-300 mb-1 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#7cdb00] transition-colors text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-gray-300 mb-1 font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="jane@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#7cdb00] transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-300 mb-1 font-medium">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Acme Inc."
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#7cdb00] transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-300 mb-1 font-medium">Interest Area</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-[#141e3c] border border-white/10 text-white focus:outline-none focus:border-[#7cdb00] transition-colors text-sm"
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Scalable Software">Scalable Software</option>
                                    <option value="AI Solutions">AI Solutions</option>
                                    <option value="Web Platforms">Web Platforms</option>
                                    <option value="Digital Products">Digital Products</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-300 mb-1 font-medium">Project Brief</label>
                                <textarea
                                    rows={3}
                                    required
                                    placeholder="Describe your vision or scope..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#7cdb00] transition-colors text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-xl bg-[#7cdb00] hover:bg-[#6ec200] text-black font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(124,219,0,0.3)] active:scale-[0.98]"
                            >
                                <Send className="w-4 h-4" />
                                Send Request
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
