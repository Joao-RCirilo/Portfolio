import Image from "next/image";
import "./header.scss"

export function Header() {
  return (
    <div className="header">
      <div className="titles">
        <h1 className="title">
          Hi, I'm João!
        </h1>
        <h2 className="subtitle">
          I’m a Front-End developer, and I’m here to create the most creative interfaces you’ll see!
        </h2>
      </div>

      <div className="buttons">
          <button>Contact-me</button>
      </div>
      <Image
        src="/eu.jpg"
        alt="Vercel Logo"
        width={325}
        height={325}
        priority
      />
    </div>
  )
}