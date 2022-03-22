const fetchSvg = (image) => {
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      const span = document.createElement('span')
      span.innerHTML = response
      const inlineSvg = span.getElementsByTagName('svg')[0]
      image.parentNode.replaceChild(inlineSvg, image)
      return true
    })
}