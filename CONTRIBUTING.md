# Contributing to Tecso Team Website

Thank you for your interest in contributing to Tecso Team's website! We welcome contributions from developers, designers, and content creators who share our vision of delivering exceptional digital solutions for Iran and the Middle East.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Content Guidelines](#content-guidelines)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code and maintain a welcoming environment for all contributors.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20.x)
- **npm** or **yarn** package manager
- **Git** for version control
- **VS Code** with Vue.js extensions (recommended)

### Local Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/main-site.git
   cd main-site
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Configure your environment variables
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   - Visit `http://localhost:3000` for English version
   - Visit `http://localhost:3000/fa/` for Persian version

## 🔄 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/user-authentication`)
- `bugfix/` - Bug fixes (e.g., `bugfix/mobile-menu-rtl`)
- `hotfix/` - Critical fixes (e.g., `hotfix/security-patch`)
- `content/` - Content updates (e.g., `content/blog-post-ai-trends`)
- `docs/` - Documentation (e.g., `docs/api-reference`)

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Testing
- `chore` - Maintenance

**Examples:**
```
feat(blog): add Persian RTL support for comments
fix(ui): resolve mobile menu overlap in Safari
docs(readme): update installation instructions
```

## 🏗️ Project Structure

```
├── api/                    # API data (JSON files)
│   ├── blog/              # English blog content
│   └── fa/                # Persian content
├── components/            # Vue components
│   ├── blog/              # Blog components
│   ├── menu/              # Navigation
│   └── sections/          # Page sections
├── pages/                 # Route-based pages
│   ├── fa/                # Persian pages
│   └── blog/              # Blog pages
├── layouts/               # Page layouts
├── plugins/               # Nuxt plugins
├── assets/                # Static assets
└── public/                # Public files
```

## 💻 Coding Standards

### Vue.js Guidelines

- Use **Composition API** with `<script setup>`
- Follow **Vue 3** best practices
- Use **TypeScript** for type safety
- Implement **responsive design** principles

### Code Style

- Use **ESLint** and **Prettier** configurations
- Follow **Vue.js Style Guide**
- Use **semantic HTML** and **accessibility** best practices
- Write **self-documenting code** with clear variable names

### File Naming

- **Components**: PascalCase (e.g., `BlogPost.vue`)
- **Pages**: kebab-case (e.g., `about-us.vue`)
- **Assets**: descriptive names with context

## ✍️ Content Guidelines

### Blog Content

- **Technical Accuracy**: Ensure all technical information is current and correct
- **Cultural Sensitivity**: Respect Iranian and Middle Eastern cultural contexts
- **SEO Optimization**: Include relevant keywords and backlinks
- **Bilingual Content**: Maintain consistency between English and Persian versions

### Persian (Farsi) Content

- Use **Ray font** for Persian text
- Implement **RTL (Right-to-Left)** layout properly
- Follow **Persian typography** standards
- Maintain **cultural appropriateness**

### Image Guidelines

- Use **WebP/AVIF** formats for web optimization
- Provide **alt text** in both English and Persian
- Follow **responsive image** practices
- Optimize **file sizes** for performance

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- [ ] **Mobile responsiveness** (various screen sizes)
- [ ] **RTL layout** functionality in Persian pages
- [ ] **SEO meta tags** and structured data
- [ ] **Performance** (Core Web Vitals)
- [ ] **Accessibility** (WCAG guidelines)

### Automated Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Generate static site
npm run generate
```

## 📝 Submitting Changes

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow coding standards
   - Test thoroughly
   - Update documentation if needed

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create pull request on GitHub
   ```

### PR Template

Please use the following template for pull requests:

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser tested
- [ ] Mobile responsive tested

## Screenshots (if applicable)
Add screenshots of the changes

## Checklist
- [ ] Code follows project standards
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Browser and version**
- **Operating system**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)

### Feature Requests

For new features, please provide:

- **Use case description**
- **Benefits and impact**
- **Implementation suggestions**
- **Mockups or examples** (if applicable)

## 📞 Communication

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Email**: tecsoteam@gmail.com for direct contact

## 🎯 Areas for Contribution

### High Priority
- **Performance optimization**
- **Accessibility improvements**
- **SEO enhancements**
- **Mobile UX improvements**

### Medium Priority
- **New blog content**
- **Component refactoring**
- **Testing implementation**
- **Documentation updates**

### Future Opportunities
- **PWA enhancements**
- **Internationalization**
- **Analytics integration**
- **CMS integration**

## 🙏 Recognition

Contributors will be recognized in:
- **GitHub repository contributors**
- **Website credits page**
- **Release notes**
- **Social media mentions**

Thank you for contributing to Tecso Team's mission of delivering exceptional digital solutions! 🚀