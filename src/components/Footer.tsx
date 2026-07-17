export default function Footer() {
  return (
    <div className="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p className="text-13">
      <span className="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong className="font-semibold">a1cc24b17e90f7a0</strong></span>
      <span className="cf-footer-separator sm:hidden">•</span>
      <span id="cf-footer-item-ip" className="cf-footer-item sm:block sm:mb-1">
        Your IP:
        <button type="button" id="cf-footer-ip-reveal" className="cf-footer-ip-reveal-btn">Click to reveal</button>
        <span className="hidden" id="cf-footer-ip">186.114.53.175</span>
        <span className="cf-footer-separator sm:hidden">•</span>
      </span>
      <span className="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing" id="brand_link" target="_blank">Cloudflare</a></span>
      
    </p>
    
  </div>
  );
}
