Names = ["John Smith", "Jane Doe", "John Simpson", "Jane Davis"];

Existing_emails = ["johns@company.com", "janed1@company.com"];

//output
// [
//     "johns1@company.com",
//     "janed@company.com",
//     "johns2@company.com",
//     "janed2@company.com"
//   ]
function solve(Names, Existing_emails) {
  let emailCounts = {};
  let existingSet = new Set(Existing_emails);
  let result = [];

  for (let name of Names) {
    let [first, last] = name.toLowerCase().split(" ");
    let base = first + last[0]; // e.g., johns or janed

    // Start from count = 1 if base email already exists
    let count = emailCounts[base] || 1;
    let email = base + "@company.com";

    // If base email is already in existing or result, find next available number
    while (existingSet.has(email) || result.includes(email)) {
      email = base + count + "@company.com";
      count++;
    }

    // Save the email and update count
    result.push(email);
    emailCounts[base] = count;
  }

  return result;
}

console.log(solve(Names, Existing_emails));
