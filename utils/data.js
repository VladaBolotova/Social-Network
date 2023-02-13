const names = [
    'Josh',
    'Robert',
    'Noah',
    'William',
    'Lucas',
    'Jackson',
    'Mateo',
    'Levi',
    'Oliver',
    'Daniel',
    'Joseph',
    'David',
    'Hudson',
    'Julian',

  ];
  
  const thoughtDescription = [
    'here is a cool thought',
    'another cool thought',
    'a lot of amazing thoughts',
    'more thoughts',
    'wonderfull thought',
  
  
   
  ];
  
  const possibleReactions = [
    'very good',
    'amazing',
    'i like it',
    'cool thought',
    'wonderfull',
    'excellent',
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random thought that we can add to the database. Includes thoughts reactions.
  const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        description: getRandomArrItem(thoughtDescription),
        buildSuccess: Math.random() < 0.5,
        tags: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the tags that will be added to each application
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        tagBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThought };