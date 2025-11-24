export default function promisifyWindowLoad() {
  return new Promise((resolve, reject) => {
    // Check if the document is already loaded
    if (document.readyState === "complete") {
      resolve(true);
      return;
    }

    window.addEventListener("load", () => {
      resolve(true);
    });

    // Optionally, handle potential errors during loading, though less common for window.load
    window.addEventListener("error", (event) => {
      reject(new Error(`Window load error: ${event.message}`));
    });
  });
}
