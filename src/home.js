import waffles from './waffles.jpg';

function generateHome(containingDiv) {
    const divElements = [];

    const image = document.createElement('img');
    const fancyHeader = document.createElement('div')
    const text = document.createElement('div');

    image.src = waffles;
    fancyHeader.innerText = "Valhalla can wait. Your waffle can’t."
    fancyHeader.classList.add('fancy-text')
    text.innerText = "Step into a realm where flavor meets legend at Odin Eats, the ultimate destination for waffle enthusiasts. Inspired by the grandeur of Norse mythology, we craft divine waffles that are fit for the gods. Whether you crave sweet, savory, or something truly mythical, our menu is a feast worthy of Valhalla.";

    divElements.push(image);
    divElements.push(fancyHeader);
    divElements.push(text);

    for (let thing in divElements) {
        containingDiv.appendChild(divElements[thing]);
    }
}

export { generateHome };