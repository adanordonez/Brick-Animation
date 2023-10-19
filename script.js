const toggleButton = document.getElementById('toggleButton');
const images = [
  { id: '0-1', progress: 0 },
  { id: '0-2', progress: 0 },
  { id: '25-1', progress: 25 },
  { id: '25-2', progress: 25 },
  { id: '50-1', progress: 50 },
  { id: '50-2', progress: 50 },
  { id: '75-1', progress: 75 },
  { id: '75-2', progress: 75 },
  { id: '100', progress: 100 },
];

let activeImageIndex = 0;
let progress = 0; // Initial progress (0%)

// Initially set image1 as active
document.getElementById(images[0].id).classList.add('active');

toggleButton.addEventListener('click', () => {
  // Determine the next progress point
  const nextProgress = progress + 25;

  // Transition through images until reaching the next progress point
  while (progress < nextProgress) {
    activeImageIndex = (activeImageIndex + 1) % images.length;

    // Update progress to the current image's progress point
    progress = images[activeImageIndex].progress;
  }

  // Update active class for the images
  images.forEach((image) => {
    const imageElement = document.getElementById(image.id);
    if (image.progress === progress) {
      imageElement.classList.add('active');
    } else {
      imageElement.classList.remove('active');
    }
  });

  // Update button text based on progress
  switch (progress) {
    case 0:
      toggleButton.innerText = 'Property Purchase';
      break;
    case 25:
      toggleButton.innerText = 'Value Add';
      break;
    case 50:
      toggleButton.innerText = 'Exit';
      break;
    case 75:
      toggleButton.innerText = 'Overview';
      break;
    case 100:
      toggleButton.innerText = 'Complete';
      break;
  }


  // Reset to image 1 if progress reaches 100%
  if (progress === 100) {
    activeImageIndex = 0;
    progress = 0;
  }
});