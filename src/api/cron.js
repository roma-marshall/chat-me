export default function handler(req, res) {
  console.log('cron job test')
  res.status(200).end('Hello Cron!')
}