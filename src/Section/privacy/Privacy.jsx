import React from "react";
import "./Privacy.scss";
const Privacy = () => {
  return (
    <div className="privcont">
      <div className="privacy-title">Privacy Policy</div>
      <div className="priv">
        <div className="priv-title">Who we are</div>
        <div className="priv-sub">
          Our website address is : https://marketing-kotawisata.id/
        </div>
      </div>
      <div className="priv">
        <div className="priv-title">Cookies</div>
        <div className="priv-sub">
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser.
        </div>
      </div>
      <div className="priv">
        <div className="priv-title">Embedded content from other websites</div>
        <div className="priv-sub">
          Articles on this site may include embedded content (e.g. videos,
          images, articles, etc.). Embedded content from other websites behaves
          in the exact same way as if the visitor has visited the other website.
          <br />
          hese websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with
          that embedded content, including tracking your interaction with the
          embedded content if you have an account and are logged in to that
          website.
        </div>
      </div>
      <div className="priv">
        <div className="priv-title">Website Legal Rights</div>
        <div className="priv-sub">
          With a strict verification process, we collaborate only with reputable
          developers and vendors, ensuring that all documentation complies with
          legal standards. Our commitment to accuracy and legality means that
          you can browse, invest, and purchase properties with complete peace of
          mind
        </div>
      </div>
    </div>
  );
};

export default Privacy;
