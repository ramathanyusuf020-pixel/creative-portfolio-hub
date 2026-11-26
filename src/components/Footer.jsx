
function Footer() {
  return (
    <footer className="footer">
      <h3>Creative<span>Hub.</span></h3>

      <p>
        Creating meaningful digital experiences through code and creativity.
      </p>

      <p className="copyright">
        © {new Date().getFullYear()} Creative Portfolio Hub. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
