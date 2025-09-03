import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">&copy; Student Cabinet / ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">WHATSAPP</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">LINKEDIN</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">
            {/* GitHub Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.42 0-9.75 4.33-9.75 9.75 0 4.28 2.76 7.91 6.6 9.21.48.09.66-.21.66-.46 0-.23-.01-1.05-.01-1.92-2.7-.59-3.27-1.3-3.27-1.3-.44-1.12-1.07-1.42-1.07-1.42-.87-.59.07-.58.07-.58.96.07 1.46.99 1.46.99.85 1.45 2.23 1.03 2.78.79.09-.61.33-1.03.6-1.27-2.11-.23-4.33-1.05-4.33-4.7C7.03 8.35 7.82 7.55 8.46 7.02c-.09-.23-.39-1.18.09-2.45 0 0 1-.31 3.27.98.96-.27 1.98-.4 3-.4.73 0 1.45.1 2.15.29 2.27-1.29 3.27-.98 3.27-.98.48 1.27.18 2.22.09 2.45.64.53 1.43 1.33 1.43 3.32 0 3.66-2.22 4.47-4.33 4.7.35.3.66.88.66 1.77 0 1.28-.01 2.31-.01 2.62 0 .25.18.55.66.46C20.02 19.86 22.76 16.23 22.76 12c0-5.42-4.33-9.75-9.75-9.75z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">
            {/* Instagram Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
            </svg>
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">
            {/* Discord Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.222 1.344C18.664 0.448 16.992 0 15.253 0H8.747C7.008 0 5.336 0.448 3.778 1.344C1.868 2.479 0.428 4.295 0 6.378L1.678 7.378C2.102 5.617 3.228 4.192 4.678 3.25C6.014 2.417 7.427 2 8.747 2H15.253C16.573 2 17.986 2.417 19.322 3.25C20.772 4.192 21.898 5.617 22.322 7.378L24 6.378C23.572 4.295 22.132 2.479 20.222 1.344ZM8.5 10C7.395 10 6.5 10.895 6.5 12C6.5 13.105 7.395 14 8.5 14C9.605 14 10.5 13.105 10.5 12C10.5 10.895 9.605 10 8.5 10ZM15.5 10C14.395 10 13.5 10.895 13.5 12C13.5 13.105 14.395 14 15.5 14C16.605 14 17.5 13.105 17.5 12C17.5 10.895 16.605 10 15.5 10ZM12 16.5C10.219 16.5 8.728 15.658 7.514 14.35C6.58 15.011 5.864 15.688 5.163 16.387L4.17 17.38C5.239 18.067 6.402 18.611 7.643 19C8.82 19.375 10.301 19.5 12 19.5C13.699 19.5 15.18 19.375 16.357 19C17.598 18.611 18.761 18.067 19.83 17.38L18.837 16.387C18.136 15.688 17.42 15.011 16.486 14.35C15.272 15.658 13.781 16.5 12 16.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <div>
          <p className="text-gray-400">DESIGN & DEVELOPED BY PRABHDEEP SINGH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;