const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/ollama', async (req, res) => {
    const userMessage = req.body.message;

    // Replace this with actual interaction with Ollama's Llama 3
    // This is a placeholder for demonstration purposes
    const aiResponse = await getLlama3Response(userMessage);

    res.json({ response: aiResponse });
});

// Placeholder function to simulate AI response
async function getLlama3Response(userMessage) {
    // Replace this with actual API call to Ollama's Llama 3
    return `Llama 3 says: ${userMessage}`;
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
