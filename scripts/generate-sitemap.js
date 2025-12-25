const fs = require('fs')
const path = require('path')

// Simple sitemap generator for docs folder
const baseUrl = 'https://docs.vangvpn.example'
const docsDir = path.join(__dirname, '..', 'docs')

function walk(dir, filelist = []){
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filepath = path.join(dir, file)
    const stat = fs.statSync(filepath)
    if(stat.isDirectory()) walk(filepath, filelist)
    else if(/\.md$/.test(file)) filelist.push(filepath)
  })
  return filelist
}

const files = walk(docsDir)
const urls = files.map(f => {
  const rel = path.relative(docsDir, f).replace(/\\\\/g, '/').replace(/index\.md$/, '')
  const url = baseUrl + '/' + rel
  return url.replace(/\/\/$/, '/')
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>`
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap)
console.log('sitemap generated with', urls.length, 'entries')




