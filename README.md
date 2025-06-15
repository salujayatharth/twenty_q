<div align="center">

# 🎯 Twenty Questions LLM Game

### *Think of something... I'll guess it in 20 questions!*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-ff6b6b?style=for-the-badge)](https://salujayatharth.github.io/twenty_q/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/salujayatharth/twenty_q)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)

---

**A single-page web application that brings the classic "20 Questions" game to life using AI chat interactions. Challenge an AI to guess what you're thinking of in 20 questions or less!**

</div>

## 🎮 About the Game

Twenty Questions is a classic guessing game where one player thinks of an object, and the other player has up to 20 yes/no questions to figure out what it is. In this digital version, you can play against an AI-powered opponent that uses natural language processing to ask intelligent questions and make educated guesses.

<div align="center">

### 🧠 How Smart is the AI?
The AI uses advanced language models to analyze your responses and make strategic questions, getting closer to your answer with each interaction!

</div>

## ✨ Features

<table>
<tr>
<td align="center">
<img src="https://img.shields.io/badge/🖥️-Single_Page_App-blue?style=for-the-badge" alt="SPA"/>
<br><strong>Clean Interface</strong><br>
Responsive web design that works on all devices
</td>
<td align="center">
<img src="https://img.shields.io/badge/🤖-AI_Powered-purple?style=for-the-badge" alt="AI"/>
<br><strong>Smart Questions</strong><br>
Intelligent gameplay using LLM technology
</td>
</tr>
<tr>
<td align="center">
<img src="https://img.shields.io/badge/💬-Chat_Interface-green?style=for-the-badge" alt="Chat"/>
<br><strong>Natural Flow</strong><br>
Conversation-like interaction with the AI
</td>
<td align="center">
<img src="https://img.shields.io/badge/📊-Progress_Tracking-orange?style=for-the-badge" alt="Tracking"/>
<br><strong>Live Counter</strong><br>
Track remaining questions in real-time
</td>
</tr>
</table>

## 🎯 How to Play

<div align="center">

```
🤔 Think → 🤖 AI Asks → ✅ You Answer → 🎉 AI Guesses!
```

</div>

| Step | Action | Description |
|------|--------|-------------|
| **1️⃣** | **Think** | Choose any object, person, place, or concept |
| **2️⃣** | **Answer** | Respond to AI questions with "Yes", "No", or "Maybe" |
| **3️⃣** | **Watch** | See the AI get smarter with each question |
| **4️⃣** | **Win/Lose** | Can the AI guess your answer in 20 questions? |

<div align="center">

