const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 text-center">
            <h2 className="text-3xl font-bold text-[#a3d5a3] mb-4">Let’s Connect!</h2>
            <p className="mb-6 text-[#444]">Have a project or opportunity? I'd love to chat!</p>
            <a
                href="mailto:your.email@example.com"
                className="bg-[#90e0ef] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#00b4d8] transition"
            >
                Send a Message
            </a>
        </section>
    );
};

export default Contact;
