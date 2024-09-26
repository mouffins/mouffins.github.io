// Variables to store selected items (limited to two)
let selectedItems = [];

// Function to update the comparison table
function updateComparisonTable() {
  const comparisonContainer = document.getElementById('comparison-container');
  
  const fields = [
    "sixteen", "ocean", "hogwarts", "color", "hobby", "genre", 
    "artist", "piece", "animal", "beverage", "chocolate", 
    "book", "movie", "emoji", "quote", "place"
  ];

  // Show comparison container if two items are selected
  if (selectedItems.length === 2) {
    comparisonContainer.style.display = 'block';

    // Update the header row with the selected item names (taken from the actual text content)
    document.getElementById('compare-item1-name').textContent = selectedItems[0].name;
    document.getElementById('compare-item2-name').textContent = selectedItems[1].name;

    // Update table with selected items' data
    fields.forEach(field => {
      document.getElementById(`compare-item1-${field}`).textContent = selectedItems[0][field];
      document.getElementById(`compare-item2-${field}`).textContent = selectedItems[1][field];
    });
  } else {
    comparisonContainer.style.display = 'none';
  }
}

// Function to handle item click (limit to two items)
function handleItemClick(event) {
  const item = event.currentTarget;

  // Create an object to store the selected item’s data
  const itemData = {
    name: item.textContent.trim(),  // Get the text inside the div (e.g., "Item 1", "Item 2")
    sixteen: item.getAttribute('data-sixteen'),
    ocean: item.getAttribute('data-ocean'),
    hogwarts: item.getAttribute('data-hogwarts'),
    color: item.getAttribute('data-color'),
    hobby: item.getAttribute('data-hobby'),
    genre: item.getAttribute('data-genre'),
    artist: item.getAttribute('data-artist'),
    piece: item.getAttribute('data-piece'),
    animal: item.getAttribute('data-animal'),
    beverage: item.getAttribute('data-beverage'),
    chocolate: item.getAttribute('data-chocolate'),
    book: item.getAttribute('data-book'),
    movie: item.getAttribute('data-movie'),
    emoji: item.getAttribute('data-emoji'),
    quote: item.getAttribute('data-quote'),
    place: item.getAttribute('data-place')
  };

  // Check if the item is already selected
  const itemIndex = selectedItems.findIndex(i => i.name === itemData.name);

  if (itemIndex >= 0) {
    // If the item is already selected, remove it
    selectedItems.splice(itemIndex, 1);
  } else {
    // If two items are already selected, remove the first one (FIFO)
    if (selectedItems.length === 2) {
      selectedItems.shift(); // Remove the first selected item
    }
    // Add the new item to the selected items
    selectedItems.push(itemData);
  }

  updateComparisonTable();
}

// Add event listeners to all items
const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('click', handleItemClick);
});
