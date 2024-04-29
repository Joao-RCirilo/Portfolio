import { GitHubIcon } from "../icons/github-icon"
import { InstaIcon } from "../icons/instagran-icon"
import { LinkedInIcon } from "../icons/linkedIn-icon"
import { TwitterIcon } from "../icons/twitter-icon"
import "./social-buttons.scss"

export function SocialButtons(){
    return(
        <div className="social">
            <a href="">
                <InstaIcon/>
            </a>
            <a href="">
                <LinkedInIcon/>
            </a>
            <a href="">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}