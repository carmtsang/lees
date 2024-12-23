"use client";
import Divider from "@/components/divider";
import { CldImage } from "next-cloudinary";

const tidbits = [
  {
    id: 1,
    question: "How did you first meet?",
    answer: "See Our Story!",
  },
  {
    id: 2,
    question: "Who made the first Move? How? ",
    answer: "Rowan did, by adding me on Facebook.",
  },
  {
    id: 3,
    question: "Who's going to take out the trash?",
    answer: "I want to say Rowan, but it is usually a 2 person job.",
  },
];

export default function Page() {
  const getTidbits = (tidbits) => {
    return tidbits.map((tidbit) => {
      return (
        <p key={tidbit.id}>
          <strong>{tidbit.question}</strong>
          <br />
          {tidbit.answer}
        </p>
      );
    });
  };
  return (
    <div>
      <div className="relative flex justify-center items-center p-3">
        <CldImage
          src="story-JygTt0is_dg8pl2"
          width={500}
          height={667}
          className="w-100vw md:w-3/4 lg:w-1/2"
          alt="Carmen & Rowan"
        />
      </div>
      <Divider />
      <div className="mx-2 px-10 md:px-36 lg:px-56">
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
          <h2>Tidbits</h2>
          {getTidbits(tidbits)}
        </div>
      </div>
    </div>
  );
}
