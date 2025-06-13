# Ignacio Rodriguez - Personal Visit Card Website

A modern, responsive personal visit card website designed for the domain ignacio.su.

## Features

- 🎨 Modern, beautiful design with gradient backgrounds
- 📱 Fully responsive for all devices
- ✨ Interactive animations and hover effects
- 🔗 Direct links to GitHub, Twitter, and phone contact
- 🖼️ Gravatar integration for profile picture
- 🌟 Smooth animations and parallax effects

## Quick Start

This website is ready to be deployed to GitHub Pages. Simply push this repository to GitHub and enable GitHub Pages in the repository settings.

## GitHub Pages Deployment

1. Create a new repository named `ignacio.su` on GitHub
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal visit card website"
   git branch -M main
   git remote add origin https://github.com/ignacionr/ignacio.su.git
   git push -u origin main
   ```

3. Go to your repository settings on GitHub
4. Navigate to "Pages" in the left sidebar
5. Under "Source", select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"

## Custom Domain Setup

To use the custom domain `ignacio.su`:

1. Create a `CNAME` file in the repository root with the content: `ignacio.su`
2. Configure your DNS settings with your domain provider:
   - Add a CNAME record pointing `www.ignacio.su` to `ignacionr.github.io`
   - Add A records for the apex domain pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Files Structure

- `index.html` - Main HTML file with semantic structure
- `styles.css` - Modern CSS with animations and responsive design
- `script.js` - Interactive JavaScript for enhanced user experience
- `README.md` - This documentation file

## Contact Information

- **GitHub**: [ignacionr](https://github.com/ignacionr)
- **Twitter**: [inz](https://twitter.com/inz)
- **Phone**: +1 (347) 796-0812

## Technologies Used

- HTML5 with semantic markup
- CSS3 with modern features (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript for interactions
- Font Awesome for icons
- Gravatar for profile image

## Browser Support

This website supports all modern browsers including:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).
