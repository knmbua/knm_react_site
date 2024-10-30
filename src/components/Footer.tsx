function Footer() {
  const date = new Date();
  return (
      <footer>
          <p> &copy; Copyright {date.getFullYear()}  </p>
          <p> Designed & Developed by Kandyce Mbua</p>
      </footer>
  )

}

export default Footer;