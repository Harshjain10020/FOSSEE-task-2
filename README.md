# fossee-task-2
# Custom Drupal 10 Theme (Olivero Sub-theme)

A custom responsive Drupal 10 theme featuring a clean, modern design with configurable regions and Tailwind CSS integration.

## Overview

This project is a custom **Drupal 10 sub-theme** based on the **Olivero** theme. It features:
- 🎨 Bootstrap 5 layout  
- 🌗 Dark/Light mode toggle  
- 🧱 Custom block regions  
- ✅ Responsive & accessible design  
- 📦 Bootstrap Icons integration 
Preview : https://i.imgur.com/2ercYwv.jpeg
## Installation

### Prerequisites
- Drupal 10.x installation
- Composer (for dependency management)
- Admin access to your Drupal site

### Installation Steps

1. Clone this repository into your Drupal installation's themes directory:
   ```bash
   cd /path/to/drupal/themes/custom/
   git clone https://github.com/Harshjain10020/FOSSEE-task-2.git oblivio2
   ```

2. Navigate to your Drupal administration panel
   - Go to Appearance (/admin/appearance)
   - Find "oblivio2" in the list of themes
   - Click "Install and set as default"

3. Configure blocks for each theme region:
   - Go to Structure > Block layout (/admin/structure/block)
   - Configure blocks for: Top Banner, Logo, Navigation Menu, Left Sidebar, Content, and Footer

## Theme Structure

```
oblivio2/
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality          
├── templates/              # Twig templates
│       └── page.html.twig  # Main page template
├── my_olivero_subtheme.info.yml         # Theme information
├── my_olivero_subtheme.libraries.yml    # Asset libraries definition
```

## Customizations

### Regions

The theme defines the following regions:
- **Top Banner**: For site-wide announcements or headers
- **Logo**: For site branding elements
- **Navigation Menu**: For primary navigation
- **Left Sidebar**: For supplementary content and navigation
- **Content**: For main page content
- **Footer**: For footer content and site information

### Styling

- The theme uses a combination of custom CSS and Bootstrap utility classes
- The color scheme features blue highlights with neutral backgrounds
- Responsive breakpoints ensure proper display on all devices

## Development

### Prerequisites for Theme Development
- Node.js and npm (for frontend tooling if extending)
- Basic knowledge of Twig, CSS, and Drupal theming

### Making Changes

1. Modify CSS in the `css/style.css` file
2. Adjust templates in the `templates/` directory
3. Update theme metadata in `aurora.info.yml` if needed

## Browser Support

The theme has been tested and optimized for:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

This theme is provided under the [MIT License](LICENSE).

## Credits

Developed by Harsh Jain  for the FOSSEE project.
