// File handler function to wrap the text content in an <h2> block
function handleMyHTMLFile(file) {
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const text = event.target.result;
      const wrappedText = `<h2>${text}</h2>`;
      document.getElementById('content').innerHTML = wrappedText;
    };
  
    reader.readAsText(file);
  }
  
  // Check if the browser supports file handling
  if ('launchQueue' in window) {
    window.launchQueue.setConsumer((launchParams) => {
      if (launchParams.files && launchParams.files.length > 0) {
        const file = launchParams.files[0];
        handleMyHTMLFile(file);
      }
    });
  }
  