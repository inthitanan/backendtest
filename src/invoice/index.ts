import { Hono } from "hono"
import db from "../db/index.js"
                                                      
const invoiceRoutes = new Hono()

invoiceRoutes.get("/", (c) => {
  const rows = db.prepare("SELECT * FROM invoice").all()
  return c.json(rows)
})

invoiceRoutes.post("/", async (c) => {
  const { InvoiceDate, Amount, Status, DueDate } = await c.req.json()

  const stmt = db.prepare(`
    INSERT INTO Invoice (InvoiceDate, Amount, Status, DueDate)
    VALUES (?, ?, ?, ?)
  `)

  const result = stmt.run(InvoiceDate, Amount, Status, DueDate)

  return c.json({
    message: "Invoice created",
    InvoiceID: result.lastInsertRowid
  })
})

export default invoiceRoutes
