// Configuration example for Twenty Questions LLM Game
// Copy this file to config.js and add your API credentials

const gameConfiguration = {
    // LLM Provider Configuration
    llm: {
        provider: 'openai', // Options: 'openai', 'anthropic', 'cohere'
        apiKey: (typeof process !== 'undefined' && process.env && process.env.OPENAI_API_KEY) || 'your-api-key-here',
        model: 'gpt-3.5-turbo', // or 'claude-3-sonnet', etc.
        
        // API endpoints (usually don't need to change these)
        endpoints: {
            openai: 'https://api.openai.com/v1/chat/completions',
            anthropic: 'https://api.anthropic.com/v1/messages'
        }
    },
    
    // Game Settings
    game: {
        maxQuestions: 20,
        difficultyLevel: 'medium', // 'easy', 'medium', 'hard'
        categories: ['all'], // 'animals', 'objects', 'people', 'places', 'concepts'
        enableHints: true,
        timeLimit: null // null for no time limit, or seconds
    },
    
    // UI Settings
    ui: {
        theme: 'default', // 'default', 'dark', 'light'
        animations: true,
        soundEffects: false
    }
};

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameConfiguration;
}