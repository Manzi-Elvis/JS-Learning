const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

const app = require('./app');
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
// CREATE user
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ firstName, lastName, email, password: hashedPassword });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.send('Error creating user');
  }
});

// UPDATE user
app.put('/users/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) return res.send('User not found');

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    // Only hash new password if provided
    if (password.trim() !== '') {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.send('Error updating user');
  }
});
// DELETE user
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
      res.redirect('/');
      } catch (err) {
            console.error(err);
            res.send('Error deleting user');
      }
});