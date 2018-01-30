window.Seed = (function () {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
    const products = [
      {
        id: 1,
        title: 'Doomsday Clock',
        description: 'Geoff Johns -writer, Gary Frank -illustrator.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/daniel.jpg',
        productImageUrl: 'src/images/products/doomsdayclock.jpg',
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/kristy.png',
        productImageUrl: 'src/images/products/image-rose.png',
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/veronika.jpg',
        productImageUrl: 'src/images/products/image-steel.png',
      },
      {
        id: 4,
        title: 'The Demon Hell Is Earth',
        description: 'Andrew Constant -writer, Brad Walker -illustrator.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/molly.png',
        productImageUrl: 'src/images/products/thedemonhellisearth.jpg',
      },
    ];
  
    return { products: products };
  }());
  
