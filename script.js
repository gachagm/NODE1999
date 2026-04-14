console.log("NODE-1999 INITIALIZED");

const nodes = [1,2,3,4,5,6];

if (!nodes.includes(7)) {
  console.warn("node missing");
}

// zufällige kleine Störung
setTimeout(() => {
  if (Math.random() > 0.5) {
    console.log("reconnect attempt failed");
  }
}, 2000);

// dein link 😄
setTimeout(() => {
  console.log("https://www.google.com/search?q=why+are+you+still+here");
}, 4000);
