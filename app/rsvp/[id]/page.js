export default function Page({ params }) {
  return (
    <div>
      <h1>RSVP</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}
