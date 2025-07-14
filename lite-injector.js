(async function () {
    document.body.innerHTML = '<h1>Loading Lite Version...</h1>';
    const response = await fetch('https://litebridge.pages.dev/liteify?url=' + encodeURIComponent(window.location.href));
    const text = await response.text();
  
    document.open();
    document.write(text);
    document.close();
  })();
  

