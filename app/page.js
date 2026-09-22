import localFont from "next/font/local";

const brigold = localFont({
  src: "./fonts/BrigoldDemo.otf",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <h2 className={brigold.className} style={{ textAlign: "center" }}>
        kroves and chuckles is cool
      </h2>
      <div style={{ fontSize: "0.75rem" }}>
        <a
          href="https://open.spotify.com/artist/2ehbkcmQu0ioDnrIpdy4HE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on Spotify
        </a>
        {" | "}
        <a
          href="https://www.youtube.com/@thekrovesandchucklescomedy1893"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>
    </>
  );
}
