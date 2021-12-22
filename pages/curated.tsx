const TypefaceList = ['Inter', 'iA Quattro', 'Cormorant Garamond', 'ET Book', 'JetBrains Mono'];

function Typefaces() {
  return (
    <section>
      <h2>Typefaces</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3">
        {TypefaceList.map((typeface) => (
          <li
            key={typeface}
            style={{ fontFamily: typeface }}
            className="relative flex items-center p-6 my-6 text-lg rounded-md group before:contents">
            <p className="absolute h-full transition-opacity group-hover:opacity-0">{typeface}</p>
            <p className="absolute transition-all translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              You reading an example for the typeface {typeface}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Curated() {
  return (
    <article className="w-full sm:max-w-[75ch] mx-auto px-5 pt-12 pb-28 ">
      <h1 className="text-2xl font-black">A list of web things I love</h1>
      <Typefaces />
    </article>
  );
}
