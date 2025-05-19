import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyiLzEKSQWQbz6T2mutgh8_aceymyHKycR8Z9orzsqKjFS8JkfXV5-XFnm0E7_VIv-nlQ/exec';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  useEffect(() => {
    // GSAP animations for the Contact section triggered on scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Animate form and info panels
    gsap.fromTo(
      '.contact-form',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%',
        }
      }
    );
    
    gsap.fromTo(
      '.contact-info',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response);
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error!', error.message);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        // Clear status after a delay
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-zinc-900 relative w-full">
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-cornflower/5 rounded-full blur-[100px]"></div>
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Get In Touch</h2>
          <div className="w-20 h-1 bg-cornflower mb-4 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below or through my contact information.
          </p>
        </div>
        
        <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form bg-zinc-800/30 glass-effect rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cornflower"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cornflower"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cornflower"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cornflower resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-gradient-blue text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-cornflower/20 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md text-green-300">
                  Your message has been sent successfully. I'll respond as soon as possible!
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div className="bg-zinc-800/30 glass-effect rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-700 rounded-full p-3 flex-shrink-0">
                    <Mail className="h-5 w-5 text-cornflower" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-cornflower transition-colors">ojha.sangya25@gmail.com</a>
                  </div>
                </div>
                
                {/* <div className="flex items-start gap-4">
                  <div className="bg-zinc-700 rounded-full p-3 flex-shrink-0">
                    <Phone className="h-5 w-5 text-cornflower" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-white hover:text-cornflower transition-colors">+1 (234) 567-890</a>
                  </div>
                </div> */}
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-700 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-cornflower" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-white">Ghaziabad, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-zinc-800/30 glass-effect rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/sangya-ojha-7a58a22a3/" className="bg-zinc-700 hover:bg-zinc-600 transition-colors p-3 rounded-full text-white hover:text-cornflower">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="https://github.com/sangya-25" className="bg-zinc-700 hover:bg-zinc-600 transition-colors p-3 rounded-full text-white hover:text-cornflower">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://x.com/sangya_ojha?s=09" className="bg-zinc-700 hover:bg-zinc-600 transition-colors p-3 rounded-full text-white hover:text-cornflower">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;