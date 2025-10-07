let userProfile = {
  username: "elvis123",
  email: "elvis@gmail.com",
  isVerified: true
};
delete userProfile.isVerified;
console.log(userProfile);