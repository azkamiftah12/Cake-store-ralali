import Link from 'next/link';
import '../app/404.css';

export default function Custom404() {
    return (
        <>
  <header class="top-header">
</header>

{/* <!--dust particel--> */}
<div>
  <div class="starsec"></div>
  <div class="starthird"></div>
  <div class="starfourth"></div>
  <div class="starfifth"></div>
</div>
{/* <!--Dust particle end---> */}


<div class="lamp__wrap">
  <div class="lamp">
    <div class="cable"></div>
    <div class="cover"></div>
    <div class="in-cover">
      <div class="bulb"></div>
    </div>
    <div class="light"></div>
  </div>
</div>
{/* <!-- END Lamp --> */}
<section class="error">
  {/* <!-- Content --> */}
  <div class="error__content">
    <div class="error__message message">
      <h1 class="message__title">Page Not Found</h1>
      <p class="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
    </div>
    <div class="error__nav e-nav">
      <Link href="/" target="_blanck" class="e-nav__link"></Link>
    </div>
  </div>
  {/* <!-- END Content --> */}

</section>
        </>
    )
  }