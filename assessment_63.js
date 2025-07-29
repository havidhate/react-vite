function getUniqueSortedDomains(emails) {
    return Array.from(
      new Set(
        emails.map(email => email.split('@')[1]) 
      )
    ).sort();
  }

  const emails = [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com",
    "user5@yahoo.com",
    "user6@gmail.com"
  ];
  
  console.log(getUniqueSortedDomains(emails));
  // Output: ["gmail.com", "outlook.com", "yahoo.com"]