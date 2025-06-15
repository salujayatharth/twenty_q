# Twenty Questions LLM Game

A single-page web application that brings the classic "20 Questions" game to life using AI chat interactions. Challenge an AI to guess what you're thinking of in 20 questions or less!

## About the Game

Twenty Questions is a classic guessing game where one player thinks of an object, and the other player has up to 20 yes/no questions to figure out what it is. In this digital version, you can play against an AI-powered opponent that uses natural language processing to ask intelligent questions and make educated guesses.

## Features

- **Single Page Application**: Clean, responsive web interface
- **AI-Powered Gameplay**: Intelligent questioning using LLM technology
- **Interactive Chat Interface**: Natural conversation flow with the AI
- **Question Counter**: Track remaining questions
- **Game History**: Review past games and strategies

## How to Play

1. Think of any object, person, place, or concept
2. The AI will ask you up to 20 yes/no questions
3. Answer honestly with "yes", "no", or "maybe/sometimes"
4. See if the AI can guess your answer within 20 questions!

## Setup

### Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection (for LLM API calls)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/salujayatharth/twenty_q.git
   cd twenty_q
   ```

2. Open `index.html` in your web browser or serve it using a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000` in your browser

## Configuration

To use the LLM features, you'll need to configure your AI service:

### Option 1: Environment Variable (Recommended)
Set the `OPENAI_API_KEY` environment variable:
```bash
export OPENAI_API_KEY=your-openai-api-key-here
```

### Option 2: Configuration File
1. Copy `config.example.js` to `config.js`
2. Add your API credentials
3. Select your preferred LLM provider

**Note**: The environment variable takes precedence over the configuration file when both are available.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI Integration**: OpenAI API / Anthropic Claude API
- **Styling**: Modern CSS with responsive design

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Roadmap

- [ ] Multiple difficulty levels
- [ ] Category selection (animals, objects, famous people, etc.)
- [ ] Multiplayer mode (human vs human)
- [ ] Game statistics and analytics
- [ ] Mobile app version