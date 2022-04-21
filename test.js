(function(doc) {
  const colors = ['red', 'orange', 'yellow', 'green', 'pink', 'blue', 'violet'];
  const getRndColor = () => colors[Math.random() * (colors.length - 1) >> 0];
  
  [...doc.querySelectorAll('div')]
    .forEach(div => div.style.cssText = `
        border: solid 2px ${getRndColor()};
        background: ${getRndColor()};
     `);
  
})(document)
