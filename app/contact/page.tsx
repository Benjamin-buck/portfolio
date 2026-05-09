"use client";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all duration-200";

  return (
    <main className="mb-16">
      <div className="mt-8 mx-4 md:mx-0 mb-10">
        <h1 className="text-3xl font-lexend font-bold">Contact</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Have a project in mind or just want to say hello? Fill out the form and I'll get back to you.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 mx-4 md:mx-0">
        {/* Form */}
        <div className="col-span-12 lg:col-span-7">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl border border-gray-100 bg-white shadow-sm">
              <FaCheckCircle className="text-cyan-400" size={40} />
              <h2 className="text-xl font-lexend font-bold text-gray-900">Message sent!</h2>
              <p className="text-gray-500 text-sm max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Benjamin Buck"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project enquiry, collaboration, etc."
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="button-style self-start disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col gap-6">
            <div>
              <h2 className="font-lexend font-bold text-base text-gray-900 mb-1">Get in touch</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                I'm always open to discussing new opportunities, freelance projects, or just connecting with people in the industry.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:thebenjaminalan@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors">
                  <FaEnvelope className="text-cyan-500" size={15} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold">Email</p>
                  <p className="text-sm text-gray-700 group-hover:text-black transition-colors">thebenjaminalan@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/benjamin-alan-buck-466514134/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <FaLinkedin className="text-blue-500" size={15} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold">LinkedIn</p>
                  <p className="text-sm text-gray-700 group-hover:text-black transition-colors">Benjamin Alan Buck</p>
                </div>
              </a>
              <a
                href="https://github.com/Benjamin-buck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                  <FaGithub className="text-gray-700" size={15} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold">GitHub</p>
                  <p className="text-sm text-gray-700 group-hover:text-black transition-colors">Benjamin-buck</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-8">
            <p className="text-sm text-cyan-800 leading-relaxed font-medium">
              Currently open to full-time, contract, and freelance opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
