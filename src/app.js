import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

// app . user use method use for middleware
// now we will do whitelist we weill decide which frnotend allow
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// we will limitign how much json we want to load so servernot get crash
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
// to keep file imahe in public
app.use(express.static("public"))

app.use(cookieParser())

export {app}