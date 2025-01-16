import "../../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero_main">
      <video className="video_background" autoPlay muted loop>
        <source src="/video/Yerevan-Allin-hero-Video.mp4" type="video/mp4" />
      </video>

      <div className="main_container_hero flex">
        <div className="flex flex-col justify-center gap-8">
          <h1>Allin.am – բազմաբնույթ ծառայություններ տրամադրող հարթակ</h1>
          <h2>
            Արագ ու հարմար ծառայություններ՝ առանց հերթերի և ժամանակի կորուստի
          </h2>
          <p>
            Մեր հիմնական նպատակը մատուցել է արագ և հարմար ծառայություններ, որոնք
            թույլ կտան օգտատերերին առանց հերթերի և ժամանակի կորուստի հասնել
            անհրաժեշտ փաստաթղթերին և լուծումներին։ Մեր հարթակը բիզնեսի և
            քաղաքացիների համար առաջարկում է նոտարիալ ու իրավաբանական
            ծառայությունները:
          </p>
        </div>
        <img
          src="/img/allin-hero-element.png"
          alt="Allin-all-in"
          className="img_hero_custom"
        />
      </div>
    </div>
  );
}