[![▶️ Start Playing Now](https://img.shields.io/badge/▶️_Start_Playing_Now-ff4757?style=for-the-badge)](https://salujayatharth.github.io/twenty_q/)

</div>

## 🚀 Quick Start

<div align="center">

### Choose Your Adventure

[![🌐 Play Online](https://img.shields.io/badge/🌐_Play_Online-Just_Click_Here-success?style=for-the-badge)](https://salujayatharth.github.io/twenty_q/)
[![💻 Run Locally](https://img.shields.io/badge/💻_Run_Locally-Clone_&_Setup-blue?style=for-the-badge)](#local-setup)

</div>

### 🌐 Online Play (Instant)
Just click the **"Play Online"** button above - no setup required!

### 💻 Local Setup

<details>
<summary><strong>📋 Prerequisites</strong></summary>

- 🌐 Modern web browser with JavaScript enabled
- 🔌 Internet connection (for LLM API calls)

</details>

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/salujayatharth/twenty_q.git
cd twenty_q
```

#### 2️⃣ Start Local Server
Choose your preferred method:

<table>
<tr>
<td><strong>🐍 Python</strong></td>
<td><strong>📦 Node.js</strong></td>
</tr>
<tr>
<td>

```bash
python -m http.server 8000
```

</td>
<td>

```bash
npx serve .
```

</td>
</tr>
<tr>
<td colspan="2" align="center">
Then visit <code>http://localhost:8000</code>
</td>
</tr>
</table>

#### 3️⃣ Open in Browser
Navigate to `http://localhost:8000` and start playing!

<div align="center">

[![✅ Setup Complete](https://img.shields.io/badge/✅_Setup_Complete-Start_Playing-brightgreen?style=for-the-badge)](http://localhost:8000)

</div>

## ⚙️ Configuration

<div align="center">

### 🔧 Enable AI Features

[![🔑 Get OpenAI API Key](https://img.shields.io/badge/🔑_Get_OpenAI_API_Key-Required_for_AI-red?style=for-the-badge)](https://platform.openai.com/api-keys)

</div>

To unlock the full AI experience, configure your AI service:

### 🌟 Option 1: Environment Variable (Recommended)

```bash
export OPENAI_API_KEY=your-openai-api-key-here
```

### 🔧 Option 2: Configuration File

1. **Copy** `config.example.js` to `config.js`
2. **Add** your API credentials  
3. **Select** your preferred LLM provider
4. **Add** the config script to `index.html` by adding this line before the `</body>` tag:
   ```html
   <script src="config.js"></script>
   ```

> **💡 Pro Tip**: The environment variable takes precedence over the configuration file when both are available.

<div align="center">

[![📚 Configuration Guide](https://img.shields.io/badge/📚_Need_Help-Configuration_Guide-yellow?style=for-the-badge)](https://platform.openai.com/docs)

</div>

## 🛠️ Technologies Used

<div align="center">

### Frontend Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### AI Integration
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-CC785C?style=for-the-badge&logo=anthropic&logoColor=white)

### Design Features
![Responsive](https://img.shields.io/badge/Responsive-Design-ff6b6b?style=for-the-badge&logo=css3&logoColor=white)
![Modern UI](https://img.shields.io/badge/Modern-UI/UX-4ecdc4?style=for-the-badge&logo=figma&logoColor=white)

</div>

<table align="center">
<tr>
<td><strong>🎨 Frontend</strong></td>
<td>HTML5, CSS3, JavaScript (ES6+)</td>
</tr>
<tr>
<td><strong>🤖 AI Integration</strong></td>
<td>OpenAI API / Anthropic Claude API</td>
</tr>
<tr>
<td><strong>💄 Styling</strong></td>
<td>Modern CSS with responsive design</td>
</tr>
<tr>
<td><strong>📱 Compatibility</strong></td>
<td>All modern browsers, mobile-friendly</td>
</tr>
</table>

## 🤝 Contributing

<div align="center">

### Join the Fun! 

[![Fork Repository](https://img.shields.io/badge/Fork-Repository-yellow?style=for-the-badge&logo=github)](https://github.com/salujayatharth/twenty_q/fork)
[![Create Issue](https://img.shields.io/badge/Create-Issue-red?style=for-the-badge&logo=github)](https://github.com/salujayatharth/twenty_q/issues/new)
[![Start Discussion](https://img.shields.io/badge/Start-Discussion-blue?style=for-the-badge&logo=github)](https://github.com/salujayatharth/twenty_q/discussions)

</div>

We welcome contributions! Here's how you can help make this game even better:

### 🚀 Quick Contribution Guide

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔄 Open** a Pull Request

### 💡 Ideas for Contributions

<table>
<tr>
<td>🎨 <strong>UI/UX</strong></td>
<td>Improve design and user experience</td>
</tr>
<tr>
<td>🤖 <strong>AI Logic</strong></td>
<td>Enhance question generation algorithms</td>
</tr>
<tr>
<td>🌐 <strong>Features</strong></td>
<td>Add new game modes or categories</td>
</tr>
<tr>
<td>🐛 <strong>Bug Fixes</strong></td>
<td>Report and fix issues</td>
</tr>
<tr>
<td>📚 <strong>Documentation</strong></td>
<td>Improve guides and examples</td>
</tr>
</table>

<div align="center">

[![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

</div>

## 📄 License

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

This project is open source and available under the **MIT License**.

*Feel free to use, modify, and distribute this code for any purpose!*

</div>

## 🗺️ Roadmap

<div align="center">

### What's Coming Next?

</div>

| Priority | Feature | Status | Description |
|----------|---------|---------|-------------|
| 🔥 **High** | Multiple difficulty levels | ![Planning](https://img.shields.io/badge/Planning-orange) | Easy, Medium, Hard, Expert modes |
| 🔥 **High** | Category selection | ![Planning](https://img.shields.io/badge/Planning-orange) | Animals, objects, famous people, etc. |
| 🚀 **Medium** | Multiplayer mode | ![Planned](https://img.shields.io/badge/Planned-blue) | Human vs human gameplay |
| 📊 **Medium** | Game statistics | ![Planned](https://img.shields.io/badge/Planned-blue) | Track wins, average questions, etc. |
| 📱 **Low** | Mobile app version | ![Future](https://img.shields.io/badge/Future-lightgrey) | Native iOS/Android apps |

<div align="center">

[![Vote on Features](https://img.shields.io/badge/Vote_on-Features-purple?style=for-the-badge)](https://github.com/salujayatharth/twenty_q/discussions)
[![Request Feature](https://img.shields.io/badge/Request-Feature-green?style=for-the-badge)](https://github.com/salujayatharth/twenty_q/issues/new?template=feature_request.md)

</div>

---

<div align="center">

### 🎉 Ready to Play?

[![🚀 Launch Game](https://img.shields.io/badge/🚀_Launch_Game-Play_Now-ff6b6b?style=for-the-badge&logo=rocket)](https://salujayatharth.github.io/twenty_q/)

**Made with ❤️ by [salujayatharth](https://github.com/salujayatharth)**

[![GitHub followers](https://img.shields.io/github/followers/salujayatharth?style=social)](https://github.com/salujayatharth)
[![GitHub stars](https://img.shields.io/github/stars/salujayatharth/twenty_q?style=social)](https://github.com/salujayatharth/twenty_q)

</div>