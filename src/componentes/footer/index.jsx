import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/sergyo93/">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/sergyo93">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/sergyo93/">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Sergyo</strong>
    </footer>
  );
};

export default Footer;
