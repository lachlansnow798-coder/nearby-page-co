# GitHub Pages Deployment

## What GitHub Pages Does

GitHub Pages can make this website public and live even when your laptop is off.

Your public URL will usually look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/nearby-page-co/
```

## Form Submissions

GitHub Pages does not process form submissions. It can show the page, but it cannot collect booking requests unless the form is connected to a separate form service.

This site uses FormSubmit to email submissions to `Lachlansnow798@gmail.com`. The first real submission may require clicking a FormSubmit activation email.

## Deploy Steps

1. Create a new public GitHub repository named `nearby-page-co`.
2. Push this folder to that repository.
3. In GitHub, open the repository.
4. Go to `Settings` -> `Pages`.
5. Under `Build and deployment`, set:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. Wait 1-5 minutes for GitHub Pages to publish.

## Domain Setup

Do not add a `CNAME` file until you actually own the domain.

After you buy a domain:

1. In GitHub repository settings, go to `Pages`.
2. Add your custom domain.
3. GitHub will create or expect a `CNAME` file.
4. In your domain registrar DNS settings, point the domain to GitHub Pages.
5. Wait for DNS to update.
6. Turn on `Enforce HTTPS` in GitHub Pages.

## Domain Recommendation

Use a non-Australian domain first unless you have an adult helping with business eligibility.

Best first options:

- `nearbypage.co`
- `nearbypage.com`
- `nearbypageco.com`

Avoid `.com.au` for now unless an adult has an ABN or registered business details available.
