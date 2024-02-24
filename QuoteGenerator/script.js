function generate() {
  let quotes = {
    "-Edward Cullen": '"What if im not the hero, what if im the bad guy?"',
    "-Edward Cullen": '"This is the skin of a killer Bella"',
    "-Eric": '"Its LA PUSH BABY, La Push"',
    "-Jacob": '"WHERE THE HELL HAVE YOU BEEN LOCA!?"',
    "-Bella":
      '"I never thought of how I would die, but dying in the place of a loved one seems like a good way to go"',
    "-Edward": '"you better hold on tight, spider money"',
    "-Jacob": '"Lets face it, I AM hotter than you"',
    "-Bella":
      '"I am Switzerland. I refuse to be affected by territorial disputes between mythical creatures."',
    "-Bella":
      '"And Third, I was unconditionally and irrevocably in love with him"',
    "-Edward": '"Say it, out Loud... SAY IT"',
  };
  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
