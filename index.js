// Function to send user message and receive bot response
function sendMessage() {
  var userMessage = document.getElementById('user-message').value;

  // Display user message
  displayMessage('user', userMessage);

  // Send user message to the backend for processing
  // You can replace this with your own backend API call
  // and handle the response accordingly
  var botResponse = processUserMessage(userMessage);

  // Display bot response
  displayMessage('bot', botResponse);

  // Clear user input
  document.getElementById('user-message').value = '';
}

// Function to display a message in the chat container
function displayMessage(sender, message) {
  var chatContainer = document.getElementById('chat-messages');
  var messageElement = document.createElement('li');

  if (sender === 'user') {
    messageElement.classList.add('user-message');
  } else if (sender === 'bot') {
    messageElement.classList.add('bot-message');
  }

  messageElement.appendChild(document.createTextNode(message));
  chatContainer.appendChild(messageElement);

  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to process user message (dummy implementation)
function processUserMessage(message) {
  // Replace this with your own logic to process the user's message
  // and return an appropriate bot response
  var botResponse = "Bot: Thank you for your message: " + message;
  return botResponse;
}

