import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { EVENTS } from '../../data/eventData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileDropdown(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-pureWhite/55 backdrop-blur-xl shadow-lg shadow-black/10'
            : ''
        }`}
      >
        <div className={`relative px-5 md:px-8 xl:px-14 max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-5'
        }`}>
          <div className={`hidden xl:grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)] items-center justify-items-center transition-all duration-300 ${isScrolled ? 'gap-10' : 'gap-12'}`}>
            <Link
              to="/"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              HOME
            </Link>
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
                className={`flex items-center gap-2 font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute -left-36 top-full mt-4 w-[440px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-roseMist/40 p-4 transition-all duration-300 origin-top ${
                  activeDropdown
                    ? 'opacity-100 visible scale-y-100'
                    : 'opacity-0 invisible scale-y-95'
                }`}
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
              >
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-royalGold/30 via-royalGold to-royalGold/30 rounded-full" />
                <div className="grid grid-cols-2 gap-1.5 pt-3.5">
                  {EVENTS.map((event) => (
                    <Link
                      key={event.slug}
                      to={`/services/${event.slug}`}
                      className="relative rounded-xl px-3.5 py-2.5 hover:bg-roseMist/60 transition-all duration-200 group/item overflow-hidden"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-royalGold rounded-full group-hover/item:h-5 transition-all duration-200" />
                      <div className="text-sm font-serif font-semibold text-charcoal/90 group-hover/item:text-royalGold transition-colors pl-1.5">
                        {event.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/" className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/gemeni-namelogo-golden-removebg-preview_1_wgryid.svg"
                alt="Rachha logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              />
            </Link>
            <Link
              to="/gallery"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              CONTACT
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="absolute right-5 top-1/2 -translate-y-1/2 xl:hidden z-20 p-2 rounded-lg hover:bg-roseMist/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7 text-charcoal" /> : <Menu className="w-7 h-7 text-charcoal" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="fixed top-[76px] left-0 right-0 bottom-0 bg-pureWhite overflow-y-auto">
            <div className="px-5 py-6 space-y-3">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setActiveMobileDropdown((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown && (
                  <div className="mt-3 ml-4 space-y-1.5 bg-gradient-to-br from-roseMist/40 to-roseMist/20 rounded-2xl p-3">
                    {EVENTS.map((event) => (
                      <Link
                        key={event.slug}
                        to={`/services/${event.slug}`}
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2.5 text-[14px] font-serif font-semibold text-charcoal rounded-lg hover:bg-roseMist transition-colors tracking-wide"
                      >
                        {event.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/gallery"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
