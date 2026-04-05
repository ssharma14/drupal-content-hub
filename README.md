# Drupal Content Hub with Faceted Search

A Drupal CMS project featuring structured content types, taxonomy-based organization, and dynamic faceted search for content discovery.

## Overview

- Built a Drupal CMS with structured content types and taxonomy-based organization
- Implemented Search API and faceted filtering for dynamic content discovery
- Developed a custom Drupal module to alter search queries and improve result prioritization
- Designed scalable and accessible user interfaces with focus on performance

## Tech Stack

Drupal 10 | PHP | MySQL | Search API | Facets | Twig | JavaScript

## Features

### Content Architecture
- **Article** — News, blog posts, and editorial content
- **Events** — Time-based content with date and location fields
- **Resource** — Downloadable files, videos, and external links
- **Categories & Tags** — Taxonomy-based content organization

### Faceted Search
- Full-text search powered by Search API
- Sidebar checkbox filters for Content Type, Category, and Tags
- AJAX-powered dynamic filtering with no page reload
- Result counts on each facet item

### Custom Modules
- **Content Hub Enhancements** — Alters Search API queries using `hook_search_api_query_alter()` to boost article results and support featured content prioritization
- **Content Hub Styling** — Custom CSS, JavaScript, and Twig template overrides for the Content Hub page layout

## Local Development

This project uses [DDEV](https://ddev.readthedocs.io/) for local development.

### Prerequisites
- Docker
- DDEV

### Setup

```bash
git clone https://github.com/ssharma14/drupal-content-hub.git
cd drupal-content-hub
ddev start
ddev composer install
ddev drush site:install standard -y
ddev drush en content_hub_enhancements content_hub_styling search_api facets -y
ddev drush cr
```

Visit `https://drupal-content-hub.ddev.site` to view the site.

## Project Structure

```
web/modules/custom/
├── content_hub_enhancements/    # Search query alteration module
│   ├── content_hub_enhancements.info.yml
│   └── content_hub_enhancements.module
└── content_hub_styling/         # Theme and layout customizations
    ├── content_hub_styling.info.yml
    ├── content_hub_styling.libraries.yml
    ├── content_hub_styling.module
    ├── css/content-hub.css
    ├── js/content-hub.js
    └── templates/field--node--field-tags.html.twig
```
