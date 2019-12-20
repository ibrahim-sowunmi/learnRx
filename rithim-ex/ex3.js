var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  
  
  const printEmails = () => {
    users.forEach(user => console.log(user.email))
    return;
  }
  
  const printHobbies = () => {
    users.forEach(user => user.hobbies.forEach(hobby => console.log(hobby)))
    return;
  }
  
  const findHometownByState = state => {
    return users.find(user => user.hometown.state == state);
  }
  
  const allLanguages = () => {
    const langSet = new Set();
    // cbf to actually complete with an array return, trust me it works but returns an iterator.
    users.forEach(user => user.favoriteLanguages.forEach(language => langSet.add(language)));
    return langSet.entries();
  }
  
  const hasFavouriteEditor = editor => {
    return users.some(user => user.favoriteEditor == editor); 
  }
  
  const findByUsername = username => users.find(user => user.username == username);
  
  const vowelCount = str => str.split("").reduce((acc, curr) => {
    const vowels = ["a", "e", "i", "o", "u"];
    
    const isVowel = char => vowels.includes(char);
    if (isVowel(curr)) {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
    }
    return acc;
  }, {})
  
  const removeVowels = str => str.split("").reduce((acc, curr) => {
    const vowels = ["a", "e", "i", "o", "u"];
   
    const isVowel = char => vowels.includes(char);
    if (!isVowel(curr)) acc.push(curr);
    return acc;
  }, [])
  
  
  
  
  