interface NavLinkProps {
  onClick?: () => void;
}

const NavLinks = ({ onClick }: NavLinkProps) => {
  return (
    <>
      <li onClick={onClick}>
        <a href="#about">About</a>
      </li>
      <li onClick={onClick}>
        <a href="#work">Work</a>
      </li>
      <li onClick={onClick}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={onClick}>
        <a href="#education">Education</a>
      </li>
      <li onClick={onClick}>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
};

export default NavLinks;
