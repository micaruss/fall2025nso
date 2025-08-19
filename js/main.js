document.addEventListener("DOMContentLoaded", () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const previewPairs = [];
  
    // Generate previewPairs for spots 1 through 183
    for (let i = 1; i <= 183; i++) {
      previewPairs.push({
        spotId: `spot-${i}`,
        previewId: `preview-${i}`
      });
    }
  
    // Only add hover events if NOT on mobile
    if (!isMobile) {
      previewPairs.forEach(({ spotId, previewId }) => {
        const spot = document.getElementById(spotId);
        const preview = document.getElementById(previewId);
  
        if (spot && preview) {
          spot.addEventListener("mouseenter", () => {
            preview.style.display = "block";
            preview.style.left = `${spot.offsetLeft + 30}px`;
            preview.style.top = `${spot.offsetTop - 10}px`;
            spot.style.zIndex = "999"; // bring hovered spot to top
          });
  
          spot.addEventListener("mouseleave", () => {
            preview.style.display = "none";
            spot.style.zIndex = "10"; // reset z-index to default
          });
        }
      });
    }
  });

  document.getElementById("legend-toggle").addEventListener("click", function () {
    const legend = document.getElementById("legend");
    legend.classList.toggle("open");
  });

