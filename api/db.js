import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/db.json');
  const db = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (req.url.includes('containersList')) {
    res.status(200).json(db.containersList);
  } else if (req.url.includes('searchItems')) {
    res.status(200).json(db.searchItems);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
}