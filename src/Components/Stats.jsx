export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 👌</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const per = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {per === 100
          ? "You got everything! Ready to go ✈️"
          : `🎒 You have ${numItems} items on your list, and you already packed ${numPacked} (${per}%)`}
      </em>
    </footer>
  );
}
