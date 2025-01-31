// Function to set background color based on word of the day
function setBackgroundColor(color) {
    document.documentElement.style.setProperty('--bg-color', color);
  }

  // Example word-color mapping
  const wordColors = {
    'Serendipità': '#8A2BE2', // Purple
    'Creatività': '#FFD700', // Gold
    'Passione': '#FF6347', // Tomato red
    'Speranza': '#32CD32', // Lime green
  };

  // Function to load word of the day based on date
  function loadWordOfDay(word) {
    const color = wordColors[word] || '#8A2BE2';
    setBackgroundColor(color);
    document.getElementById('word-title').innerText = word;
  }

  // Navigation buttons logic
  function changeWord(word) {
    loadWordOfDay(word);
  }