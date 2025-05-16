# Tarun's Personal Blog

Welcome to the repository for my personal blog, powered by [Jekyll](https://jekyllrb.com/) and the [Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy). This blog is a space where I share my thoughts on technology, Linux, open-source projects, and my adventures with AnduinOS. The site is hosted on GitHub Pages at [https://lordarbiter.tech](https://lordarbiter.tech).

## Features

- Clean, responsive .design with dark/light mode toggle.
- Table of contents for posts.
- Categories, tags, and search functionality.
- GitHub Actions for automatic deployment to GitHub Pages.

## Getting Started

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) 
- [Jekyll](https://jekyllrb.com/) and [Bundler](https://bundler.io/)
- [Git](https://git-scm.com/)

On AnduinOS (or other Debian-based systems), install dependencies:-
```bash
sudo apt update
sudo apt install ruby ruby-dev build-essential zlib1g-dev git
gem install jekyll bundler
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Blaze2216/Blaze2216.github.io.git
   cd Blaze2216.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Serve locally**:
   ```bash
   bundle exec jekyll serve
   ```
   Open `http://localhost:4000` in your browser to preview the site.

## Deployment

This blog is deployed to GitHub Pages using a GitHub Actions workflow (`.github/workflows/pages-deploy.yml`). To deploy changes:

1. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Update blog"
   git push origin main
   ```

2. The workflow builds the site and deploys it to the `gh-pages` branch.
3. Visit [https://Blaze2216.github.io](https://Blaze2216.github.io) to see the live site.

Ensure GitHub Pages is configured in **Settings > Pages** to use the `gh-pages` branch.

## Customization

- **Posts**: Add new posts in `_posts/` with the format `YYYY-MM-DD-title.md`. Example:
  ```markdown
  ---
  layout: post
  title: "New Post"
  date: 2025-05-15 19:00:00 +0530
  categories: blog
  tags: [tech]
  toc: true
  ---
  Content here...
  ```

- **Favicon**: Update favicons in `assets/img/favicons/` (e.g., `favicon.ico`, `apple-touch-icon.png`).
- **Avatar**: Set `avatar` in `_config.yml` (e.g., `/assets/img/your-avatar.jpg`).
- **Styles**: Copy `assets/css/jekyll-theme-chirpy.scss` to `assets/css/` and append custom CSS.
- **Analytics**: Add Google Analytics ID to `_config.yml` under `google_analytics.id`.

See the [Chirpy documentation](https://chirpy.cotes.page/) for more options.

## Contributing

Suggestions and contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature"`.
4. Push to your fork: `git push origin feature-name`.
5. Open a pull request.


## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Email: tkmaharana22@gmail.com
- Twitter: [tarunkumar2216](https://twitter.com/tarunkumar2216)
- GitHub: [Blaze2216](https://github.com/Blaze2216)

Thanks for visiting my blog!
