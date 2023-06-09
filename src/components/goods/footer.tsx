import { Logo } from "../common/logo/logo";
import { Social } from "../common/social/social";

function Footer() {


  return (
    <footer className="footer">
      <div className="footer__wrapper m-box">

        <div className='footer__row'>
          <Logo logo="HitShop" />
          <div className='footer__col'>
            <Social></Social>
            <p>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
