# Syncora Documentation

This is the documentation site for Syncora, an AI-powered synthetic data generation platform.

## Structure

The documentation is organized into three main sections:

### 1. Introduction

- **Welcome** - Overview of Syncora platform
- **Quick Start** - Get up and running in minutes with product link and login/signup flow
- **Concepts** - Understanding AI and synthetic data generation
- **Best Practices** - Guidelines for optimal results

### 2. Platform Overview

- **Platform Overview** - Complete overview of all features including:
  - Synthetic data generation
  - Data connectors
  - Contribute and earn program

### 3. Features

- **Features** - Technical features and integration guides
- **SDK Installation** - Detailed setup instructions for different platforms
- **API Reference** - Complete API documentation

## Development

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Content Structure

All documentation content is located in `content/docs/`:

- `index.mdx` - Welcome page
- `quick-start.mdx` - Quick start guide
- `concepts.mdx` - AI concepts and synthetic data
- `best-practices.mdx` - Best practices guide
- `platform-overview.mdx` - Platform features overview
- `features.mdx` - Technical features
- `features/sdk.mdx` - SDK installation guide
- `features/api.mdx` - API reference
- `meta.json` - Sidebar organization

### Routing

All documentation is served on the root route (`/`) instead of `/docs` as requested. The sidebar structure is defined in `content/docs/meta.json`.

### Customization

- **Styling**: Modify `src/app/global.css`
- **Layout**: Update `src/app/layout.config.tsx`
- **Components**: Edit `src/mdx-components.tsx`
- **Navigation**: Configure in `content/docs/meta.json`

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **Static Export**: `npm run build && npm run export`

## Contributing

1. Create a new branch for your changes
2. Add or modify content in `content/docs/`
3. Update `meta.json` if adding new pages
4. Test locally with `npm run dev`
5. Submit a pull request

## License

This documentation is part of the Syncora platform.
