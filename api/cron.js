export default function handler(req, res) {
  console.log('test cron')
  res.status(200).end('Hello Cron!');
}