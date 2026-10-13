import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Button from '../components/Button';

function ContactInfoCard({ icon, label, value, href }) {
  return (
    <a href={href} className="flex items-start space-x-6 group">
      <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gold-500/10 transition-colors">
        {icon}
      </div>
      <div>
        <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">
          {label}
        </span>
        <span className="text-white text-lg font-light group-hover:text-gold-500 transition-colors">
          {value}
        </span>
      </div>
    </a>
  );
}

function FormField({ label, type, placeholder, value, onChange, disabled }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white/40 text-[10px] uppercase tracking-widest">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/10 text-white py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        disabled={disabled}
      />
    </div>
  );
}

export default function Talk() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Apartment",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx0ZZ17BqqZ1QL8heaVjXMlYy-MksQZ2yRiWU6bF3jk5On5Q0raDezb7l33wgnHx7OO/exec";

    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, val]) => {
        params.append(key, val);
      });

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString()
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Apartment",
        message: ""
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-990 pt-48 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
              Private Advisory
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
              Let's Design Your <br />
              <span className="text-gold-500 italic">Dubai Legacy.</span>
            </h1>
            <p className="text-white/60 text-lg font-light mb-12 max-w-lg leading-relaxed">
              Experience the pinnacle of real estate investment with personalized guidance tailored for the Indian elite. Confidentiality is our cornerstone.
            </p>

            <div className="space-y-8">
              <ContactInfoCard
                icon={<Phone className="text-gold-500" />}
                label="Direct Line 1"
                value="+91 97042 61646"
                href="tel:+919704261646"
              />
              <ContactInfoCard
                icon={<Phone className="text-gold-500" />}
                label="Direct Line 2"
                value="+91 70755 75249"
                href="tel:+917075575249"
              />
              <ContactInfoCard
                icon={<Mail className="text-gold-500" />}
                label="Private Email"
                value="invest@raajikaproperties.com"
                href="mailto:invest@raajikaproperties.com"
              />
              <ContactInfoCard
                icon={<MapPin className="text-gold-500" />}
                label="Global HQ"
                value="DIFC, Level 15, The Gate, Dubai, UAE"
                href="https://maps.google.com"
              />
            </div>

            <div className="mt-16">
              <a
                href="https://wa.me/919704261646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 transition-all group"
              >
                <MessageCircle className="text-[#25D366]" />
                <span className="text-white tracking-widest text-sm uppercase font-medium">
                  Quick Chat on WhatsApp
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full -z-10" />
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
              <h2 className="text-2xl font-serif text-white mb-8">
                Consultation Request
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    type="text"
                    placeholder="Arjun Kapoor"
                    value={formData.name}
                    onChange={(val) => setFormData({ ...formData, name: val })}
                    disabled={status === "submitting"}
                  />
                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="arjun@legacy.com"
                    value={formData.email}
                    onChange={(val) => setFormData({ ...formData, email: val })}
                    disabled={status === "submitting"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(val) => setFormData({ ...formData, phone: val })}
                    disabled={status === "submitting"}
                  />
                  <div className="flex flex-col space-y-2">
                    <label className="text-white/40 text-[10px] uppercase tracking-widest">
                      Interest In
                    </label>
                    <select
                      className="bg-transparent border-b border-white/10 text-white py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      disabled={status === "submitting"}
                    >
                      <option className="bg-luxury-900" value="Apartment">Luxury Apartment</option>
                      <option className="bg-luxury-900" value="Villa">Signature Villa</option>
                      <option className="bg-luxury-900" value="Plot">Strategic Plot</option>
                      <option className="bg-luxury-900" value="Commercial">Commercial Space</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-white/40 text-[10px] uppercase tracking-widest">
                    Investment Vision
                  </label>
                  <textarea
                    rows={4}
                    className="bg-transparent border-b border-white/10 text-white py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell us about your portfolio goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status === "submitting"}
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-4 flex items-center justify-center space-x-3"
                >
                  {status === "submitting" ? (
                    <span>Sending Request...</span>
                  ) : status === "success" ? (
                    <span className="text-green-400">Request Sent Successfully</span>
                  ) : status === "error" ? (
                    <span className="text-red-400">Error! Try Again</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      <span>Request Confidential Call</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* DIFC Gate Building Google Maps iframe */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 h-[400px] w-full grayscale contrast-125 brightness-75 rounded-sm overflow-hidden border border-white/5"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100244406!2d55.2797!3d25.2131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433777777777%3A0x7777777777777777!2sDIFC%20Gate%20Building!5e0!3m2!1sen!2sae!4v1621234567890!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="DIFC Gate Building Map"
          />
        </motion.div>
      </div>
    </div>
  );
}
