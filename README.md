# Tecso Team - Iranian Digital Agency & Software Development

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nuxt.js](https://img.shields.io/badge/Nuxt-3.10.3-00DC82.svg)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)](https://www.typescriptlang.org/)

> Leading Iranian digital agency specializing in modern web development, AI solutions, cybersecurity, and mobile applications. Founded by expert developers serving Iran and Middle East markets.

## 🌟 About Tecso Team

Tecso Team is a premier Iranian digital agency headquartered in Urmia, Iran, founded by a team of expert developers led by **Sobhan Azimzadeh** (CEO & Vue.js Developer), **Ashkan Maleki** (COO & UI/UX Designer), and **Sajjad Manafi** (CTO & GoLang Developer). We specialize in cutting-edge technology solutions for businesses across Iran, Iraq, Turkey, and Azerbaijan.

### 🎯 Our Expertise

- **Platform Development** - Vue.js & Nuxt.js scalable web applications
- **AI Software Programming** - Intelligent business solutions
- **Cybersecurity Solutions** - Enterprise-grade security implementations
- **Mobile Development** - Cross-platform applications (Flutter, React Native)
- **UI/UX Design Excellence** - User-centered design for Middle Eastern markets
- **Backend Development** - GoLang & modern API architectures

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 20.x)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tecso-Dev/main-site.git
   cd main-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Visit `http://localhost:3000` to view the website.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build and run separately
docker build -t tecso-team .
docker run -p 3000:3000 tecso-team
```

## 📁 Project Structure

```
├── api/                    # API data files
│   ├── blog/              # Blog content (English)
│   ├── fa/                # Persian/Farsi content
│   ├── services/          # Service information
│   └── team/              # Team member data
├── assets/                # Static assets
│   ├── fonts/             # Custom fonts (Excon, Ray, Vazirmatn)
│   ├── images/            # Images and media
│   └── styles/            # SCSS stylesheets
├── components/            # Vue components
│   ├── blog/              # Blog-related components
│   ├── footer/            # Footer components
│   ├── header/            # Header components
│   ├── menu/              # Navigation components
│   └── sections/          # Page sections
├── layouts/               # Page layouts
│   ├── default.vue        # English layout (LTR)
│   └── Fa/                # Persian layout (RTL)
├── pages/                 # Page routes
│   ├── fa/                # Persian pages
│   ├── blog/              # Blog pages
│   └── [page].vue         # Dynamic pages
├── plugins/               # Nuxt plugins
├── public/                # Public static files
├── server/                # Server-side code
├── store/                 # State management
└── docs/                  # Documentation
```

## � Multi-Language Support

This website supports **English** and **Persian (Farsi)** with full RTL (Right-to-Left) support:

- **English**: Default layout with LTR text direction
- **Persian**: RTL layout with Ray font and Persian typography
- **SEO Optimized**: Hreflang tags for international SEO
- **Regional Targeting**: Optimized for Iran, Iraq, Turkey, Azerbaijan

### Language Routes

- `/` - English homepage
- `/fa/` - Persian homepage
- `/blog/[slug]` - English blog posts
- `/fa/blog/[slug]` - Persian blog posts

## 🎨 Design System

### Themes
- **Dark Mode** (`v-dark`) - Default professional theme
- **Light Mode** (`v-light`) - Alternative light theme
- **Dynamic Switching** - User-controlled theme selection

### Typography
- **Headings**: Excon font family
- **Body**: Vazirmatn (English), Ray (Persian)
- **Code**: Monospace fonts for technical content

### Color Palette
- **Primary**: Professional dark/light themes
- **Accent**: Brand-specific colors
- **Semantic**: Success, warning, error states

## 🔧 Technology Stack

### Frontend Framework
- **Nuxt 3** - Vue.js framework with SSR/SSG
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development

### UI & Styling
- **SCSS/SASS** - Advanced CSS preprocessing
- **FontAwesome** - Icon library
- **GSAP** - Animation library
- **Swiper** - Touch sliders and carousels

### Performance & SEO
- **@nuxt/image** - Optimized image handling
- **@nuxtjs/sitemap** - Automatic sitemap generation
- **@nuxtjs/robots** - Robots.txt management
- **PWA Support** - Progressive Web App features

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Docker** - Containerization
- **Vite** - Fast build tool

## 📊 Features

### 🌍 Multi-Language Blog System
- **6 Comprehensive Articles** in English and Persian
- **SEO-Optimized Content** with backlinks and keywords
- **Comment System** with nested replies
- **Tag-based Navigation** and categorization

### 🎯 Business-Focused Content
- **Vue.js & Nuxt.js** scalable web applications
- **AI Integration** in modern business solutions
- **Cybersecurity Best Practices** for Iranian businesses
- **Mobile Development Trends** for 2025
- **UX Design Principles** for Middle Eastern markets
- **Digital Transformation** strategies

### 🔍 Advanced SEO
- **Geo-targeting** for Iran and Middle East
- **Structured Data** (JSON-LD) for rich snippets
- **Performance Optimization** with Core Web Vitals
- **Mobile-First Design** with responsive images
- **International SEO** with hreflang support

### 📱 Progressive Web App
- **Installable** on mobile devices
- **Offline Support** preparation
- **Push Notifications** ready
- **App-like Experience** with native feel

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- **Code Style** and development practices
- **Pull Request** process
- **Issue Reporting** guidelines
- **Documentation** standards

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m "Add: feature description"`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request

## � Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors and users.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👥 Team

### Leadership
- **Sobhan Azimzadeh** - CEO & Vue.js Developer
- **Ashkan Maleki** - COO & UI/UX Designer
- **Sajjad Manafi** - CTO & GoLang Developer

### Contact Information
- **Email**: tecsoteam@gmail.com
- **Phone**: +98 905 843 2452
- **Location**: Urmia, Iran
- **Website**: [tecso.team](https://tecso.team)

## 🌟 Acknowledgments

- **Nuxt.js** - The amazing framework powering this site
- **Vue.js** - Progressive JavaScript framework
- **Iranian Tech Community** - For inspiration and support
- **Open Source Community** - For the tools and libraries

## 📊 Project Status

- ✅ **Core Development**: Complete
- ✅ **Multi-language Support**: Complete
- ✅ **SEO Optimization**: Complete
- ✅ **Performance Optimization**: Complete
- ✅ **PWA Features**: Complete
- 🔄 **Content Updates**: Ongoing
- 🔄 **Feature Enhancements**: Planned

---

**Built with ❤️ by Tecso Team - Leading Iranian Digital Agency**

*Transforming ideas into digital reality across Iran and the Middle East*