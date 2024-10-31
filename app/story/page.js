import Divider from "@/components/divider";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="relative flex justify-center items-center p-3">
        <Image
          src="/wedgemount.jpeg"
          width={667}
          height={500}
          className="w-100vw md:w-3/4"
          alt="Carmen & Rowan camping"
        />
      </div>
      <Divider />
      <div className="px-56 text-center">
        <div>
          <h2>Story</h2>
          <p>
            The short version? Rowan was my coworker’s roommate, and then he
            became mine.
          </p>
          <p>But here’s the long version...</p>
          <p>
            We first met during a hot pot night I had with some work friends. As
            usual with hot pot, we had way too much food, and my friend Jon
            mentioned that his roommate, Rowan, was home and could help us eat.
            So, Rowan joined in.
          </p>
          <p>
            The second time was at Jon&apos;s apartment for another gathering
            with the same group, this time making okonomiyaki. Since Rowan lived
            there, he joined us again. I remember asking him a question about
            his travels. He couldn&apos;t answer right away but promised to
            think about it and let me know. He added me on Facebook to follow
            up—and although I don&apos;t recall his answer, what I do remember
            is that after some back-and-forth conversation, he asked me out.
          </p>
          <p>
            Six months later, we moved in together. And the rest, as they say,
            is history.
          </p>
          <p>- Carmen</p>
        </div>
        <div className="text-left">
          <h2 className="text-center">Tidbits</h2>
          <p>
            How did you first meet? <br /> See Our Story!
          </p>
          <p>
            Who made the first Move? How? <br />
            Rowan did, by adding me on Facebook.
          </p>
          <p>
            Who&#39;s going to take out the trash? <br />I want to say Roawn,
            but it is usually a 2 person job.
          </p>
          <p>
            What was your most memorable date? <br />
            Doing the Urban Grind and grabbing beers at the top.
          </p>
          <p>
            What&#39;s your favorite activity together?
            <br />
            Going Hiking or on overnight hikes
          </p>
          <p>
            Where are you going for your honeymoon? <br /> Likely Japan
          </p>
          <p>
            What&#39;s the best meal you have eaten together?
            <br />
            In London, for Rowan&#39;s birthday. I treated him to this Thai
            fusion restaurant. I still think about that meal.
          </p>
          <p>
            What&#39;s the most memorable trip you have taken together?
            <br />
            Most memorable, and our first trip together, the West Coast Trail
          </p>
          <p>
            The most spontaneous thing we&#39;ve done
            <br />
            We went bungee jumping in Whistler. This was before we had a car, on
            Friday, we decided to do it and booked a shuttle bus for early the
            next day to go!
          </p>
        </div>
      </div>
    </div>
  );
}
