# README for the Client - BTC Limited Edition Website

This document contains all the necessary information for deploying and understanding the structure of the BTC Limited Edition website.

## 🚀 Site Deployment

To ensure the site works correctly, please follow these steps:

1.  **Place `index.html` in the server root:** The main site file, `index.html` (located in this directory), must be accessible via the root URL of your domain (e.g., `https://yourdomain.com/`). All other resources (CSS, JS, images) are already configured to load relative to this file.
2.  **File Structure:** The entire folder structure (`css/`, `js/`, `images/`, `fonts/`, `assets/`) must be preserved and uploaded to the server along with `index.html`.
3.  **Video File Permissions:** Ensure that the file `btcle-html/images/Header-video.mp4` has read permissions on the server. This is necessary for the background video on the main page to display correctly. Lack of read permissions may prevent the video from loading or displaying.

**Example Server Configuration (e.g., Nginx):**

Ensure your web server is configured to serve the `index.html` file from the directory where you upload the contents of this folder when the site root (`/`) is accessed.

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/btcle-site; # Path where you will upload the contents of the btcle-html folder
    index index.html;

    location / {
        try_files $uri $uri/ /index.html?page=$uri&$args; # For SPA routing support
    }

    # Optional: Static content caching configuration
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1M;
        add_header Cache-Control "public";
    }
}
```

**Important:** For client-side navigation (`?page=...`) in this Single Page Application (SPA) to work correctly, the server must be configured to redirect all requests for non-existent files to `index.html`. An example of such a configuration for Nginx is provided above (`try_files`). For Apache, this can be done using an `.htaccess` file.

## 📄 Site Structure and Content

The site is a Single Page Application (SPA), where navigation between sections occurs without page reloads, using URL query parameters (`?page=...`).

### Current Pages and Sections:

1.  **Main Page (`/` or `/?`):** The primary entry point.
    *   Content: https://willbedeletedsoon.online/
2.  **About (`/?page=about`):** Information about BTCLE.
    *   Content: https://willbedeletedsoon.online/?page=about
3.  **Story (`/?page=story`):** The project's narrative.
    *   Content: https://willbedeletedsoon.online/?page=story
4.  **Tokenomics (`/?page=tokenomics`):** Details of the tokenomics.
    *   Content: https://willbedeletedsoon.online/?page=tokenomics
5.  **Whitepaper (`/?page=whitepaper`):** Technical documentation.
    *   Content: https://willbedeletedsoon.online/?page=whitepaper
6.  **Why BTCLE (`/?page=why-btcle`):** Key advantages.
    *   Content: https://willbedeletedsoon.online/?page=why-btcle
7.  **Roadmap (`/?page=roadmap`):** Development plans.
    *   Content: https://willbedeletedsoon.online/?page=roadmap

### "Connect" Block (Contacts):

The site navigation includes a "Connect" dropdown menu with the following links:
*   **Email:** `mailto:info@bitcoin-limitededition.com`
*   **Telegram:** `https://t.me/bitcoinlimitededition` (opens in a new tab)
*   **X (Twitter):** `https://x.com/bitcoinbtcle` (opens in a new tab)

## 🛠️ Tech Stack (Briefly)

*   **HTML5, CSS3, JavaScript (ES6+)**
*   **Single Page Application (SPA):** Implemented with a custom JavaScript router.
*   **Dynamic Content Loading:** Pages and their styles are loaded as needed.
*   **Animations:** CSS animations and JavaScript are used for interactive elements.

## 📞 Support

For any questions regarding the code structure or deployment process, please contact the developer who provided this package. 