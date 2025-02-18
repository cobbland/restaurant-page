import valMap from './map.jpg';
import famPic from './us.jpg';

function generateAbout(containingDiv) {
    const famImg = document.createElement('img');
    const storyHeading = document.createElement('div');
    const ourStory = document.createElement('p');
    const locationHeading = document.createElement('div');
    const mapImg = document.createElement('img');
    const locationText = document.createElement('p');

    famImg.src = famPic;
    storyHeading.innerText = 'Our Story';
    storyHeading.classList.add('fancy-text');
    ourStory.innerText = `Long ago, in the halls of Asgard, Odin, the Allfather, and Freya, the goddess of love and fertility, shared a passion that transcended the realms: a love for waffles. It all began during a grand feast in Valhalla, where Freya presented a golden, crispy creation that left even the mightiest warriors in awe. Odin, ever the visionary, saw an opportunity to bring this divine delight to Midgard (that’s Earth, for us mortals).

Together, they embarked on a quest to create a place where gods and mortals alike could gather to enjoy the finest waffles the Nine Realms had to offer. Thus, Odin Eats was born—a sanctuary of flavor, warmth, and community.

Odin, with his wisdom and love for hearty feasts, crafted the savory recipes, while Freya, with her flair for beauty and sweetness, perfected the art of decadent toppings and syrups. Their combined talents created a menu that is both legendary and comforting, a true reflection of their divine partnership.

Today, Odin Eats stands as a testament to their shared vision: a place where every bite tells a story, where the aroma of freshly made waffles fills the air, and where everyone—whether god, mortal, or somewhere in between—can feel at home.

So, when you dine with us, you’re not just enjoying a meal; you’re part of a legacy that began in the heavens and continues to bring joy to the world, one waffle at a time.

Skål!
– Odin & Freya`
    mapImg.src = valMap;
    locationHeading.innerText = 'Find Us';
    locationHeading.classList.add('fancy-text');
    locationText.innerText = `Ready to embark on a quest for the finest waffles in the Nine Realms? Odin Eats awaits you! Nestled in the heart of Midgard (or, as some call it, our hall is a haven for waffle lovers, weary travelers, and curious souls alike.

Whether you’re a local hero or a traveler from afar, we can’t wait to welcome you to Odin Eats. Follow the scent of freshly baked waffles, and you’ll find your way to us.

Valhalla may be the destination, but Odin Eats is the journey.

See you soon!
– Odin, Freya, and the Odin Eats Crew

P.S. Can’t make it to our physical location? Fear not! Odin Eats also offers takeout and delivery, so you can enjoy our legendary waffles wherever your journey takes you.`

    containingDiv.appendChild(storyHeading);
    containingDiv.appendChild(famImg);
    containingDiv.appendChild(ourStory);
    containingDiv.appendChild(locationHeading);
    containingDiv.appendChild(mapImg);
    containingDiv.appendChild(locationText);
}

export { generateAbout };