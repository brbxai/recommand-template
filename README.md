# Template Module

A template module built with the Recommand Framework.

## Prerequisites

- [Recommand Framework](https://github.com/brbxai/recommand-framework) installed and configured
- [Recommand Framework Core](https://github.com/brbxai/recommand-core) installed and configured
- PostgreSQL database
- [Bun](https://bun.sh)

## Installation

```bash
# Install dependencies
bun install
```

## Database Setup

This module uses Drizzle ORM with PostgreSQL. The database schema is defined in `db/schema.ts`.

```bash
# Generate database migrations (from the package directory)
bun run db:generate
```

## Running the Application

The template module is automatically loaded and integrated when you run the Recommand Framework server:

```bash
# From the main directory:
bun --cwd ./packages/template --env-file=../../.env dev
```

This will start both the server and client in development mode, and the template module will be automatically detected and made available by the Recommand framework.

## Add as New Package to a Recommand Framework Deployment 

```bash
# From the main directory
bun --cwd ./packages/framework init-package
```