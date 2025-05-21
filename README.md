# FarmConnect Mobile App

## Overview
FarmConnect is a mobile application that connects farmers with agricultural experts to grow their farms.

## Environment Setup

This application uses environment variables to manage sensitive configuration values like API keys. Follow these steps to set up your environment:

1. Copy the `.env.example` file to create your own `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Update the values in the `.env` file with your actual credentials:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

> **IMPORTANT**: Never commit your `.env` file to version control. It contains sensitive information that should remain private.

## Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment

When deploying to production environments, make sure to configure the environment variables on your hosting platform. Do not include the `.env` file in your production build.

## Security Best Practices

1. **Keep secrets secret**: Never hardcode sensitive information in your codebase.
2. **Use environment variables**: Store sensitive information in environment variables.
3. **Restrict API keys**: Use API keys with minimal permissions needed for your application.
4. **Rotate credentials**: Regularly update your API keys and other credentials.
