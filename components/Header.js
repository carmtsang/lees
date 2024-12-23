export default function Header({ font }) {
  return (
    <div className="text-center my-8">
      <h1 className={`${font} hidden md:block text-7xl`}>Carmen & Rowan</h1>
      <h1 className={`${font} block md:hidden text-5xl`}>
        Carmen
        <br /> &<br />
        Rowan
      </h1>
    </div>
  );
}
