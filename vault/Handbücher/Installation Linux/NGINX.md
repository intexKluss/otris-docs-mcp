---
title: "Anpassungen an NGINX für Documents5"
source: "https://otris.software/documents/manuals/books/installation-linux/webconfig/nginx.html"
---

# Anpassungen an NGINX für Documents5

Die `default` Konfiguration muss entfernt und die Documents-Konfiguration durch einen Symlink aktiviert werden.


```bash
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/documents5 /etc/nginx/sites-enabled/documents5
systemctl restart nginx
```

rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/documents5 /etc/nginx/sites-enabled/documents5
systemctl restart nginx