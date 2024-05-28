import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import instagramLogo from "./assets/instagram.svg";
import xLogo from "./assets/x-twitter.svg";

export default function Socials() {
  return (
    <div className="w-full">
        <a
          className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-md mb-2 hover:scale-105 hover:bg-violet-200 transition-transform duration-300 ease-in-out"
          href="https://www.linkedin.com/in/zah-rainy-raushana-kuwada-257630265/"
          target="_blank"
        >
          <img className="w-6 h-6 mr-2" src={linkedinLogo} alt="LinkedIn logo" />
          LinkedIn
        </a>
        <a
          className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-md mb-2 hover:scale-105 hover:bg-violet-200 transition-transform duration-300 ease-in-out"
          href="https://github.com/zahrainy12"
          target="_blank"
        >
          <img className="w-6 h-6 mr-2" src={githubLogo} alt="GitHub logo" />
          GitHub
        </a>
        <a
          className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-md mb-2 hover:scale-105 hover:bg-violet-200 transition-transform duration-300 ease-in-out"
          href="https://instagram.com/sasaaaaz"
          target="_blank"
        >
          <img className="w-6 h-6 mr-2" src={instagramLogo} alt="Instagram logo" />
          Instagram
        </a>
        <a
          className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-md hover:scale-105 hover:bg-violet-200 transition-transform duration-300 ease-in-out"
          href="https://x.com/therightchoose"
          target="_blank"
        >
          <img className="w-6 h-6 mr-2" src={xLogo} alt="X logo" />
          X/Twitter
        </a>
      </div>
    
  );
}