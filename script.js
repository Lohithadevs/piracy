document.getElementById("piracy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    const keyword = document.getElementById("keyword").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Analyzing...";
  
    try {
      // Use the Fetch API with CORS proxy to bypass CORS restrictions
      const proxyUrl = "(link unavailable)";
      const response = await fetch(proxyUrl + url);
      const text = await response.text();
  
      // Basic keyword detection (improve with an actual AI service)
      if (text.toLowerCase().includes(keyword.toLowerCase())) {
        resultDiv.innerHTML = `<span style="color: green;">Potential Piracy Detected:</span> The movie "${keyword}" was found on ${url}`;
      } else {
        resultDiv.innerHTML = `<span style="color: red;">No piracy detected:</span> The movie "${keyword}" was not found on ${url}`;
      }
    } catch (error) {
      resultDiv.textContent = "Error analyzing the content. Please check the URL.";
    }
  });
  