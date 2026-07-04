# Custom Domain Setup Guide for Vercel

## Step 1: Buy Your Domain (if you haven't already)

Recommended registrars:
- **Namecheap** (cheapest, ~$10-15/year for .dev)
- **Google Domains** (simple, clean interface)
- **Cloudflare Registrar** (wholesale pricing, no markup)
- **GoDaddy** (widely known, but upsells heavily)

Recommended domain: `devaamrale.dev` or `devaamrale.com`

> **Note:** `.dev` domains require HTTPS (SSL) by default. Vercel handles this automatically.

---

## Step 2: Add Domain to Vercel Project

1. Go to your Vercel dashboard: **https://vercel.com/dashboard**
2. Click on your **Website.poto** project
3. Go to **Settings** → **Domains**
4. Enter your domain: `devaamrale.dev`
5. Click **Add**

Vercel will show you the DNS records you need to add.

---

## Step 3: Configure DNS at Your Registrar

### Option A: Using Vercel Nameservers (Recommended - Easiest)

Point your domain's nameservers to Vercel:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Steps:**
1. Log in to your domain registrar (Namecheap, GoDaddy, etc.)
2. Find **DNS Settings** or **Nameservers**
3. Change from "Default" to **Custom DNS**
4. Add the two Vercel nameservers above
5. Save and wait 15-60 minutes for propagation

### Option B: Using A Record + CNAME (If you need to keep other DNS records)

**For root domain (`devaamrale.dev`):**
- Type: **A Record**
- Host: `@` (or leave blank for root)
- Value: `76.76.21.21`
- TTL: Automatic

**For www (`www.devaamrale.dev`):**
- Type: **CNAME Record**
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: Automatic

---

## Step 4: Verify Domain in Vercel

1. Back in Vercel **Settings → Domains**
2. Vercel will automatically detect when DNS propagates
3. Status should change from "Invalid Configuration" → "Valid Configuration"
4. SSL certificate will be provisioned automatically (may take a few minutes)

---

## Step 5: Redirect www to Non-www (Recommended)

In Vercel **Settings → Domains**:
- Click the **...** menu next to `www.devaamrale.dev`
- Select **Redirect to `devaamrale.dev`**
- This ensures all traffic goes to the canonical URL

---

## Step 6: Update Your Website Config

After your domain is live, update these files in your repo:

### 1. Update `next.config.ts` (if needed for rewrites/redirects)

### 2. Update `src/app/layout.tsx` metadata:

```tsx
metadataBase: new URL("https://devaamrale.dev"),
```

### 3. Update `public/robots.txt`:

```
Sitemap: https://devaamrale.dev/sitemap.xml
```

### 4. Update `public/sitemap.xml`:

```xml
<loc>https://devaamrale.dev/</loc>
```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "Domain already in use" | Remove it from the old Vercel project first |
| DNS not propagating | Wait 24-48 hours; use `whatsmydns.net` to check |
| SSL certificate error | Vercel auto-provisions SSL; wait 5-10 minutes |
| 404 errors | Make sure your Next.js app has a `page.tsx` at the root |

---

## Quick Check Commands

```bash
# Check if domain points to Vercel
dig devaamrale.dev

# Check SSL certificate
openssl s_client -connect devaamrale.dev:443

# Check DNS propagation globally
https://whatsmydns.net/#A/devaamrale.dev
```

---

## Next Steps After Domain is Live

1. **Update your social profiles** (GitHub, Instagram, LinkedIn) with the new URL
2. **Add Google Analytics** (optional, for tracking visitors)
3. **Submit to Google Search Console** for SEO indexing
4. **Test performance** at https://pagespeed.web.dev/ (should score 90+)
