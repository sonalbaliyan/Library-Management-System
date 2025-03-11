import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import "./GithubButton.css";

function GithubButton() {
  return (
    <Button
      className="github-btn"
      href=""
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} className="github-icon" />
      <span>Star this Repo</span>
    </Button>
  );
}

export default GithubButton;
