import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";


export const getImage = graphql`
{
    file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`


const Navbar = () => {
  const response = useStaticQuery(getImage);
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      {" "}
      <div className={styles.navCenter}>
        {" "}
        <div className={styles.navHeader}>
          <Link to="/">
            <Img
              fluid={response.file.childImageSharp.fluid}
              className={styles.brandLogo}
              alt="poweralpha"
            />
          </Link>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>{" "}
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {" "}
          {links.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <Link to={item.path}>{item.text}</Link>{" "}
              </li>
            )
          })}
        </ul>
      </div>{" "}
    </nav>
  )
}
export default Navbar
