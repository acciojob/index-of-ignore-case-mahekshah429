function indexOfIgnoreCase(str, subStr) {
  if (typeof str !== "string" || typeof subStr !== "string") return -1;

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  return lowerStr.indexOf(lowerSubStr);
}

function handleIndexSearch() {
  const mainStr = document.getElementById("mainStr").value.trim();
  const subStr = document.getElementById("subStr").value.trim();

  const index = indexOfIgnoreCase(mainStr, subStr);

  document.getElementById("output").textContent = 
    index !== -1
      ? `Substring found at index: ${index}`
      : "Substring not found.";
}
