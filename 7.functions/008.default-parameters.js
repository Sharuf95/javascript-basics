function greetUser(username = 'UNKNOWN') {
    console.log(`Welcome ${username}!`);
  }
  
  greetUser();
  greetUser('Shaik Sharuf');
  
  const welcomeUser = (username = 'UnKnown User') => {
    return `Welcome to my page! ${username}`
  }
  
  const welcomeSharu = welcomeUser('Shaik Sharuf');
  console.log(welcomeSharu);
