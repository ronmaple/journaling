// 1) Normal export/import

function add(n, m) {
  return n + m;
}

export add
import { add } from './modules.js'


// 2) Dynamic
import("module").then((module) => {
    module.default();
    module.namedExport();
});

  // Or with async/await
  (async () => {
    const module = await import("module");
    module.default();
    module.namedExport();
  })();



// importing based on condition
export function DogImage({ num }) {
  const [src, setSrc] = React.useState("");

  async function loadDogImage() {
    const res = await import(`../assets/dog${num}.png`);
    setSrc(res.default);
  }

  return src ? (
    <img src={src} alt="Dog" />
  ) : (
    <div className="loader">
      <button onClick={loadDogImage}>Click to load image</button>
    </div>
  );
}
