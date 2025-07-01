// 1. Import express and create app
const express = require('express');
const app = express();
const PORT = 5000;

// 2. Middleware to parse JSON
app.use(express.json());

// 3. Sample GET route
app.get('/', (req, res) => {
  res.send('Resume Matcher Backend is running!');
});

// 4. ✅ Your POST /upload-resume endpoint
app.post('/upload-resume', (req, res) => {
  const { name, resumeText } = req.body;

  if (!name || !resumeText) {
    return res.status(400).json({ error: 'Name and resumeText are required.' });
  }

  console.log(`Resume received from: ${name}`);
  console.log(`Resume content: ${resumeText}`);

  res.json({ message: 'Resume uploaded successfully!', data: { name, resumeText } });
});

// 5. Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
