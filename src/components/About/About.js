import React from 'react'
import * as styles from "../../css/contact.module.css"

const AboutComp = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.center}>
                <h3>About Us</h3>
                <p><i>The Power Alpha(PA)</i> is a place, where you will find all the resources to take your
                    Power Platform Power Apps Model Driven Apps and Canvas Apps to the next level. It contains full length blog series, with detailed
                    instruction to build production level PowerApps.
                </p>
                <p>We currently have blog series to build Power Apps Model Driven, Canvas Apps, Power Pages. Beside
                    that we have other series like of Canvas Apps, PCF, Power Automate, Power BI.
                </p>
                <p>This site is developed and maintained by RMSSoftwareTech. You can read more about us
                    site <a href="https://www.rmssoftwaretech.com/" target="_blank" rel="noopener noreferrer">RMSSoftwareTech</a>
                </p>
                <p>This site is currently in a transition mode, with blogs transferred everyday. You
                    can read all our blogs currently
                    at <a href="" target="_blank" rel="noopener noreferrer">RMSSoftwareTech</a>
                </p>
            </div>
        </section>
    )
}

export default AboutComp