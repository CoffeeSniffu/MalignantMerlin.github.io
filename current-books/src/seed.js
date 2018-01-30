window.Seed = (function () {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
    const products = [
      {
        id: 1,
        title: 'Doomsday Clock',
        description: 'Geoff Johns -writer, Gary Frank -illustrator.',
        url: 'src/images/products/doomsdayclock.jpg',
        votes: generateVoteCount(),
        <!-- submitterAvatarUrl: 'src/images/avatars/daniel.jpg', -->
        productImageUrl: 'src/images/products/doomsdayclock.jpg',
      },
      {
        id: 2,
        title: 'Raven Daughter Of Darkness',
        description: 'Marv Wolfman -writer, Pop Mhan -illustrator.',
        url: 'src/images/products/ravendaughterofdarkness.jpg',
        votes: generateVoteCount(),
        <!-- submitterAvatarUrl: 'src/images/avatars/kristy.png', -->
        productImageUrl: 'src/images/products/ravendaughterofdarkness.jpg',
      },
      {
        id: 3,
        title: 'Darth Vader',
        description: 'Charles Soule -writer, Giusuppe Camuncoli -illustrator.',
        url: 'src/images/products/darthvader.jpg',
        votes: generateVoteCount(),
        <!-- submitterAvatarUrl: 'src/images/avatars/veronika.jpg', -->
        productImageUrl: 'src/images/products/darthvader.jpg',
      },
      {
        id: 4,
        title: 'The Demon Hell Is Earth',
        description: 'Andrew Constant -writer, Brad Walker -illustrator.',
        url: 'src/images/products/thedemonhellisearth.jpg',
        votes: generateVoteCount(),
        <!-- submitterAvatarUrl: 'src/images/avatars/molly.png', -->
        productImageUrl: 'src/images/products/thedemonhellisearth.jpg',
      },
    ];
  
    return { products: products };
  }());
  
