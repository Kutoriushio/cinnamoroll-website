import React from "react";
import styles from "./InformationContent.module.css";
import history1 from "../../../images/history_1.webp";
import history2 from "../../../images/history_2.webp";
import history3 from "../../../images/history_3.webp";

export default function InformationContent() {
  return (
    <>
      <div className={styles.contentTitle} id="Story">
        <h2>Story</h2>
      </div>
      <div className={styles.content}>
        <p>
          Cinnamon was born way above the clouds in the distant sky. One day, he
          accidentally fell down to the ground, where he met Cafe Cinnamon's
          owner, Anna. She took him back to the cafe, where he met his new
          friends: Mocha, Milk, Chiffon, Cappuccino, and Espresso. Anna named
          him "Cinnamon" because of his cinnamon roll shaped tail. From then on,
          they decided to live together and make Cinnamon the face of Cafe
          Cinnamon.
        </p>
      </div>
      <div className={styles.contentTitle} id="History">
        <h2>History</h2>
      </div>
      <div className={styles.content}>
        <p>
          Cinnamon was created by Miyuki Okumura for Sanrio in 2001. When Sanrio
          was presented with the original design, they rejected it, leading
          Okumura to go back to the drawing board and design the Cinnamon and
          Cinnamoroll Universe we know today. In September 2001, he was featured
          in an article in The Strawberry News, along with other character
          designs, and fans were able to vote on which design they liked best.
        </p>
        <div className={styles.originalImage}>
          <img src={history1} alt="Cinnamoroll's Original Design" />
          <div className={styles.imageCaption}>
            Cinnamoroll's Original Design.
          </div>
        </div>
        <p>
          Cinnamon officially debuted in June 2002 as "Baby Cinnamon." However,
          copyright issues with Sega Toys and Horipro's character series,
          Ochaken, would officially change his name to "Cinnamoroll" or
          "Cinnamon" as of 2003.
        </p>
        <div className={styles.debutContent}>
          <div className={styles.debutImage}>
            <img src={history2} alt="official debut" />
            <img src={history3} alt="official debut" />
          </div>
          <div className={styles.imageCaption}>
            Cinnamoroll's official debut in The Strawberry News, June 2002.
          </div>
        </div>
        <p>
          He became very popular very quickly, with Cinnamoroll merchandise
          accounting for 25% of Sanrio's sales by 2004. Cinnamoangels began
          development in 2005, as did Lloromannic in 2007, as seperate
          Cinnamoroll-inspired projects.
        </p>
        <p>
          In 2017, Cinnamon celebrated his 15th anniversary. To commemorate the
          occasion, the city of Shinagawa has since appointed Cinnamon as the
          official tourism ambassador. In addition, the permanent Cinnamoroll
          Cafe opened in Shinjuku City, and an album titled "Cinnnamon Trip!!"
          was released, with songs written and composed by vocaloid artist,
          OSTER Project.
        </p>
      </div>
      <div className={styles.contentTitle} id="Media">
        <h2>Media</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.smallTitle} id="Manga">
          <h3>Manga</h3>
        </div>
        <div className={styles.contentList}>
          <ul>
            <li>Fluffy, Fluffy Cinnamoroll (2005 - 2008)</li>
          </ul>
        </div>
        <div className={styles.smallTitle} id="TV_/_Movies">
          <h3>TV/Movies</h3>
        </div>
        <div className={styles.contentList}>
          <ul>
            <li>Kitty's Paradise (Peace and PLUS) (2005 - 2011)</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=3UFpN5yJgBU"
                target="_blank"
                rel="noreferrer"
              >
                AB Cinnamon (2006)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Vv-wEXAPMqg&t=21s"
                target="_blank"
                rel="noreferrer"
              >
                AB Cinnamon 2 (2007){" "}
              </a>
            </li>
            <li>Sanrio Pokoapoko DVDs (2007)</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=kEIOb4KClKE"
                target="_blank"
                rel="noreferrer"
              >
                Cinnamon: The Movie (December 22, 2007)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=H9uiOpyDczw"
                target="_blank"
                rel="noreferrer"
              >
                The Adventures of Hello Kitty & Friends: Cafe Cinnamon (2008)
              </a>
            </li>
            <li>
              Hello Kitty and Friends Supercute Adventures (Season 2 -) (2021 -)
            </li>
          </ul>
        </div>
        <div className={styles.smallTitle} id="Music">
          <h3>Music</h3>
        </div>
        <div className={styles.contentList}>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=zLi50B3Ywco&list=PLhIY98ErO7HH7JYyWEBRgSRw5jJvOooy8&index=3"
                target="_blank"
                rel="noreferrer"
              >
                Baby Cinnamon - Hooverover
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=nl3ph6NWPMw"
                target="_blank"
                rel="noreferrer"
              >
                Futari wa Rival - Cinnamoroll & Friends (2007)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=y78mfd2DFt4"
                target="_blank"
                rel="noreferrer"
              >
                Cinnamon no Parade - Dempagumi.inc (2012)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=KJ9isE6St5w"
                target="_blank"
                rel="noreferrer"
              >
                Cinnamon Trip!! - Cinnamoroll & Friends x OSTER Project (2012)
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/album/1WsDYWXBQJhIhCIJHs2sju"
                target="_blank"
                rel="noreferrer"
              >
                Fure Fure Ganbare! / Shiawase no Label (2020)
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/album/17p05VoOX3QoZi04l1Mi8A"
                target="_blank"
                rel="noreferrer"
              >
                Star Dome / Manmaru Light (2021)
              </a>
            </li>
            <li>Tokimeki Rainbow (2023)</li>
          </ul>
        </div>
      </div>
      <div className={styles.contentTitle} id="Trivia">
        <h2>Trivia</h2>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            It's confirmed that "Cinnamoroll" is not his real name. It's instead
            used as a stage name or an overseas trademark, similarly to how
            Hello Kitty is a stage name for Kitty White.
          </li>
          <li>
            Cinnamon now lives with Anna at Cafe Cinnamon, though she's never
            made any apperances outside Cinnamon: The Movie.
          </li>
          <li>
            Mocha tends to see Cinnamon as a girl rather than a boy, often
            dressing him up in bows and makeup. Cinnamon has mixed feelings
            about this.
            <ul>
              <li>
                Regardless, Cinnamon has a varying sense of style, ranging from
                bows and other girly accessories to more masculine outfits.
              </li>
            </ul>
          </li>
          <li>
            Okumura was warned not to use blue as Cinnamon's image color, in
            fear of driving away the population of female fans. This ended up
            being a smart move, making Cinnamon a unique character in Sanrio's
            lineup.
          </li>
          <li>
            Cinnamon's friends were created by Okumura's desire to have fans
            pick a character that best represents them, rather than just having
            the characters play supporting roles.
          </li>
          <li>
            In 2015, the official Twitter account was bombarded by internet
            trolls, with users making threats and other abusive comments in the
            replies. During this time, Cinnamon's friends made posted on the
            account in an effort to protect him, the most popular post being
            from Chiffon.
          </li>
        </ul>
      </div>
      <div className={styles.contentTitle} id="Sources">
        <h2>Sources</h2>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            <a
              href="https://www.sanrio.co.jp/characters/cinnamon/"
              target="_blank"
              rel="noreferrer"
            >
              Cinnamon Profile
            </a>{" "}
            on{" "}
            <a
              href="https://www.sanrio.co.jp/"
              target="_blank"
              rel="noreferrer"
            >
              Sanrio.co.jp
            </a>
          </li>
          <li>
            <a
              href="http://web.archive.org/web/20161027233227/http://sanriocharacterranking.com/characters/view/cinnamon"
              target="_blank"
              rel="noreferrer"
            >
              Cinnamoroll Ranking
            </a>{" "}
            on{" "}
            <a
              href="http://sanriocharacterranking.com/"
              target="_blank"
              rel="noreferrer"
            >
              SanrioCharacterRanking.com{" "}
            </a>
            <a href="https://archive.org/ via" target="_blank" rel="noreferrer">
              Archive.org{" "}
            </a>
            (2016)
          </li>
          <li>
            {" "}
            <a
              href="https://www.sanrio.com/collections/cinnamoroll/"
              target="_blank"
              rel="noreferrer"
            >
              Cinnamoroll Timeline
            </a>{" "}
            on{" "}
            <a href="https://www.sanrio.com/" target="_blank" rel="noreferrer">
              Sanrio.com
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.sanrio.co.jp/characters/cinnamon/?relation"
              target="_blank"
              rel="noreferrer"
            >
              Cinnamoroll's Family and Friends
            </a>{" "}
            on{" "}
            <a
              href="https://www.sanrio.co.jp/"
              target="_blank"
              rel="noreferrer"
            >
              Sanrio.co.jp
            </a>
          </li>
          <li>
            <a
              href="https://www.sanrio.com/media/W1siZiIsIjIwMTYvMDYvMDkvMTQvMDEvMjUvMjI1L2Vnb29kaWVzXzIwMTZfMDNfY2FsZW5kYXIucGRmIl1d/egoodies_2016_03_calendar.pdf?sha=43289dddf9ea5f98"
              target="_blank"
              rel="noreferrer"
            >
              March 2016 Calendar
            </a>{" "}
            on{" "}
            <a href="https://www.sanrio.com/" target="_blank" rel="noreferrer">
              Sanrio.com
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.sanrio.com/media/W1siZiIsIjIwMTcvMDMvMDIvMTcvMjQvMTIvNTI2LzIwMTdfMDNfY2FsZW5kYXIucGRmIl1d/2017_03_calendar.pdf?sha=b7a914d5e6b03bdc"
              target="_blank"
              rel="noreferrer"
            >
              March 2017 Calendar
            </a>{" "}
            on{" "}
            <a href="https://www.sanrio.com/" target="_blank" rel="noreferrer">
              Sanrio.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
