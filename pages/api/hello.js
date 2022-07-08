// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default(req, res) => {
  res.status(200).json([
    {"kode" : "nx", "title" : "Next JS"},
    {"kode" : "deno", "title" : "Dno TS"},
    {"kode" : "php", "title" : "PHP"}
  ])
}
