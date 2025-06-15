# GitHub Copilot Instructions for Twenty Questions LLM Game

## Project Overview

This is a **Twenty Questions LLM Game** - a single-page web application that brings the classic guessing game to life using AI. The AI attempts to guess what the user is thinking of within 20 questions through strategic yes/no questions.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (ES6+)
- **AI Integration**: OpenAI API / Anthropic Claude API
- **Deployment**: GitHub Pages (static hosting)
- **No build tools**: Direct browser execution, no bundlers or preprocessors

## File Structure & Purpose

```
├── index.html          # Main game interface and UI structure
├── style.css          # All styling, responsive design, animations
├── game.js            # Core game logic, AI integration, and event handling
├── config.example.js  # Configuration template for API keys and settings
├── README.md         # Comprehensive project documentation
└── .github/
    ├── workflows/static.yml    # GitHub Pages deployment
    └── copilot-instructions.md # This file
```

## Key Architecture Patterns

### Game Engine (game.js)
- **Main Class**: `TwentyQuestionsGame` - handles all game state and logic
- **AI Integration**: `LLMIntegration` class for API communication
- **Configuration Loading**: Dynamic config loading with fallbacks
- **Event-Driven**: DOM event binding for user interactions

### UI Patterns (index.html + style.css)
- **Chat Interface**: Messages displayed as conversation bubbles
- **Status Bar**: Real-time question counter and game status
- **Responsive Design**: Mobile-first approach with flexbox layouts
- **Visual Feedback**: Loading animations, funky counter, smooth transitions

## Code Style & Conventions

### JavaScript
- **ES6+ Features**: Classes, arrow functions, async/await, template literals
- **Error Handling**: Try-catch blocks for API calls with graceful fallbacks
- **DOM Manipulation**: Direct getElementById/querySelector usage (no jQuery)
- **Async Patterns**: Promise-based API calls with proper error handling
- **Configuration**: Environment variable support with fallback defaults

### CSS
- **BEM-like Naming**: Descriptive class names (`.chat-message`, `.ai-message`, `.user-message`)
- **Mobile-First**: Media queries starting from mobile breakpoints
- **CSS Custom Properties**: Use CSS variables for consistent theming
- **Flexbox Layout**: Primary layout system for responsive design
- **Smooth Animations**: CSS transitions for better UX

### HTML
- **Semantic Structure**: Proper use of header, main, footer elements
- **Accessibility**: ARIA labels, proper form structure, keyboard navigation
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Clean Markup**: Minimal nesting, clear element purposes

## AI Integration Specifics

### API Communication
- **Primary Provider**: OpenAI GPT models (gpt-3.5-turbo, gpt-4)
- **Fallback Support**: Anthropic Claude API support
- **Environment Variables**: `OPENAI_API_KEY` for secure API key storage
- **Error Handling**: Graceful degradation to fallback questions if API fails

### Prompt Engineering
- **System Prompt**: Detailed instructions for AI behavior in game context
- **Context Building**: Game history passed to maintain conversation flow
- **Strategic Questioning**: AI guided to ask broad-to-specific questions
- **Fallback Questions**: Pre-defined questions when API is unavailable

## Development Guidelines

### When Adding Features
1. **Maintain Simplicity**: Keep the single-file architecture where possible
2. **Mobile-First**: Always test responsive behavior on mobile devices
3. **Graceful Degradation**: Ensure functionality works without AI when possible
4. **Configuration**: Add new settings to `config.example.js` template
5. **User Experience**: Prioritize smooth, intuitive interactions

### When Modifying AI Logic
1. **Prompt Testing**: Test prompts thoroughly for consistent behavior
2. **Error Boundaries**: Always provide fallback behavior for API failures
3. **Context Management**: Preserve game history for intelligent questioning
4. **Rate Limiting**: Consider API rate limits in implementation

### When Updating UI
1. **Consistency**: Follow existing design patterns and color schemes
2. **Accessibility**: Maintain WCAG compliance for all interactive elements
3. **Performance**: Keep CSS and JavaScript lightweight
4. **Visual Feedback**: Provide clear loading states and user feedback

## Common Tasks & Patterns

### Adding New Question Types
```javascript
// Add to fallback questions array in LLMIntegration class
getFallbackQuestion(gameHistory) {
    const fallbackQuestions = [
        "Is it a living thing?",
        // Add new strategic questions here
    ];
}
```

### Modifying AI Behavior
```javascript
// Update system prompt in config.example.js
systemPrompt: `You are an AI playing Twenty Questions...
// Add specific behavioral guidelines here
`
```

### Adding UI Elements
```css
/* Follow existing naming conventions */
.new-element {
    /* Use existing CSS custom properties */
    background: var(--primary-color, #667eea);
    /* Maintain responsive design */
}
```

### Configuration Management
```javascript
// Always provide fallbacks
const config = this.loadGameConfiguration() || defaultConfig;
// Support environment variables
apiKey: process.env.OPENAI_API_KEY || 'fallback-key'
```

## Testing & Validation

### Manual Testing Checklist
- [ ] Game starts and questions load properly
- [ ] AI responses are coherent and strategic
- [ ] Mobile responsive design works correctly
- [ ] Error states display gracefully
- [ ] Configuration loading works with/without config.js
- [ ] API fallbacks work when service is unavailable

### Browser Compatibility
- Target: Modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Progressive enhancement for older browsers
- No polyfills required for core functionality

## Deployment Notes

- **Static Hosting**: Designed for GitHub Pages deployment
- **No Server Required**: Pure client-side application
- **CORS**: API keys should be handled securely (not exposed in client)
- **Environment**: Uses environment variables in production

## Contributing Guidelines

1. **Keep it Simple**: Maintain the lightweight, dependency-free architecture
2. **Document Changes**: Update README.md for user-facing changes
3. **Test Thoroughly**: Ensure changes work across devices and browsers
4. **Security**: Never commit API keys or sensitive configuration
5. **Performance**: Keep the application fast and responsive

## Security Considerations

- **API Keys**: Never hardcode in client-side code
- **Environment Variables**: Use server-side injection for production
- **CORS Policy**: Respect API provider CORS restrictions
- **Input Validation**: Sanitize user inputs where applicable