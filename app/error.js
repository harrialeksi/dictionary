"use client"; // Error components must be Client components

export default function Error({ error }) {
  return (
    <div className="grid place-items-center">
      <h2>404 - Oh snap. Something went wrong!</h2>
    </div>
  );
}
