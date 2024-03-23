# Next.js 14 

## App Router 
Next.js comes loaded with App Router; it allows to have a default `app` directory where all paths are directed to. 
- `app` directory will hold `root /` directory with page/layout files 
- `pathname` directory will hold `pathname /pathname` directory with page/layout files 

### Nested Folders 
Next.js allows folders to be nested so we can have multiple pathnames 
- ex: `/`
- ex: `/about` -> `/about/page.jsx`
- -> `/about/company` -> `/about/company/page.jsx` 
- -> `/about/career` -> `/about/career/page.jsx` 

### Dynamic Routes 
We can have dynamic routes for `[id]` 
- ex: `/blog` 
- -> `/blog/[id]` -> `/blog/[id]/page.jsx` 

## Layout 
