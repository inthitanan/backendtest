import { Hono } from 'hono'
import* as z from 'zod'
import { zValidator } from '@hono/zod-validator'

const productRoutes = new Hono()


//const createProductschema = z.object({
//    id: z.number("กรุณากรอกรหัสสินค้า")
//    .refine((val) => val >= 10000 &&  val <= 99999 ,"ต้องมีรหัสสินค้า 5 ตัวอักษร"),
//    productname: z.string("กรุณากรอกชื่อสินค้า")
//        .min(5,"ชื่อสินค้าต้องมีความยาวไม่น้อยกว่า 5 ตัวอักษร"),
//    price: z.number("กรุณากรอกราคาสินค้า"),
//   cost: z.number("กรุณากรอกต้นทุนสินค้า"),
//   note: z.string()
//        .optional(),
//})

//productRoutes.post('/',zValidator('json', createProductschema), async (c) => {
//   const body =  await c.req.json()
//    return c.json({ message: 'Product created' , data: body })
//})
export default productRoutes