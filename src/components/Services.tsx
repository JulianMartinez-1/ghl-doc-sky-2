export default function Services() {
  return (
    <div id="cf-error-details" className="cf-error-details-wrapper">
      <div className="cf-wrapper cf-header cf-error-overview">
        <h1 data-translate="block_headline">Sorry, you have been blocked</h1>
        <h2 className="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> vibepreview.com</h2>
      </div>

      <div className="cf-section cf-highlight">
        <div className="cf-wrapper">
          <div className="cf-screenshot-container cf-screenshot-full">
            
              <span className="cf-no-screenshot error"></span>
            
          </div>
        </div>
      </div>

      <div className="cf-section cf-wrapper">
        <div className="cf-columns two">
          <div className="cf-column">
            <h2 data-translate="blocked_why_headline">Why have I been blocked?</h2>

            <p data-translate="blocked_why_detail">This website is using a security service to protect itself from online attacks. The action you just performed triggered the security solution. There are several actions that could trigger this block including submitting a certain word or phrase, a SQL command or malformed data.</p>
          </div>

          <div className="cf-column">
            <h2 data-translate="blocked_resolve_headline">What can I do to resolve this?</h2>

            <p data-translate="blocked_resolve_detail">You can email the site owner to let them know you were blocked. Please include what you were doing when this page came up and the Cloudflare Ray ID found at the bottom of this page.</p>
          </div>
        </div>
      </div>

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

    </div>
  );
}
