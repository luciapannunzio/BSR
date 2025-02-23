import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'db.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);
  res.status(200).json(data);
}