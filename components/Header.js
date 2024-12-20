export default function Header({ font }) {
  return (
    <div className="text-center my-8">
      <h1 className={`${font} hidden md:block text-8xl`}>Carmen & Rowan</h1>
      <h1 className={`${font} block md:hidden text-7xl`}>
        Carmen
        <br /> &<br />
        Rowan
      </h1>
      <p>May 24, 2025 - Vancouver B.C</p>
    </div>
  );
}
