function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Display "My Resume" by default when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    showSection('resume');
  });
  