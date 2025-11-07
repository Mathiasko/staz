export default function FactCard({ factText, author }: { factText: string, author: string }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 m-4 max-w-2xl w-full shadow-lg">
      <p className="text-lg italic text-cyan-300">&ldquo;{factText}&rdquo;</p>
      <p className="text-right mt-4 text-gray-400">- {author}</p>
    </div>
  );
}
